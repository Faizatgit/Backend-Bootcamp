
// Event delegation is a programming concept often used in web development to optimize event handling and improve performance.
// It involves attaching an event listener to a higher-level element in the DOM (Document Object Model) hierarchy, rather than to individual child elements. 
// This way, you can take advantage of event bubbling, where an event triggered on a nested element "bubbles up" through its parent elements.

const section = document.querySelector('section');

section.addEventListener('click',function (event){
    if(event.target.tagName === 'BUTTON')
    {
        console.log(event.target);
        event.target.style.backgroundColor = 'Grey';
    }
})

const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

grandparent.addEventListener('click',function (event)
{
    console.log(event.target);
    console.log('grandparent clicked');
    // grandparent.innerHTML = 'Grandparent Clicked';
})

parent.addEventListener('click',function (event)
{
    console.log(event.target);
    console.log('parent clicked');
    // parent.innerHTML = 'parent Clicked';
})

child.addEventListener('click',function (event)
{
    console.log(event.target);
    console.log('Child clicked');
    // grandparent.innerHTML = 'Child Clicked';
})