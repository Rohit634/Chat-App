const socket = io('http://localhost:8000');

const from = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")
var audio = new Audio('ting.mp3');

const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageElement.append(messageElement);
    if(position == 'left'){

    audio.play();
    }
}

from.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message = messageInput.Value;
    append(`You: ${message}`, `right`)
    socket.emit('send', message);
    messageInput.value = ''
})

const name = prompt("Enter your name to join");
socket.emit('new-user-joined', Name);

socket.on('user-joined', name =>{
append(`${name} joined the chat`, `right`)
})

socket.on('receive', data =>{
    append(`${data.name}: ${data.message}`, `left`)
})

socket.on(`left`, name =>{
    append(`${name} left the chat`, `right`)
})