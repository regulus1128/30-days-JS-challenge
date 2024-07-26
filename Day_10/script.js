// Activity 1: Basic event handling

//Task 1: Add a click event listener to a button that changes the text content of a paragraph

const button = document.querySelector('.button')
const text = document.getElementById('text')
button.addEventListener('click', function(){
    text.innerText = 'This is the updated text'
})

//Task 2: Add a double click event listener to an image that toggles its visibility

const image = document.getElementById('image');
image.addEventListener('dblclick', function(){
    console.log('double clicked');
    image.classList.toggle('image-display');
})

// Activity 2: Mouse events

//Task 3: Add a mouseover event listener to an element that changes its background color

const paragraph = document.getElementById('paragraph');
paragraph.addEventListener('mouseover', function(){
    paragraph.style.backgroundColor = 'teal';
    paragraph.style.color = 'white';
})

//Task 4: Add a mouseout event listener to an element that resets its background color

paragraph.addEventListener('mouseout', function(){
    paragraph.style.backgroundColor = 'white';
    paragraph.style.color = 'black';
})

// Activity 3: Keyboard events

//Task 4: Add a keydown event listener to an input field that logs the key pressed to the console

const key = document.getElementById('key');
key.addEventListener('keydown', function(e){
    console.log(`key pressed: ${e.key}`)
})

//Task 4: Add a keyup event listener to an input field that displays the current value in a paragraph

const keyInfo = document.querySelector('.key-info');
document.getElementById('keySecond').addEventListener('keyup', function(e){
    // console.log(`key pressed: ${e.key}`)
    keyInfo.innerText = `key pressed: ${e.key}`
})

// Activity 4: Form events

//Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console

document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`City: ${city}`)
})

//Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph

const dropdown = document.getElementById('dropdown')
const dropValue = document.getElementById('dropdown-value')

dropdown.addEventListener('change', function(){
    dropValue.innerText = `Selected value: ${dropdown.value}`
})

// Activity 5: Event delegation

//Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation

const unorderedList = document.querySelector('ul');
unorderedList.addEventListener('click', function(e){
    console.log(e.target.innerText)
})

//Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements

const parent = document.getElementById('parent')
const addChild = document.getElementById('addChild')

parent.addEventListener('click', (e) => {
    if(e.target && e.target.classList.contains('child')){
        console.log(e.target.textContent)
    }
})

addChild.addEventListener('click', function(){
    const newChild = document.createElement('div');
    newChild.textContent = 'Child element';
    newChild.classList.add('child');
    parent.appendChild(newChild);
})


