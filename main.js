const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const input = document.getElementById('inputTextNow');
const searchText = document.querySelector('span input');

const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = listItems.length;
}

const addTask = (e) => {

    e.preventDefault();
    const titleTask = input.value;
    if (input.value == "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + " <button>Usuń</button>";
    ul.appendChild(task);
    input.value = "";
    taskNumber.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', removeTask);
}

const searchTask = (e) => {
    e.preventDefault();
    const search = e.target.value.toLowerCase();
    let tasks = [...listItems];
    console.log(tasks)
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(search))
    ul.textContent = "";
    console.log(tasks)
    tasks.forEach(li => ul.appendChild(li))
}


searchText.addEventListener('input', searchTask)
form.addEventListener('submit', addTask)