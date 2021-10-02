
let numero = prompt('ingrese numero')

for(let i = 1; i<=15; i++){

    alert(`el resultado de ${numero} por ${i} es = ${numero*i}`)

    if(i === 7)
    break;
}

let usuario = prompt('ingrese su nombre de usuario')

while(usuario != "Juan") {
    alert(`Su nombre de usuario es ${usuario}`)

    usuario = prompt('Error, vuelva a intertarlo')
}



const number = prompt('¿Cuanto es la raiz cuadrada de 9')

switch(number){
    case '3': 
        alert('Muy bien hecho')
        break;
    case '-3':
        alert('Muy bien hecho')
        break;
    default:
        alert('Error, vuelva a intertarlo')
        break;


}