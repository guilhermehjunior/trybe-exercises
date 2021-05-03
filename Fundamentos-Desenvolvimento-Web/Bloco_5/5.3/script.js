function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // 1 - O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    const listaDias = document.querySelector('#days');

    function creatingMonthDays() {

        for (let index = 0; index < dezDaysList.length; index += 1) {
            const dia = document.createElement('li');
            dia.classList.add('day');
            dia.innerText = dezDaysList[index];
            if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
                dia.classList.add('holiday');
            }
            if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
                dia.classList.add('friday');
            }
            listaDias.appendChild(dia);
        }
    }

    creatingMonthDays();
// 2 - Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

    const buttonContainer = document.querySelector('.buttons-container');
    function buttonFeriados(string) {
        const hollidayButton = document.createElement('button');
        hollidayButton.id = 'btn-holiday';
        hollidayButton.innerText = string;
        buttonContainer.appendChild(hollidayButton);
    }

    buttonFeriados('Feriados');

// Exercício 3:
// 3- Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
    function holidaysBackground() {
        const feriadosButtons = document.querySelector('#btn-holiday');
        feriadosButtons.addEventListener('click', function () {
            const feriados = document.querySelectorAll('.holiday');
            feriados.forEach(element => {
                element.classList.toggle('pink');
            });
        });
    }

    holidaysBackground();
// 4-   Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

    function buttonSextaFeira(string) {
        const fridayButton = document.createElement('button');
        fridayButton.id = 'btn-friday';
        fridayButton.innerText = string;
        buttonContainer.appendChild(fridayButton);
    }

    buttonSextaFeira('Sexta-Feira');

//     Exercício 5:
// 5 - Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
    function changingFridays() {
        let array = ['Sexta-Feira','Sexta-Feira','Sexta-Feira','Sexta-Feira'];
        const sextaButton = document.querySelector('#btn-friday');
        sextaButton.addEventListener('click', function () {
            const sextas = document.querySelectorAll('.friday');
            for (let index = 0; index < sextas.length; index += 1) {
                let newElement = sextas[index].innerText;
                sextas[index].innerText = array[index];
                array[index] = newElement;
            }
            return array;
            });
    }
    
    changingFridays();
// 6 - Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

    const numeroDias = listaDias.querySelectorAll('li');
    
    function daysZoomIn() {
        for (let index = 0; index < dezDaysList.length; index += 1) {
        numeroDias[index].addEventListener('mouseover', function (event){
            event.target.style.fontSize = '2em';
        });
        }
    }

    function daysZoomOut() {
        for (let index = 0; index < dezDaysList.length; index += 1) {    
        numeroDias[index].addEventListener('mouseleave', function(event) {
            event.target.style.fontSize = '1em';
        });
        }
    }

    daysZoomIn();
    daysZoomOut();
// 7- Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

    const myTasks = document.querySelector('.my-tasks');
    
    function addingTasks(string) {
        const newTask = document.createElement('span');
        newTask.innerText = string;
        myTasks.appendChild(newTask);
    }

    addingTasks('cozinhar');

//     Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

    function addingSubtitles(string) {
        const newSubtitle = document.createElement('div');
        newSubtitle.style.backgroundColor = string;
        newSubtitle.classList.add('task');
        myTasks.appendChild(newSubtitle);
    }

    addingSubtitles('red');

// 9 - Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

    const tarefaSelecionada = document.querySelector('.task');
    function selectingTask() {
        tarefaSelecionada.addEventListener('click', function (event) {
            event.target.classList.toggle('selected');
        });
    }
    
    selectingTask();
// 10 - Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

    function selectiongTaskDays() {
        for (let index = 0; index < dezDaysList.length; index += 1) {
        numeroDias[index].addEventListener('click', function (event){
            const taskSelected = document.querySelector('.selected');
            if (taskSelected !== null) {
                event.target.style.color = taskSelected.style.backgroundColor;
            } else {
                event.target.style.color = 'rgb(119,119,119)';
            }
        });
        }    
    }

    selectiongTaskDays();