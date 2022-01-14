const socket = window.io();

const likeIcon = document.querySelector('#likeIcon');
const likeCount = document.querySelector('#currentLikes');

likeIcon.addEventListener('click', () => {
  let currentLikes = Number(likeCount.innerHTML);
  console.log(currentLikes);
  socket.emit('likePost', currentLikes);
});

socket.on('updateLikes', (updatedLikes) => {
  likeCount.innerHTML = updatedLikes;
});

