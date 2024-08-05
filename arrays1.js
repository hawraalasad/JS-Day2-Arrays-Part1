let groceries = ["eggs", "milk", "chocolate", "apples", "bananas", "butter"];
let numberOfGroceries = groceries.length;
console.log(groceries[1]);
console.log(numberOfGroceries);
console.log(groceries[numberOfGroceries - 1]);
let LastGroceryProduct = groceries.pop();

console.log(groceries);
console.log(LastGroceryProduct);
groceries.push("flour", "sugar");
console.log(groceries);
let firstThreeItems = groceries.slice(0, 3);
console.log(`The first three items are ${firstThreeItems}`);
