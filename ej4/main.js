// 1.
const nombreApellido = () =>{
    let nombre = 'Franco'
    let apellido = 'Olano'
    return nombre + " " + apellido
}
console.log(nombreApellido())

// 2.
let función = function(boolean){
    console.log(boolean);
}
función(true)

// 3
let tres = function (...num){
    num.forEach(numero=> {
        console.log(numero);}
        )
}
tres(1,2,3,4,5)