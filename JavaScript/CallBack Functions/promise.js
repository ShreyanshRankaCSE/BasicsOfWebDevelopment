// Promise in JS-> A object in JS which represents eventual completion of the asynchronous function and it's resulting value.
// Promise Object supports two properties: State & Result
// States ->  PENDING, FULFILLED or REJECTED
// Result ->  undefined, a result value, an error object

// Any Function's State -> will be Pending -> then either Fulfilled / Rejected -> later on in Settled State

// Syntax

// const myPromise = new Promise((resolve, reject) => {
//     // Our Target => Performs a Asynchronous Operation

//     if(success){
//         resolve(value);
//     }
//     else{
//         reject(value);
//     }
// })


// let getData = () => {
//     // DB Call to get the data of the User from the Database
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//     resolve([
//          {fname:'Shreyansh', age : 21},
//             {fname:'Shrey', age : 91}
//         ])
//         }, 1000);
//     });
// };

// function display(data){
//     console.log(data);
// }

// let promise = getData();
// console.log(promise);
// promise.then(data => display(data));


// Task 1: Asynchronous Function for addition
let success = true;
let sum = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(a == undefined || b == undefined){
                reject('Please provide correct parameters');
            }else{
                resolve(a+b);
            }
            // if(success){
            //     resolve(
            //         a + b 
            //     )
            // }
            // else{
            //     reject(
            //         console.log("No Numbers Found")
            //     )}
        },1000);        
    })
};

let promise = sum(4,5);
//console.log(newPromise);
//then() => It is used to schedule a callback to be executed when the Promise is fulfilled
promise.then(data => console.log(data));

//catch() => Schedule a callback to be invoked when the promise is rejected.
promise.catch((error) =>  console.log(error));

//finally() => You basically place the code in finally() method whether the promise is fulfilled or rejected
let func = () => {console.log("You have to call me, whether your promise is resolved or rejected");}

let promise1 = sum(5,7);

promise.then(data => console.log(data)).catch((error) => console.error(error));

promise1.then(value => console.log(value)).catch((error) => console.log(error)).finally(() => {func();});


// all() => Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.

let newPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(3);
},1000);
});

let newPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(4);
    },1000);
});

Promise.all([newPromise1,newPromise2]).then((res) => {
    console.log(res[0]);
    console.log(res[1]);
}).catch(() => {
    console.log("Error Found");
}).finally(() => {
    console.log("I'll always run");
});

Promise.race([newPromise1,newPromise2]).then((res) => {
    console.log(res);
}).catch(() => {
    console.log("Error Found");
})

Promise.allSettled