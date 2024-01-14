import stack from "./Stack.mjs";


const task = new stack();

 

let taskbtn = document.getElementById('show-task-btn');
let newtaskbtn = document.getElementById('newTaskbtn');
let newTaskInput = document.getElementById('newTask');
let taskdate = document.getElementById('taskdate');
let tasktime = document.getElementById('tasktime');


newtaskbtn.addEventListener('click',function(){
    let newtask = {
        task: newTaskInput.value,
        time:tasktime.value,
        date:taskdate.value
    }
    console.log(taskdate.value,tasktime.value);
   
    task.pushintostack(newtask); 
    insertTask();
   
})
let i = 0;
function insertTask(){

    if(tasktime.value === '' || taskdate.value === ''){
        return alert('Date or Time is missing');
    }
   let stuff = task.copy();
    calltaskprinter(stuff.data[i++]);
}
function calltaskprinter(task){
   
    let div = document.createElement('div');
   
    let taskcontainer = document.getElementById('taskContainer');
    
    div.innerHTML = `
    <div>
    <h1>${task.task}
    </h1>
    ${task.date}
    ${task.time}
    </div>
    `
    taskcontainer.appendChild(div);
}

console.log(taskbtn);