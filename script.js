const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!')
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let bin = document.createElement('img')
        bin.src = 'delete.png'
        li.appendChild(bin)
    }
    inputBox.value = ''
    saveData()
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    } else if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove()
    }
    saveData()
}, false)

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}

function showData() {
    listContainer.innerHTML = localStorage.getItem('data')
}
showData()