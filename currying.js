// const add = (num1, num2) => num1 + num2;
// const increment = number => add(1, number);
// console.log(incrment(2)) // 3

// refatorando
// const add = num1 => num2 => num1 + num2;
// const increment = add(2);
// console.log(increment(3));
// console.log(add(3)(2));


// const getDiscount = (price, discount) => price * discount;
// const descount1 = getDiscount(770, .10);
// const descount2 = getDiscount(350, .10);
// const descount3 = getDiscount(1190, .10);
// console.log(getDiscount(500, 0.1));



const getDiscount = (discount) => (price) => price * discount;

// const getPrice = getDiscount(.10);
const getLoyalCustomerDiscount = getDiscount(.10);
const getExcelentCustomerDiscount = getDiscount(.20);
const getAmazingCustomerDiscount = getDiscount(.30);
// console.log(getPrice(747));
console.log(
    getLoyalCustomerDiscount(747),
    getExcelentCustomerDiscount(747),
    getAmazingCustomerDiscount(747)
);