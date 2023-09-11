class PizzaStore{
    
    static cart = [
        {   
            id:999,
            name: 'Cheese Pizza',
            price: 500,
        },
        {
            id:888,
            name: 'Onion Pizza',
            price: 100,
        },
        {   
            id:777,
            name: 'Capcicum Pizza',
            price: 200,
        },
        {   
            id:666,
            name: 'Corn Pizza',
            price: 300
        }
    ];

    staticWalletAmount = 100000;

    static getAllPizza()
    {
        return new Promise((resolve,reject) => {
            const obj = this;
            setTimeout(() => {
                resolve(obj.cart);
            },2000);
        })
    }

    static placeOrder()
    {
        return new Promise((resolve,reject) => {
            const obj = this;
            setTimeout(() => {
                const orderId = "PZ" + String(Math.floor(Math.random() * 8999 + 1000));
                const totalAmount = obj.cart.reduce((total,curr) => { total + curr},0);
                resolve({orderId,totalAmount});
            },2000);
        })
    }

    static proceedToPayment()
    {
        return new Promise((resolve,reject) => {
            const obj = this;
            setTimeout(() => {
                const TId = "TXN" + String(Math.floor(Math.random() * 89999 + 10000));
                resolve({TId});
            },2000);
        })
    }

    static walletAmount(totalAmount)
    {
        return new Promise((resolve,reject) => {
            const obj = this;
            setTimeout(() => {
                obj.walletAmount = obj.walletAmount - totalAmount;
                resolve(obj.walletAmount);
            },2000)
        })
    }
    static updatePizzaById(pizzaId)
    {
        return new Promise((resolve,reject) =>{
            const obj = this;
            setTimeout(() => {
                const discountedCart = obj.cart.map((item) => {
                    return pizzaId === item.id ? {...item,price: item.price * 0.5 } : item
                },2000);
                obj.cart = discountedCart;
                resolve(true);
            })
        })
    }

}

// async function main()
// {
//     const pizzas = await PizzaStore.getAllPizza();
//     console.log(pizzas);
//     const {orderId,totalAmount} = await PizzaStore.placeOrder();
//     console.log({orderId,totalAmount});
// }

// main();

async function createPizzaorder(){
    try{
        const {orderId,totalAmount} = await PizzaStore.placeOrder();
    console.log(`Order placed with order id :${orderId}......proceeding to payment`);
    const {paymentId} = await PizzaStore.proceedToPayment(orderId);
    console.log(`payment succesfull with payment Id : ${paymentId}`);
    const updateWAlletAmount = await PizzaStore.walletAmount(totalAmount);
    console.log(`Updated wallet amount: ${updateWAlletAmount}`);
    }

    catch(err){
        console.log('Something went wrong');
        console.log(err.message);
    }
    
}

function sendNotification() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Notfication sent!');
            resolve();
        },1000);
    });
}

async function updateBulkPizza(...pizzaIds) {
    
}

updateBulkPizza(999, 777, 666);

async function main() {
    console.log('START TRANSACTION');
    await createPizzaorder();
    await sendNotification();
    console.log('END TRANSACTION');
}

main();