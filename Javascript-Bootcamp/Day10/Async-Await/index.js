//"async and await make promises easier to write"
//async makes a function return a Promise
//await makes a function wait for a Promise


//      async keyword

// async function add(a,b) {
//     if(a+b === 9)
//     {
//         throw new Error('9 is not a lucky number');
//     }
//     else{
//         return a+b;
//     }
// }

// console.log(add(2,3));

// add(4,5)
//        .then((val) => {
//         console.log(val);
//         console.log('Inside then');
//        })

//        .catch((err) => {
//         console.log(err.message);
//         console.log('Promise Rejected');
//        })





    //    async function main(gitub_url)
    //    {
    //     console.log('Starting the main function');
    //     console.log('Fetching the github url');
    //     fetch(gitub_url)

    //         .then((response) => {
    //             return response.json();
    //         })

    //         .then((data) => {
    //             console.log(data)
    //         })
        
    //    }

    //    main('https://github.com/Faizatgit?tab=overview&from=2023-08-01&to=2023-08-01');
       
       
//---------------More Compact way of writing async keyword-------------------------------


//The try statement defines a code block to run (to try).
//The catch statement defines a code block to handle any error.
//The finally statement defines a code block to run regardless of the result.
//The throw statement defines a custom error.


// async function main(github_url)
// {
//     try{
//         console.log('Starting the main function');
//         console.log('Starting to fetch the github profile');
//         const res = await fetch(github_url);
//         console.log('Starting to read the data of the body');
//         const data = await res.json();
//         console.log('Data Parsed completely');
//         console.log(data);
//     }

//     catch(err){
//         console.log(err.message);
//     }
// }

// main('https://github.com/Faizatgit?tab=overview&from=2023-08-01&to=2023-08-01');

// console.log('After the main function call');
// console.log('After the main function call');
// console.log('After the main function call');
// console.log('After the main function call');

// Resolve should only pass a single argument

// const makePromise = () => new Promise((resolve,reject) => resolve({a:1,b:2}));

// makePromise().then((val) => {
//     console.log(val.a);
//     console.log(val.b);
// })

