// 1. Crea una función pasa 3 números por parámetros súmalos y devuelve el resultado
// mediante a return. Finalmente muéstralos por pantalla
// 2. Crea una función y escribe tu nombre completo en 3 parámetros: nombre,
// apellido1, apellido2 y concaténalos y finalmente muéstralos por pantalla
// 3. Crea una función que acepte dos números y devuelva el número mayor

function uno (num1, num2, num3){
    let resultado = num1 + num2 + num3
    return resultado
}
console.log(uno(1,2,3));

function dos(nombre, apellido1, apellido2) {
    let concat = `${nombre} ${apellido1} ${apellido2}`
    console.log(concat);
}
dos('Franco', 'Olano', 'Melo')

function tres(num1, num2) {
    if (num1 > num2){
        return num1
    }
    else{
        return num2
    }
}