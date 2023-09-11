// function downloadFile(url)
// {
//     console.log(`Staring download from ${url}`);
//     return new Promise((resolve,reject) => {
//         if(!url.startsWith('http'))
//         {
//             reject(new Error('Invalid url'));
//         }
//         setTimeout(() => {
//             resolve(url);
//         },3000);
//     });
// }

// function compressFile(fileName)
// {
//     console.log(`Starting the file compression from ${fileName}`);
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(fileName);
//         },2000);
//     });
// }

// function uploadFile(compressedPath)
// {
//     console.log(`Uploading the file from ${url}`);
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(compressedPath);
//         },3000);
//     });
// }

// const url = 'ws://facebook/storage/profile.jpg'

// downloadFile(url , function downloaded(url){
//     const fileName = url.split('/').pop();
//     console.log(`File downloaded successfully as ${fileName}`);
//     compressFile(fileName , function (fileName){
//         const compressedPath = fileName.split('.')[0] + ".zip";
//         console.log(`File compressed successfully as ${compressedPath}`);
//         uploadFile(compressedPath , function (){
//             const uploadPath = 'http://facebook.com/localsystem' + compressedPath;
//             console.log(`File uploaded successfully at ${uploadPath}`);
//             console.log('Everything done');
//         })
//     })
// })

// console.log("Millions of lines of code after main function");
// console.log("Millions of lines of code after main function");
// console.log("Millions of lines of code after main function");
// console.log("Millions of lines of code after main function");



//------------------------Good code using promise------------------------------


// Creating a promise
// const p = new Promise(function (resolve,reject) {
//     const randomNumber = Math.floor(Math.random() * 10);
//     if(randomNumber%2 != 0)
//     {
//         reject(new Error('Not a even number'));
//     }
//     setTimeout(() => {
//         resolve(randomNumber);
//     },3000);
// })

// Consuming a promise
// p 
//   .then((num) => {
//     console.log(num);
//   })

//   .catch((err) => {
//     console.log(err.message);
//   })

//   .finally(() => {
//     console.log('Yea chalega hi hrr case me');
//   })

//   const GITHUB_URL = "https://api.github.com/users/sabeelhps";

//   const response = fetch(GITHUB_URL);

//   response
//          .then((profile) => {
//             console.log(profile);
//          })

//          .catch((err) => {
//             console.log(err.message);
//          })

//------------Better way of writing async task using promise chain-----

// downloadFile(url)
//          .then((url) => {
//                const fileName = url.split('/').pop();
//                console.log(`File downloaded successfully as ${fileName} `);
//                return compressFile(fileName);
//          })
//          .then((fileName) => {
//                const compressedPath = fileName.split('.')[0] + ".zip";
//                console.log(`File successfullt compressed as ${compressedPath}`);
//                return uploadFile(compressedPath);
//          })
//          .then((compressedPath) => {
//                const uploadPath = 'http://facebook.com/localsystem' + compressedPath;
//                console.log(`File uploaded successfully at ${uploadPath}`);
//                console.log('Everything done!');

//          })
//          .catch((err) => {
//                console.log(err.message);
//          });

//----------Refactor Promise Chain-------------------------------

// function downloadFile(url)
// {
//    console.log(`Starting the download from ${url}`);
//    return new Promise((resolve,reject) => {
//       if(!url.startsWith('http'))
//       {
//          return reject(new Error('Invalid url!'))
//       }
//       setTimeout(() => {
//          const fileName = url.split('/').pop();
//          console.log('File downloaded successfully!')
//          return resolve(fileName);
//       },3000);
//    })
// }

// function compressFile(fileName)
// {
//    console.log(`Starting the file compression from ${fileName}`);
//    return new Promise((resolve,reject) => {
//       setTimeout(() => {
//          const compressedPath = fileName.split('.')[0] + ".zip" ;
//          console.log(`File cmpressed successfully at ${compressedPath}`);
//          resolve(compressedPath);
//       },2000)
//    })
// }

// function uploadFile(compressedPath) {
//    console.log('starting the file upload');
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            const uploadedPath = 'http://facebook.com/localsystem' + compressedPath;
//            resolve(uploadedPath);
//        }, 3000)
//    });
// }
// const URL = 'http://facebook/storage/profile.jpg';

// downloadFile(URL)
//     .then((fileName) => compressFile(fileName))
//     .then((compressedPath) => uploadFile(compressedPath))
//     .then((uploadedPath) => {
//         console.log(`File uploaded successfull at ${uploadedPath}`);
//         console.log("Everything done");
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });


// async function main(URL) {
//    const fileName = await downloadFile(URL);
//    const compressedPath = await compressFile(fileName);
//    const uploadedPath = await uploadFile(compressedPath);
//    console.log(`File uploaded successfull at ${uploadedPath}`);
//    console.log("Everything done");
// }

// main(URL);


