// Task 1: Declare a variable using var, assign it a number and log the value to the console

var rollNo = 49;
console.log(rollNo);

// Task 2: Declare a variable using let, assign it a string and log the value to the console

let city = 'Guwahati';
console.log(city);

// Task 3: Declare a variable using const, assign it a boolean and log the value to the console

const isOnline = true;
console.log(isOnline);

// Task 4: Create variables of different data types(number, string, boolean, object, array) and log each variable's type using the typeof operator

const price = 100;
console.log(typeof(price));

const orderedObject = 'Shoes';
console.log(typeof(orderedObject));

const orderPlaced = true;
console.log(typeof(orderPlaced));

const itemsPrice = {
    'Shoes': 1000,
    'Books': 500,
}
console.log(typeof(itemsPrice))

const items = ['Shirts', 'Pants', 'Bicycle', 'Camera'];
console.log(typeof(items))

// Task 5: Delcare a variable using let, assign it an initial value, reassign a new value, and log both values to the console

let num = 10;
console.log('Initial value:', num);
num = 20;
console.log('New value:', num);

// Task 6: Try assigning a variable declared with const and observe the error

const constantNum = 50;
console.log(constantNum);
// constantNum = 55;  
// console.log(constantNum)  TypeError: Assignment to constant variable.

// FEATURE REQUEST

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console

const id = 5;
console.log('Value:', id, '\tType:', typeof(id));

const studentName = 'Bishal';
console.log('Value:', studentName, '\tType:', typeof(studentName));

const isPresent = false;
console.log('Value:', isPresent, '\tType:', typeof(isPresent));

const details = {
    'City': 'Mumbai',
    'State': 'Maharashtra',
}
console.log('Value:', details, '\tType:', typeof(details));

const subjects = ['English', 'Computer Science', 'Maths', 'Physics'];
console.log('Value:', subjects, '\tType:', typeof(subjects));

// 2. Reassignment Demo: Create a script that demonstrates the difference in behaviour between let and const when it comes to reassignment

let initialVal = 15;
console.log('Initial value:', initialVal);

initialVal = 20;
console.log('New value:', initialVal);

const initialConst = 40;
console.log('Initial value:', initialConst);

initialConst = 50; 
console.log('New value:', initialConst); // TypeError: Assignment to constant variable.












