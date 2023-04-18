// Drawback of Callback Function
// 1. Callback Hell *** Very - 2 Imp Interview Function
// 2. Inversion of Control -> Loose control over Code i.e. Delegating the control of your function to another function


// Callback Hell is basically a nested callbacks in a function. PYRAMID OF THE DOOM

createOrder(items, (quantity, price) =>{
    console.log("Gets total Items in Cart");
    proceesToPayment((quantity,price) => {
        quantity*price;
        getPrice((items, price) =>{
            console.log("Search Items with the Price");
            calculate(items,price);
        })
    })
})