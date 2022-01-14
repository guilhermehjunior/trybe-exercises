const socket = window.io();

const likeIcon = document.querySelector('#likeIcon');

likeIcon.addEventListener('click', () => {
  socket.emit('likePost');
});

