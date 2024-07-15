import express from 'express'
import { db } from '../db.js'
import { Users,Products } from '../db.js'
import { Index,Push,Log } from '../controllers/UsersController.mjs'
import pkg from '@stripe/stripe-js'
import jwt from 'jsonwebtoken'
//em breve const {Stripe} = pkg

import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const userTest = {name:'Pedro',email:'pedrin@gmail.com',address:'Bahia'}


app.get('/products',Index)

app.post('/cadastrar-se',Push)

app.post('/entrar',Log)


app.listen(3000,()=>{
    console.log('rodando em http://localhost:3000/products')
})
