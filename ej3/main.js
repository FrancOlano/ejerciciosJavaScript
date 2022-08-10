var nombre 
nombre = "Franco"
console.log(nombre, typeof nombre)

var edad 
edad = 18
console.log(edad, typeof edad)

let tarjeta = null
console.log(tarjeta, typeof tarjeta)

var apellido = undefined
console.log(apellido, typeof apellido)

var array = ['hola', 56, undefined, 203, 'jajaj']
console.log(array, typeof array)

let persona = {
    nombre: 'Franco',
    edad: '18',
    apellido: 'Olano'
}
console.log(persona, typeof persona)

let esMayor = function (edad){
    if (edad>=18){
        console.log('Es mayor')
    }
    else{
        console.log('Es menor')
    }
}
console.log(esMayor(edad), typeof esMayor)