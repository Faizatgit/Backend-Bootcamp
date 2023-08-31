const list = document.querySelector('.list-group');

list.addEventListener('change', async(event)=>{
    const id = event.target.getAttribute('todoId');
    try{
        const res = await fetch(`/todos/${id}/completed` , { method: 'POST' })

        if(res.status !== 200)
        {
            console.log('Chala');
            const checked = event.target.getAttribute('checked');
            event.target.setAttribute('checked',!checked);
            throw new Error('Cannot update at this moment');
        }
        const data = res.json();
        const li = event.target.parentElement;
        li.classList.toggle("text-decoration-line-through");
    }
    catch(err){
        const li = event.target.parentElement;
    }
    
});