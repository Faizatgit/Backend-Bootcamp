const btn = document.querySelector('#btn');
const inp = document.querySelector('#inp');
const form = document.querySelector('form');
const para = document.querySelector('p');

btn.addEventListener('dblclick', function () {
    console.log('Button Clicked');
    document.getElementById('btn').innerHTML = 'Button Clicked';
});

//-------------Mouse Event---------------------------

btn.addEventListener('mouseenter',function(){
    btn.style.backgroungColor = 'red';
});

btn.addEventListener('mouseleave',function(){
    btn.style.backgroungColor = null;
});

//-------------Keyboard Event---------------------

inp.addEventListener('keydown',function(Event){
    console.log('Key pressed');

if(Event.which === 13)
{
    console.log('You pressed the enter key!');
}
else
{
    console.log(Event);
}
})


//------------Form Events------------------

form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log('Form Submitted');
    console.log(`Username: ${form.elements[1].value}`);
    console.log(`Password: ${form.elements[2].value}`);
    alert('Form Submitted');
})


//------------Copy Event------------------

para.addEventListener('copy',function(){
    alert('Stop Copying now !');
    console.log('copy callback')
})