import stack from "./Stack.mjs";

let arr = ["onion","tomato","greenChilli"]
const task = new stack();

 

let taskbtn = document.getElementById('show-task-btn');
let newtaskbtn = document.getElementById('newTaskbtn');
let newTaskInput = document.getElementById('newTask');

newtaskbtn.addEventListener('click',function(){
    let newtask = newTaskInput.value;
    task.pushintostack(newtask); 
    calltaskprinter();
})
let i = 0;
function calltaskprinter(){
    let div = document.createElement('div');
    let tasks = task.toArray();
    let taskcontainer = document.getElementById('taskContainer');
    div.innerHTML = `
    <div>
    <h1>${tasks[i++]}
    </h1></div>
    `
    taskcontainer.appendChild(div);
}

console.log(taskbtn);