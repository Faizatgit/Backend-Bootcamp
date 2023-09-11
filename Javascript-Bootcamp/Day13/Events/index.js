const div = document.querySelector('div');

div.onclick = function (){
    div.style.backgroundColor = "purple";
}

div.ondblclick = function () {
    div.innerHTML = "Dbl clicked";
}

function scream(){
    console.log('Scream........');
}

function shout()
{
    console.log('Shout');
}

div.addEventListener('click',scream);
div.addEventListener('click',shout);