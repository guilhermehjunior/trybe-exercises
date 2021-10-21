function returnPromise(param1, param2, param3) {
  const array = [param1, param2, param3];
  const promise = new Promise((resolve, reject) => {
    array.forEach((param) => {
      if (typeof param !== 'number') reject(new Error('Informe apenas números'));
    });
    const resultado = (param1 + param2) * param3;
    if (resultado < 50) reject(new Error('Valor muito baixo'));
    resolve(resultado);
  });
  return promise;
}