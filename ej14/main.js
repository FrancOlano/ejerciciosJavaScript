// 1. A partir de la pizza sustituΓ­as
// todos los elemento del array por
// cervezas:ππ―π£πππ±πππ₯©  πΊ

let arrayUno =['π', 'π―', 'π£', 'π', 'π', 'π±', 'π', 'π', 'π₯©']
function replacePizza(array) {
    let indexPizza = array.indexOf('π')
    let arrayFinal = array.fill('πΊ', indexPizza+1)
    return arrayFinal
}
console.log(replacePizza(arrayUno));


// 2. Encontrar si existe un elemento en el array que sea una piΓ±a.
// πππππ
let arrayDos = ['π', 'π', 'π', 'π', 'π']
function findPinapple(array) {
    if(array.includes('π', array)){
        return 'Hay PiΓ±a'
    }
    else{
        return 'No hay PiΓ±a'
    }
}
console.log(findPinapple(arrayDos));

// 3. Quita la piΓ±a del siguiente array.
// πππππ
let arrayTres = ['π', 'π', 'π', 'π', 'π']
function deletePinapple(array) {
    let arraySinPiΓ±a = array.filter(comida => comida != 'π')
    return arraySinPiΓ±a
}
console.log(deletePinapple(arrayTres));

// 4. A partir del siguiente array πππππ
// convierte todas las fresas en π
let arrayCuatro = ['π', 'π', 'π', 'π', 'π']

function replaceFresas(array){
    
    array.forEach(element => {
        if ( element === 'π'){
            array.splice(array.indexOf(element), 1, 'π')
        }
    });
    return array
}

console.log(replaceFresas(arrayCuatro));
// 5. AΓ±ade el siguiente icono π₯΅ inmediatamente despuΓ©s del cada
// πΆοΈ en el siguiente array:
// πΆοΈπ₯πΆοΈπ₯πΆοΈπ₯
let arrayCinco = ['πΆοΈ', 'π₯', 'πΆοΈ', 'π₯', 'πΆοΈ', 'π₯',]
function addFace(array){
    let index = 0
    array.forEach(element => {
        index++
        if (element == 'πΆοΈ')
        array.splice(index, 0, 'π₯΅')
    });
    array.splice(array.lastIndexOf('πΆοΈ')+1, 0, 'π₯΅')
    return array
}
console.log(addFace(arrayCinco));


// 6. AΓ±ade una π cartas comodΓ­n entre medio de dos cartas . Por
// ejemplo:π΄ππ΄ En el siguiente array:
// π΄π΄π΄ππ΄π΄π΄

let arraySeis = ['π΄', 'π΄', 'π΄', 'π', 'π΄', 'π΄', 'π΄']
function addCard(array){
    let index = -1
    array.forEach(element => {
        index++
        if(array[index+1] === 'π΄' && element === 'π΄'){
            array.splice(index+1, 0, 'π')
        }
    })
    array.splice(array.lastIndexOf('π΄'), 0, 'π')
    return array
}
console.log(addCard(arraySeis));