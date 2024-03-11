const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list")
const todoInput = document.querySelector("#todo-form input")

let toDos = [];

function saveTodo(){

   localStorage.setItem("todos",JSON.stringify(toDos));

}

function DeletTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveTodo();
}

function toDoList(todo){

    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    const br = document.createElement("br");
    span.innerText = todo.text;
    const btn = document.createElement("button");
    btn.addEventListener("click",DeletTodo);
    btn.innerText="❌"
    li.appendChild(span);
    li.appendChild(btn);
    li.appendChild(br);
    todoList.appendChild(li);
    
}

function getTodo(event){    

    event.preventDefault();
    const todo = todoInput.value;
    todoInput.value = ""
    const newTodoObj = {
        text:todo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    toDoList(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit",getTodo);

const savedToDos = localStorage.getItem("todos");

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(toDoList);
}