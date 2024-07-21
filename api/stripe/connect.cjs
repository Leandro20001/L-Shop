const stripe = require('stripe')('sk_test_51Pb2mfENKsQJ9EVVGjh031s97T2oZwGRQdegmyEuKggxtgYe13SvEmo3wfVDyO0zAQmP3oOSIBojNSbH6swqHQ4400KaMnJPeR')


async function createProduct(){
    const newProduct =  stripe.products.create({
        name:'Chocolate'
    })
}

async function returnProducts(){
    const allProducts = await stripe.products.list({
        limit: 3,
    });
    console.log(allProducts)
}
returnProducts()
