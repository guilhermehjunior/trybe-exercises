const form = document.querySelector('#forms');
const inputs = form.querySelectorAll('input');
const listaEstados = document.querySelector('#state-select');
const data = document.querySelector('#data-inicio-input');
const button = document.querySelector('button');
const estados = [
  'AC - Acre',
  'AL - Alagoas',
  'AP - Amapá',
  'AM - Amazonas',
  'BA - Bahia',
  'CE - Ceará',
  'DF - Distrito Federal',
  'ES - Espírito Santo',
  'GO - Goías',
  'MA - Maranhão',
  'MT - Mato Grosso',
  'MS - Mato Grosso do Sul',
  'MG - Minas Gerais',
  'PA - Pará',
  'PB - Paraíba',
  'PR - Paraná',
  'PE - Pernambuco',
  'PI - Piauí',
  'RJ - Rio de Janeiro',
  'RN - Rio Grande do Norte',
  'RS - Rio Grande do Sul',
  'RO - Rondônia',
  'RR - Roraíma',
  'SC - Santa Catarina',
  'SP - São Paulo',
  'SE - Sergipe',
  'TO - Tocantins'
  ];

  // ideia de https://www.guj.com.br/t/resolvido-como-validar-data-com-java-script/276656
function validarData() {
  const formatoValido = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;;
  if(!formatoValido.test(data.value)) {
    alert('Formato de data incorreto');
  } else {
    const dia = data.value.split('/')[0];
    const mes = data.value.split('/')[1];
    const ano = data.value.split('/')[2];

    if (dia > 31 || dia < 0) {
      alert('Dia incorreto');
    }
    if ( mes > 12 || dia < 0) {
      alert('Mes incorreto');
    }
    if (ano < 0) {
      alert ('Ano incorreto');
    }
  }
}
 

window.onload = () => {
  for (let state = 0; state < estados.length; state += 1) {
    const estado = document.createElement('option');
    estado.innerText = estados[state];
    listaEstados.appendChild(estado);
  }
  button.addEventListener('click', (event)=> {
    event.preventDefault();
  })
  const formatoData = {format:'dd/mm/yyyy'}
  data.DatePickerX.init(formatoData);
  
};


