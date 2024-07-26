// Activity 1: Selecting and manipulating elements

//Task 1: Select an HTML element by its ID and change its text content

const heading = document.getElementById('heading');
console.log(heading)
heading.innerHTML = '<p>This is the edited paragraph</p>'

//Task 2: Select an HTML element by its class and change its background color

const paragraph = document.querySelector('.paragraph')
console.log(paragraph)
paragraph.style.backgroundColor = 'violet';

// Activity 2: Creating and appending elements

//Task 3: Create a new div element with some text content and append it to the body

const bodyElement = document.querySelector('body');
// console.log(bodyElement);
const newContent = document.createElement('div');
newContent.innerText = 'This is a newly created paragraph'
bodyElement.append(newContent);

//Task 4: Create a new li element and add it to an existing ul list

const list = document.querySelector('ul');
// console.log(list);
const newListItem = document.createElement('li');
newListItem.innerText = 'Belgium(will be removed)';
list.appendChild(newListItem);

// Activity 3: Removing elements

//Task 5: Select an HTML element and remove it from the DOM

const removedPara = document.querySelector('.removed-paragraph');
removedPara.remove()

//Task 6: Remove the last child of a specific HTML element

const lastChild = list.querySelector('li:last-child')
// console.log(lastChild)
lastChild.remove()

// Activity 4: Modifying attributes and classes

//Task 7: Select an HTML element and change one of its attributes

document.querySelector('.original-heading').setAttribute('class', 'set-attribute')

//Task 8: Add and remove a CSS class to/from an HTML element

const newPara = document.getElementById('newPara');
newPara.classList.add('new-class')

document.querySelector('.newParaTwo').classList.remove('newParaTwo');

// Activity 5: Event handling

//Task 9: Add a click event listener to a button that changes the text content of a paragraph

const originalText = document.querySelector('.original-text');
// console.log(originalText)
document.querySelector('button').addEventListener('click', function(){
    console.log('button clicked')
    originalText.innerText = 'The content has been changed'
})

//Task 10: Add a mouseover event listener to an element that changes its border color

document.querySelector('.mouseover').addEventListener('mouseover', function(){
    document.querySelector('.mouseover').style.border = '2px solid green';
});

document.querySelector('.mouseover').addEventListener('mouseout', function(){
    document.querySelector('.mouseover').style.border = '2px solid salmon';
});









