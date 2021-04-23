let a = 30;
let b = 20;
let c = 00;

// if (a>b){
//     if (a>c){
//         console.log("O maior numero e o 'a'")
//     }else 
//         console.log("O maior numero e o 'c'")
// }else {
//     if (b>c){
//         console.log("O maior numero e o 'b'")
//     }else{
//         console.log("O maior numero e o 'c'")
//     }
// }

if (a>b && a>c){
    console.log("O maior numero e o 'a'")
}else if(b>a && b>c){
    console.log("O maior numero e o 'b'")
}else {
    console.log("O maior numero e o 'c'")
}