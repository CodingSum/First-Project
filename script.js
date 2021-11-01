
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelectorAll('.todo-list')
console.log(todoList)

const List = document.querySelector('.work-list');
List.addEventListener('click', function(e) {
  e.target.remove();
})

todoBtn.addEventListener('click', function() {
const todoInput = document.querySelector('.todo-input');
const List = document.querySelector('.work-list');

    if (todoInput.value == "") {

        alert("Please,add some work")

    }else {
      const userInput = todoInput.value;
      // const Content = 
      const Content = `<li class="items">${userInput} <span><i class="fas fa-trash-alt delete"></i></span></li>`;

       List.innerHTML += Content;

    todoInput.value = "";

    }

})



// // new todo 

// const input = document.querySelector('#input');
// const btn = document.querySelector('.btn');
// const list = document.querySelector('[list]');

// // create 

// function addTodo(e) {
//   e.preventDefault();
//   // create div
//   const todoDiv = document.createElement("div");
//   todoDiv.classList.add("todo");

//   // create LI

//   const newTodo = document.createElement('li');
//   newTodo.innerText = 'hey';
//   newTodo.classList.add('item');
//   todoDiv.appendChild(newTodo);
//   // dlt-btn
//   const dltBtn = document.createElement('button');
//   dltBtn.innerHTML = '<i class="fas fa-trash-alt todo-i"></i>';
//   dltBtn.classList.add("complete-btn");
//   todoDiv.appendChild(dltBtn);

//   // add div inside the ul
//   list.appendChild(todoDiv); 
// }

