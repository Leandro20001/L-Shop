
const stripe = require('stripe')('sk_test_51Pb2mfENKsQJ9EVVGjh031s97T2oZwGRQdegmyEuKggxtgYe13SvEmo3wfVDyO0zAQmP3oOSIBojNSbH6swqHQ4400KaMnJPeR')

const session = (async()=>{
    await stripe.checkout.sessions.create({
        success_url: 'https://example.com/success',
        line_items: [
          {
            price: 'price_1Pe5ITENKsQJ9EVVyjPmbvZB',
            quantity: 1,
          },
        ],
        mode: 'payment',
      });
      console.log('pago')
})
session()
