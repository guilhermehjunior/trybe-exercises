const somandoArray = () => {
  const arrayAleatorio = Array.from({length:10}, () => Math.floor(Math.random() * 50 + 1));

  const arrayAleatorioElevadoDois = arrayAleatorio.map((num)=> num * num);

  const soma = arrayAleatorioElevadoDois.reduce((acc, currentValue) => acc + currentValue);

  if (soma >= 8000) throw new Error();

  return soma;
}

const somandoNovoArray = (sum) => {
  const novaSoma = [2, 3, 4, 5].map((num) => sum/num).reduce((acc, previousValue) => acc + previousValue);

  return novaSoma;
}


const funcaoPromise = async () => {
  try {
    const soma = await somandoArray();
    const novaSoma = await somandoNovoArray(soma);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

funcaoPromise();