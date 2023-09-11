const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');

pen.fillStyle = 'yellow';

let init_x = 100;
let init_y = 100;

let w = 1000;
let h = 600;

function init()
{

}

function draw()
{
    pen.clearRect(0,0,w,h);
    pen.fillRect(init_x,init_y,50,50);
}

function update()
{
    init_x = init_x + 1*50;
}

function gameLoop()
{
    update();
    draw();
}

init();
const id = setInterval(gameLoop,50);