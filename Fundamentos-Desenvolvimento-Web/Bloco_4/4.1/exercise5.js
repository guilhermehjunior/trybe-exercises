let angulo1 = 10;
let angulo2 = 30;
let angulo3 = 120;

if(angulo1 >= 180 | angulo1 <= 0){
    console.log('error');
}else if(angulo2 >= 180 | angulo2 <= 0){
    console.log('error');
}else if (angulo3 >= 180 | angulo3 <= 0){
    console.log('error');
}else{
    if (angulo1+angulo2+angulo3===180){
        console.log(true);
    }else {
        console.log(false)
    }
}

