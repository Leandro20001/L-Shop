import dotenv from 'dotenv'
dotenv.config({path: path.resolve('../.env')})
const stripe = require('stripe')(process.env.STRIPE_ID)

const session = (async()=>{
    await stripe.checkout.sessions.create({
        success_url: 'https://example.com/success',
        line_items: [
          {
            price:process.env.PRICE_ID,
            quantity: 1,
          },
        ],
        mode: 'payment',
      });
      console.log('pago')
})
session()
