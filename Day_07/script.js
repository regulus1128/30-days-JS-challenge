// Activity 1: Object creation and access

//Task 1: Create an object representing a book wiith properties like title, author and year and log the object to the console

let books = {
    'title': 'Dracula',
    'author': 'Bram Stoker',
    'year': 1897,
}

console.log(books)

//Task 2: Access amd log the title and author properties of the book object

console.log(`Name of the book: ${books.title}`)
console.log(`Author of the book: ${books.author}`)

// Activity 2: Object methods

//Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method

books.getTitleAndAuthor = function(){
    return `${books.title} by ${books.author}`
}

const result = books.getTitleAndAuthor()
console.log(result)

//Task 4: Add a method to the book object that takes a parameter(year) and updates the book's year property, then log the updated object

books.updateYear = function(newYear){
    books.year = newYear;
}

books.updateYear(1900);
console.log(books)

// Activity 3: Nested objects

//Task 5: Create a nested object representing a library with properties like name and books(an array of book objects), and log the library object to the console

const library = {
    name: 'City Library',
    books: [
        {
            'title': 'Dracula',
            'author': 'Bram Stoker',
            'year': 1897,
        }, 
        {
            'title': 'Angels and Demons',
            'author': 'Dan Brown',
            'year': 2000,
        },
        {
            'title': 'The 5 AM Club',
            'author': 'Robin Sharma',
            'year': 2015,
        },
    ]
}

console.log(library)

//Task 6: Access and log the name of the library and the titles of all the books in the library

console.log(`Name of the library: ${library.name}`)

for (const x in library.books){
    console.log(library.books[x].title)
}

for (const bookName of library.books){
    console.log(bookName.title)
}

library.books.forEach((book) => (
    console.log(book.title)
))

// Activity 4: The this keyword

//Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year and log the result of calling this method

books.getTitleAndYear = function(){
    return `Name of the book: ${this.title} | Year: ${this.year}`
}

const resultTwo = books.getTitleAndYear();
console.log(resultTwo)

// Activity 5: Object iteration

//Task 8: Use a for..in loop to iterate over the properties of the book object and log each property and its value
console.log('Book properties:')
for(const bookProperty in books){
    console.log(`${bookProperty}: ${books[bookProperty]}`)
}

//Task 9: Use object.keys and object.values methods to log all the keys and values of the book object

const keys = Object.keys(books)
const values = Object.values(books)

console.log(keys) //will return an array
console.log(values) //will return an array

keys.forEach((key) => (
    console.log(key)
))

values.forEach((value) => (
    console.log(value)
))



