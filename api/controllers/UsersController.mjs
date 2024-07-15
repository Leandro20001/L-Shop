import { json } from "sequelize"
import { db } from "../db.js"
import { Products,Users } from "../db.js"
import jwt from 'jsonwebtoken'
const SECRET = 'testejwt'
export async function Index (req,res){
    const response = await Products.findAll()
    res.send(response)
}

export async function Push(req,res){
    await Users.create({
        name:await req.body.name,
        email:await req.body.email,
        address:await req.body.address,
        password:await req.body.password
    })
    res.send('usuario cadastrado')
}

//função para rotas certificadas ->>
function verifyToken(req,res,next){
    const token = req.headers['authorization']
    jwt.verify(token,SECRET,(err,decoded)=>{
        if(err)return res.status(401).end()
        req.user_key = decoded.user_key
    })
}


export async function Log(req,res){
    const wanted = await Users.findOne(
        {where:
            {email:await req.body.email,password:await req.body.password}
        })
        const token = jwt.sign({user_key:1},SECRET,{expiresIn:300})

        
        if(wanted !==null && wanted!== undefined){
            res.send([wanted,json({auth:true,token}) ])
        } else res.status(401).end()
}
