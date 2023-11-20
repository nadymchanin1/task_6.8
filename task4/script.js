const userText = prompt('Введите текст');
const userTextField = document.querySelector('a');
userTextField.textContent = userText;

let link = document.querySelector('a');

link.addEventListener('click', (event) => {
console.log('Запрещаю!');
    event.preventDefault();
})