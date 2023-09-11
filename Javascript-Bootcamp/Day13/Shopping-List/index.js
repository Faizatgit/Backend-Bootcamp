const itemInp = document.getElementById('item-inp');
const qtyInp = document.getElementById('qty-inp');
const list = document.getElementById('list');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click',function(){
    const item = itemInp.value;
    const qty = qtyInp.value;

    const li = document.createElement('li');
    li.innerHTML = `${item}------${qty}`;
    list.appendChild(li);

    item = "";
    qty = "";
})