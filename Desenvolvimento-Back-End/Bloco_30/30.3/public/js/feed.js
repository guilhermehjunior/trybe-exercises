const socket = window.io();

const likeIcon = document.querySelector('#likeIcon');
const likeCount = document.querySelector('#currentLikes');
const starIcon = document.querySelector('#starIcon');
const starCount = document.querySelector('#currentStars');

likeIcon.addEventListener('click', () => {
  let currentLikes = Number(likeCount.innerHTML);
  socket.emit('likePost', currentLikes);
});

starIcon.addEventListener('click', () => {
  let currentStars = Number(starCount.innerText);
  currentStars += 1;
  starCount.innerText = currentStars;
  socket.emit('starPost', currentStars);
});

socket.on('updateLikes', (updatedLikes) => {
  likeCount.innerText = updatedLikes;
});

socket.on('updateStars', (updatedStars) => {
  starCount.innerText = updatedStars;
});

