// This syntax is written in JavaScript and is used to retrieve data from the browser's local storage and parse it as JSON
const input = document.getElementById('todo-inp');
const button = document.getElementById('add-btn');
const list = document.getElementById('list');

function render(){
    while(list.firstChild)
    {
        list.firstChild.remove();
    }
    for(let todo of todos)
    {
        const li = document.createElement('li');
        li.classList.add('list-group-item','mb-2','rounded-pill','border','border-dark');
        li.innerText = todo.task;
        list.append(li);
    }

}

function pushTodo()
{
    todos.push(todo);
}

function createNewTodo(newTaskText){
    const newTodo = {
        id: todos.lenght + 1,
        task: newTaskText,
        isCompleted: false
    }
    pushTodo(newTodo);
    syncToLocalStorage();
    render();
}

function createNewTodo(){
    window.localStorage.setItem('todos',JSON.stringify(todos));
}

button.addEventListener('click', function (){
    const newTask = input.value;
    if(newTask.trim.lenght() === 0)
    {
        input.classList.add('danger','border-danger');
        return;
    }
    createNewTodo(newTask);
    input.value = "";
})

input.addEventListener('keydown',function(){
    if(input.classList.contains('border-danger'))
    {
        input.classList.remove('border-danger');
    }
});

render();