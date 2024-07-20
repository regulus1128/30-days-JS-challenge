// Activity 1: Template Literals

//Task 1: Use template literals to create a string that includes variables for a person's name and age,and log the string to the console

const personName = 'John Wick'
const age = '54'

console.log(`Name of the person: ${personName} | Age: ${age}`)

//Task 2: Create a multi line string using template literals and log it to the console

console.log(`This is
a 
multiline 
string`)

// Activity 2: Destructuring

//Task 3: Use array destructuring to extract the first and second elements from an array and log it to the console

const nums = [4, 7, 10, 15, 20]

const [firstNum, secondNum] = nums;
console.log(firstNum);
console.log(secondNum);

//Task 4: Use object destructuring to extract the title and author froma book object and log it to the console

const book = {
    'title': 'Angels and Demons',
    'author': 'Dan Brown',
    'year': 2000,
    'genre': 'Thriller',
}

const { title, author } = book;
console.log(`Title of the book: ${title}`)
console.log(`Author of the book: ${author}`)

// Activity 3: Spread and rest operators

//Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the array to the console.

const cities = ['Berlin', 'Madrid', 'Houston']
const newCities = [...cities, 'Mumbai', 'Bangkok']
console.log(newCities)

//Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them and return the result

function sum(...numbers){
    return numbers.reduce((acc, curr) => acc+curr, 0);
}

console.log(sum(1,2,3,4,5))

// Activity 4: Default parameters

//Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter

function product(num1, num2 = 1){
    return num1*num2;
}

console.log(product(4, 5))
console.log(product(5))

// Activity 5: Enhanced object literals

//Task 8: Use enhanced object literals to create an object with methods and properties and log thr object to the console

const playerName = 'Messi';
const club = 'Inter Miami';
const jerseyNo = 10;
const country = 'Argentina';

const footballer = {
    playerName,  
    club,
    country,
    jerseyNo,
    getNameAndClub(){
        console.log(`The name of the footballer is ${this.playerName} and he plays for ${club}, bearing jersey number ${this.jerseyNo}`)
    },
    getCountry(){
        console.log(`He is born in ${country}`)
    }

}

console.log(footballer)

//Task 9: Create an object with computed property names based on variables and log the object to the console

const prop1 = 'name';
const prop2 = 'age';
const prop3 = 'city';

const personDetails = {
    [prop1]: 'David',
    [prop2]: 45,
    [prop3]: 'London',
}

console.log(personDetails);



