const h1 =  document.querySelector('h1');
const p = document.querySelector('p');
const allbtns = document.querySelectorAll('.btn');

// Not an efficient way

// allbtns[0].addEventListener('click',function(){
//     const r = Math.floor(Math.random()*256);
//     const g = Math.floor(Math.random()*256);
//     const b = Math.floor(Math.random()*256);

//     const rgbcolor = `rgb(${r},${g},${b})`;
//     allbtns[0].style.backgroundColor = rgbcolor;
// })

// allbtns[1].addEventListener('click',function(){
//     const r = Math.floor(Math.random()*256);
//     const g = Math.floor(Math.random()*256);
//     const b = Math.floor(Math.random()*256);

//     const rgbcolor = `rgb(${r},${g},${b})`;
//     allbtns[1].style.backgroundColor = rgbcolor;
// })

// allbtns[2].addEventListener('click',function(){
//     const r = Math.floor(Math.random()*256);
//     const g = Math.floor(Math.random()*256);
//     const b = Math.floor(Math.random()*256);

//     const rgbcolor = `rgb(${r},${g},${b})`;
//     allbtns[2].style.backgroundColor = rgbcolor;
// })

// h1.addEventListener('click',function(){
//     const r = Math.floor(Math.random()*256);
//     const g = Math.floor(Math.random()*256);
//     const b = Math.floor(Math.random()*256);

//     const rgbcolor = `rgb(${r},${g},${b})`;
//     h1.style.backgroundColor = rgbcolor;
//     h1.innerHTML = 'Button Clicked';
// })

// Efficient way of adding an event listner

function colourize(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    const rgbcolor = `rgb(${r},${g},${b})`;
    this.style.backgroundColor = rgbcolor;
    this.innerHTML = 'Clicked';

}
function dblClick()
{
    this.innerHTML = 'Double Clicked';
}

allbtns[0].addEventListener('click',colourize);
allbtns[0].addEventListener('dblclick',dblClick);

allbtns[1].addEventListener('click',colourize);
allbtns[1].addEventListener('dblclick',dblClick);

allbtns[2].addEventListener('click',colourize);
allbtns[2].addEventListener('dblclick',dblClick);

allbtns[3].addEventListener('click',colourize);
allbtns[3].addEventListener('dblclick',dblClick);

allbtns[4].addEventListener('click',colourize);
allbtns[4].addEventListener('dblclick',dblClick);


