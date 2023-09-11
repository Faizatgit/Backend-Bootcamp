// Function for calculator

function add(x,y)
{
    let z = x+y;
    console.log(`Sum: ${z}`)
}

function sub(x,y)
{
    console.log(`Difference: ${x-y}`);
}

function multiply(x,y)
{
    console.log(`Product: ${x*y}`);
}

function divide(x,y)
{
    console.log(`Divide ${x/y}`);
}

const squareRoot = num => Math.sqrt(num);

const cubeRoot = num => Math.sqrt(num);

console.log(`Square root ${squareRoot(81)}`);
console.log(`CubeRoot: ${cubeRoot(64)}`);

add(3,5);
sub(3,4);
multiply(56,37);
divide(35235235,34);



const cart = [
    {   
        id:1,
        name: 'Iphone',
        price: 100,
        qty:2
    },
    {   
        id:2,
        name: 'Apple Watch',
        price: 200,
        qty:3
    },
    {   
        id:3,
        name: 'Macbook',
        price: 50,
        qty:4
    }
]

function totalAmount(cart)
{
    let totalAmount=0;
    for(let item of cart)
    {
        totalAmount = totalAmount + item.price*item.qty;
    }
    return totalAmount;
}

// const amount = totalAmount(cart);
// console.log(amount);

function addItem(cart,item)
{
    cart.push(item);
    return cart;
}

const newCart = addItem(cart,{
    id: 4,
    name: 'Airpods',
    price: 25,
    qty: 5
});

// console.log(newCart);

function removeItem(cart,deleteId)
{
    let index = -1;
    for(i=0;i<cart.lenght;i++)
    {
        const item = cart[i];
        if(item.id === deleteId)
        {
            index = i;
            break;
        }
    }
        if(index === -1){
            console.log("Entered item not found");
            return;
        }

    
    cart.splice(index,1);

}

removeItem(cart,8);
console.log(cart);




