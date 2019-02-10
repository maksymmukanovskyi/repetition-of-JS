'use strict'

// const products = {
//     bread: 10,
//     milk: 15,
//     apples: 20,
//     chicken: 50,
//     cheese: 40,
//   };

//   const order = {
//     bread: 2,
//     milk: 2,
//     apples: 1,
//     cheese: 1,
// };

//   console.log(products);

// const Cashier = function(name, productDatabase){
//     this.name = name;
//     this.productDatabase = productDatabase;
//     this.customerMoney = 0;
//     this.totalPrice = 0;
//     this.changeAmount = 0;
//     this.getCustomerMoney = function(value){
//         this.customerMoney = value;
//     };
//     this.countTotalPrice = function(order){
//         for(let key in order){
//             if(order.hasOwnProperty(key)){
//            this.totalPrice += order[key] * this.productDatabase[key];
//             }
//         }
//         return this.totalPrice;
//     };
//     this.countChange = function(){
//         if(this.customerMoney >= this.totalPrice){
//         this.changeAmount =   this.customerMoney - this.totalPrice;
//         return this.changeAmount;
//         }else{
//             return null;
//         }
//     };
//     this.onSuccess = function(change){
//         return this.changeAmount > 0? alert(`Thank you for your purchase, your change ${this.changeAmount}!`) : alert(`Thank you for your order!`);
//     };
//     this.onError = function(arg){
//         alert(`Unfortunately ${arg} $ is no enough money for your order.`)
//     };
//     this.reset = function(){
//         this.customerMoney = 0;
//     };

// };




// const mango = new Cashier('Mango', products);

// console.log(mango.name); // Mango
// console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
// console.log(mango.customerMoney); // 0

// const totalPrice = mango.countTotalPrice(order);
// console.log(totalPrice);
// mango.getCustomerMoney(20);
// console.log(mango.customerMoney);
// const change = mango.countChange();
// console.log(change);

// if(change !== null){
//     mango.onSuccess();
// }else{
//     mango.onError(mango.customerMoney);
// }
// mango.reset();
// console.log(mango.customerMoney);

const products = {
    zeroGround: null,
    sneekers: 1.25,
    freshSnack: 2.15,
    bounty: 1.15,
    cocacola: 0.85,
    fanta: 0.80,
    sparklingWater: 0.5,
};


const userChoise = Number(prompt(`Type the number for your choise
1 - sneekers (1.25),
2 - freshSnack (2.15),
3 - bounty (1.15),
4 - cocacola (0.85),
5 - fanta (0.8),
6 - sparklingWater (0.5).
`));

const userQuantity = Number(prompt(`Type number of selected products`));
const givenMoney = prompt(`Please type your amount`);


const Vendor = function(choise, quantity, productDataBase, money){
    this.order = 0;
    this.productName = choise;
    this.productQuantity = quantity;
    this.productDataBase = productDataBase;
    this.totalPrice = 0;
    this.customerMoney = money;
    this.changeAmount;

    this.constructOrder = function(){
        const keys = Object.entries(this.productDataBase);
        
        for(const key of keys){
            if(keys.indexOf(key) === this.productName){
                this.order = key[1];
            }
        }
    }

    this.countTotalPrice = function(){
        this.totalPrice = this.order * this.productQuantity;
    };



    this.countChange = function(){
        if(this.customerMoney > this.totalPrice){
            this.changeAmount = this.customerMoney - this.totalPrice;
        }else{
            this.changeAmount = null;
        }
    };

    this.onSuccess = function(){
       return this.changeAmount > 0? alert(`Thank you for your order! Your change is ${this.changeAmount.toFixed(2)} $.`): alert(`Thank you for your order!`)
    };

    this.onError = function(){
        if(this.customerMoney !== null){
        return alert(`Unfortunately the amount your entered ${this.customerMoney} $  is not sufficient`)
        }else
        {return alert(`Operation was declined`)}
    };

    this.reset = function(){
        this.order = 0;
        this.totalPrice = 0;
        this.changeAmount = 0;
    };
    this.activationFn = function(){
            this.constructOrder();
            this.countTotalPrice();
            this.countChange();
        if(this.changeAmount !== null){
            this.onSuccess();
        }else{
            this.onError();
        }
    }

};

console.log(userChoise);
console.log(userQuantity);
console.log(givenMoney);

const newStore = new Vendor(userChoise, userQuantity, products, givenMoney);
newStore.activationFn();
console.log(newStore);
newStore.reset();
console.log(newStore);



