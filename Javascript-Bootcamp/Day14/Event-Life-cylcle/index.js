const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

grandparent.addEventListener('click',function (event){
    event.stopPropagation();
    console.log('Grandparent');
},false);

parent.addEventListener('click',function (event){
    event.stopPropagation();
    console.log('Parent');
},false);

child.addEventListener('click',function (event){
    event.stopPropagation();
    console.log('Child');
},false);
