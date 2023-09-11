// Promise

const p = new Promise((resolve,reject) => {
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random()*10);
    if(randomNumber%2 === 0)
    {
        resolve(randomNumber);
    }
    else{
        reject(new Error('Cannot be divided by 2'));
    }
    },3000);
})

p  
   
    .then((num) => {
        console.log(num);
        console.log('Promise Resolved');
    })

    .catch((err) => {
        console.log(err.message);
        console.log('Promise Rejected')
    });