import { taskadd } from "./add-todo.js";
import { mainfunction } from"./mainfunction.js";
import { panding } from "./add-todo.js";
import { complaTeTask,impTasktext } from "./mainfunction.js";

let totaltask =JSON.parse(localStorage.getItem('task') || "[]");
    ;
const taskbtn = document.querySelector('#added');
const todolist = document.querySelector('ul');
const srachBtn = document.querySelector('#search');
const taskdis = document.querySelector('#detail');


document.addEventListener('DOMContentLoaded',()=>{

    totaltask.forEach(element => {

        const taskpera = document.createElement('li');
        const taskdiv  = document.createElement('div');
        const editbtn = document.createElement('button');
        const delbtn = document.createElement('button');
        const complatebtn = document.createElement('button');
        const importntbtn = document.createElement('button');
    
        taskdiv.classList.add('pera');
        taskpera.classList.add('p');
        delbtn.classList.add('btnsize');
        editbtn.classList.add('btnsize');
        complatebtn.classList.add('btnsize');
        importntbtn.classList.add('btnsize');
    
        taskdis.appendChild(taskdiv);                                         
        taskdiv.appendChild(taskpera);    
        taskdiv.appendChild(editbtn);
        taskdiv.appendChild(importntbtn);
        taskdiv.appendChild(complatebtn);
        taskdiv.appendChild(delbtn);
        
        
        delbtn.innerText = 'delete';
        editbtn.innerText = 'edit';
        complatebtn.innerText = 'complate';
        importntbtn.innerText = 'imp';
    
        taskpera.setAttribute('data-id', element.id);
    
        taskpera.innerText = element.task;

        if (element.import === true) {
            taskpera.classList.add("important");
        }

        if(element.complatetask){
            taskpera.style.textDecoration = "line-through";
        }
        
        let uncomlatetask = totaltask.filter(task => task.complatetask === false);
        panding.innerText = `Panding task ${uncomlatetask.length}`;

        let complate = totaltask.filter(task => task.complatetask === true);
        complaTeTask.innerText = `complated task  ${complate.length}`;

        let imptask = totaltask.filter(task=>task.import === true);
        impTasktext.innerText = `total important task ${imptask.length}`;

    });
})

taskbtn.addEventListener("click", taskadd);
todolist.addEventListener('click',mainfunction);

srachBtn.addEventListener('keyup',()=>{
    detail.innerHTML = "";
    
    let findTask = srachBtn.value;
    
    const findfilter = totaltask.filter(task => task.task.includes(findTask));

    findfilter.forEach((element)=>{
        const taskpera = document.createElement('li');
        const taskdiv  = document.createElement('div');
        const editbtn = document.createElement('button');
        const delbtn = document.createElement('button');
        const complatebtn = document.createElement('button');
        const importntbtn = document.createElement('button');
    
        taskdiv.classList.add('pera');
        taskpera.classList.add('p');
        delbtn.classList.add('btnsize');
        editbtn.classList.add('btnsize');
        complatebtn.classList.add('btnsize');
        importntbtn.classList.add('btnsize');
    
        taskdis.appendChild(taskdiv);                                         
        taskdiv.appendChild(taskpera);    
        taskdiv.appendChild(editbtn);
        taskdiv.appendChild(importntbtn);
        taskdiv.appendChild(complatebtn);
        taskdiv.appendChild(delbtn);
        
        
        delbtn.innerText = 'delete';
        editbtn.innerText = 'edit';
        complatebtn.innerText = 'complate';
        importntbtn.innerText = 'imp';
    
        taskpera.setAttribute('data-id', element.id);
    
        taskpera.innerText = element.task;

        if (element.import === true) {
            taskpera.classList.add("important");
        }

        if(element.complatetask){
            taskpera.style.textDecoration = "line-through";
        }
        
        let uncomlatetask = totaltask.filter(task => task.complatetask === false);
        panding.innerText = `Panding task ${uncomlatetask.length}`;

        let complate = totaltask.filter(task => task.complatetask === true);
        complaTeTask.innerText = `complated task  ${complate.length}`;

        let imptask = totaltask.filter(task=>task.import === true);
        impTasktext.innerText = `total important task ${imptask.length}`;
    })

})

export{taskbtn ,totaltask};
