//exercise 6

let peca = "rei1";

switch(peca.toLowerCase()){
    case "peao":
        console.log("peao -> 1 casa pra frente (pode andar 2 casas se for o primeiro movimento");
        break;
    case "torre":
        console.log("torre -> movimentos horizontais e verticais em linha reta");
        break;
    case "cavalo":
        console.log("cavalo -> movimentos em L");
        break;
    case "bispo":
        console.log("bispo -> movimentos diagonias");
        break;
    case "rainha":
        console.log("rainha -> Em qualquer direcao, quantas casas quiser");
        break;
    case "rei":
        console.log("rei -> em qualquer direcao, 1 casa");
        break;
    default:
        console.log("Erro.");    
};