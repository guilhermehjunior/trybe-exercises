const inputs = [
{
  label:'Nome:',
  type:'text',
  name:'nome',
  maxLength: 40,
  isRequired: true,
},
{
  label:'Email:',
  type:'email',
  name:'email',
  maxLength: 50,
  isRequired: true,
},
{
  label:'CPF:',
  type:'text',
  name:'cpf',
  maxLength: 14,
  isRequired: true,
},
{
  label:'Endereço',
  type:'text',
  name:'endereço',
  maxLength: 200,
  isRequired: true,
},
{
  label:'Cidade:',
  type:'text',
  name:'cidade',
  maxLength: 28,
  isRequired: true,
},
];

export default inputs;