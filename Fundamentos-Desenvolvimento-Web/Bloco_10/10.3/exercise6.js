const API_URL = 'https://dog.ceo/api/breeds/image/random';

function fetchingDogPic () {
  return fetch(API_URL)
  .then((response) => response.json())
  .then((data) =>  data.message);
}

module.exports = { fetchingDogPic };