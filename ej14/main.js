// 1. A partir de la pizza sustituías
// todos los elemento del array por
// cervezas:🍔🌯🍣🍕🍜🍱🍙🍘🥩  🍺

let arrayUno =['🍔', '🌯', '🍣', '🍕', '🍜', '🍱', '🍙', '🍘', '🥩']
function replacePizza(array) {
    let indexPizza = array.indexOf('🍕')
    let arrayFinal = array.fill('🍺', indexPizza+1)
    return arrayFinal
}
console.log(replacePizza(arrayUno));


// 2. Encontrar si existe un elemento en el array que sea una piña.
// 🍕🍕🍍🍕🍕
let arrayDos = ['🍕', '🍕', '🍍', '🍕', '🍕']
function findPinapple(array) {
    if(array.includes('🍍', array)){
        return 'Hay Piña'
    }
    else{
        return 'No hay Piña'
    }
}
console.log(findPinapple(arrayDos));

// 3. Quita la piña del siguiente array.
// 🍕🍕🍍🍕🍕
let arrayTres = ['🍕', '🍕', '🍍', '🍕', '🍕']
function deletePinapple(array) {
    let arraySinPiña = array.filter(comida => comida != '🍍')
    return arraySinPiña
}
console.log(deletePinapple(arrayTres));

// 4. A partir del siguiente array 🍓🍋🍓🍋🍓
// convierte todas las fresas en 🍄
let arrayCuatro = ['🍓', '🍋', '🍓', '🍋', '🍓']

function replaceFresas(array){
    
    array.forEach(element => {
        if ( element === '🍓'){
            array.splice(array.indexOf(element), 1, '🍄')
        }
    });
    return array
}

console.log(replaceFresas(arrayCuatro));
// 5. Añade el siguiente icono 🥵 inmediatamente después del cada
// 🌶️ en el siguiente array:
// 🌶️🥛🌶️🥛🌶️🥛
let arrayCinco = ['🌶️', '🥛', '🌶️', '🥛', '🌶️', '🥛',]
function addFace(array){
    let index = 0
    array.forEach(element => {
        index++
        if (element == '🌶️')
        array.splice(index, 0, '🥵')
    });
    array.splice(array.lastIndexOf('🌶️')+1, 0, '🥵')
    return array
}
console.log(addFace(arrayCinco));


// 6. Añade una 🃏 cartas comodín entre medio de dos cartas . Por
// ejemplo:🎴🃏🎴 En el siguiente array:
// 🎴🎴🎴🃏🎴🎴🎴

let arraySeis = ['🎴', '🎴', '🎴', '🃏', '🎴', '🎴', '🎴']
function addCard(array){
    let index = -1
    array.forEach(element => {
        index++
        if(array[index+1] === '🎴' && element === '🎴'){
            array.splice(index+1, 0, '🃏')
        }
    })
    array.splice(array.lastIndexOf('🎴'), 0, '🃏')
    return array
}
console.log(addCard(arraySeis));