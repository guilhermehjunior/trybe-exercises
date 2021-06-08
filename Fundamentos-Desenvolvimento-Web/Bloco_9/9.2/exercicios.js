// const elevadoAoQuadrado = (num) => num * num;

// const gerandoArrayAleatorio = (tamanho) => {
//   const nwArray = [];
//   for (let index = 0; index < tamanho; index += 1) {
//     nwArray.push(elevadoAoQuadrado(Math.round(Math.random()*50)));
//   }
//   return nwArray;
// }

// const arrayAleatorio = gerandoArrayAleatorio(10);


const arrayAleatorio = Array.from({length:10}, () => Math.floor(Math.random() * 50 + 1));

const arrayAleatorioElevadoDois = arrayAleatorio.map((num)=> num * num);


const funcaoPromise = new Promise((resolve, reject) => {
  const soma = arrayAleatorioElevadoDois.reduce((acc, currentValue) => acc + currentValue);
  if (soma < 8000) resolve(soma);
  reject('É mais de oito mil! Essa promise deve estar quebrada!');
});

funcaoPromise
  .then((response) => [2, 3, 4, 5].map((numero) => response / numero))
  .then((array) => array.reduce((sum, currentValue) => sum + currentValue))
  .catch((error) => console.log(error));
