module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('Alguem se conectou');
    socket.on('likePost', (currentLikes) => {
      io.emit('updateLikes', currentLikes+1);
    });
  });
};
