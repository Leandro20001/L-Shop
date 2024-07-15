import dotenv from 'dotenv'
import path from 'path'
dotenv.config({path: path.resolve('../.env')})

import { Sequelize } from "sequelize"
export const db = new Sequelize (process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
    dialect: 'mysql',
    define:{
        timestamps:false
    }

})

export const Products = db.define(
    'Products',
    {
        product:{
           type:Sequelize.DataTypes.STRING,
            allowNull : false
        },
        price:{
            type:Sequelize.DataTypes.INTEGER,
            allowNull:false
      }

   }
)

export const Users = db.define(
    'Users',
    {
        name:{
            type:Sequelize.DataTypes.STRING,
            allowNull : false
        },
        email:{
            type:Sequelize.DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        address:{
            type:Sequelize.DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:Sequelize.DataTypes.INTEGER,
            allowNull:false,
        }
    }
)
//Users.sync({force:true})



//Users.create({
  //  name:'David Oliveira',
  //  email:'daviolieira321@gmail.com',
  //  address:'Taboão Da Serra,SP'
//})

//Products.create({product:'Bebê Da Growth',price:320})



