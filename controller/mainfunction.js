import { task, panding } from "./add-todo.js";
import { totaltask } from "./index.js";
import { taskbtn } from "./index.js";

const main2 = document.querySelector('.main2');

let complaTeTask = document.querySelector('.complated');
let impTasktext = document.querySelector('.imptotal');

// Global flag to track editing state
let isEditing = false;

const mainfunction = (e) => {
    const taskElement = e.target.parentElement.querySelector('.p');
    const taskId = parseInt(taskElement.getAttribute('data-id'));

    const update = totaltask.find(t => t.id === taskId);

    let maincomplatetask = update.complatetask;
    let imptask = update.import;

    let clicktask = e.target;

    if (clicktask.innerText === 'Edit') {
        if (isEditing) {
            alert('Finish editing the current task before editing another.');
            return; // Prevent multiple edits
        }
        isEditing = true; // Set the flag to true

        if (maincomplatetask === false) {
            task.value = e.target.previousElementSibling.innerText;
            taskbtn.remove();

            const updatetask = document.createElement('button');
            const cancle = document.createElement('button');
            updatetask.innerText = 'Update';
            cancle.innerText = 'Cancel';
            updatetask.classList.add('btnsize');
            cancle.classList.add('btnsize');

            // Attach buttons to the current task container
            main2.appendChild(updatetask);
            main2.appendChild(cancle);

            updatetask.addEventListener("click", () => {
                if (task.value !== "") {
                    if (update) {
                        update.task = task.value;
                        taskElement.innerText = task.value;
                        localStorage.setItem('task', JSON.stringify(totaltask));
                    } else {
                        alert('Task not found!');
                    }
                    task.value = '';
                    task.focus();
                    updatetask.remove();
                    cancle.remove();
                    main2.appendChild(taskbtn);
                    isEditing = false; // Reset the flag
                } else {
                    alert('Please enter your task');
                }
            });

            cancle.addEventListener("click", () => {
                updatetask.remove();
                cancle.remove();
                main2.appendChild(taskbtn);
                task.value = '';
                task.focus();
                isEditing = false; // Reset the flag
                return false;
            });
        }
    } else if (clicktask.innerText === 'Imp') {
        if (maincomplatetask === false && imptask === false) {
            taskElement.classList.add("important");
            update.import = true;
            localStorage.setItem('task', JSON.stringify(totaltask));

            let imptask = totaltask.filter(task => task.import === true);
            impTasktext.innerText = ` important task  ${imptask.length}`;
        } else {
            taskElement.classList.remove("important");
            update.import = false;
            localStorage.setItem('task', JSON.stringify(totaltask));
            let imptask = totaltask.filter(task => task.import === true);
            impTasktext.innerText = ` important task ${imptask.length}`;
        }
    } else if (clicktask.innerText === 'Complate') {
        if (maincomplatetask === false) {
            update.complatetask = true;
            localStorage.setItem('task', JSON.stringify(totaltask));

            taskElement.style.textDecoration = "line-through";

            let complate = totaltask.filter(task => task.complatetask === true);
            complaTeTask.innerText = `Completed task ${complate.length}`;

            let uncomlatetask = totaltask.filter(task => task.complatetask === false);
            panding.innerText = `Pending task ${uncomlatetask.length}`;
        } else {
            update.complatetask = false;
            localStorage.setItem('task', JSON.stringify(totaltask));

            taskElement.style.textDecoration = "none";
            let complate = totaltask.filter(task => task.complatetask === true);
            complaTeTask.innerText = `Completed task ${complate.length}`;

            let uncomlatetask = totaltask.filter(task => task.complatetask === false);
            panding.innerText = `Pending task ${uncomlatetask.length}`;
        }
    } else if (clicktask.innerText === 'Delete') {
        if (maincomplatetask === false && imptask === false) {
            if (confirm("Are you sure you want to delete this task?")) {
                e.target.parentElement.remove();
                const taskDelete = totaltask.findIndex(t => t.id === taskId);

                if (taskDelete !== -1) {
                    totaltask.splice(taskDelete, 1);
                    localStorage.setItem('task', JSON.stringify(totaltask));
                }

                let uncomlatetask = totaltask.filter(task => task.complatetask === false);
                panding.innerText = `Pending task ${uncomlatetask.length}`;
            }
        } else {
            alert('Your task is already completed');
            return false;
        }
    } 
}

export { mainfunction };
export { complaTeTask, impTasktext };
