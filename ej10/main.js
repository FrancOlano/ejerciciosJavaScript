// 1.
function AporO(string) {
    if(typeof string !=typeof ""){
        console.log("Intrduzca un String");
    }
    else{
        let nuevaString = string.replaceAll("a", "o")
        console.log(nuevaString);
    }
}

// 2.
function empiezaPorAca(string) {
    if(typeof string !=typeof ""){
        console.log("Intrduzca un String");
    }
    else{
        if (string.startsWith("aca")){
            return true
        }else{
            return false
        }
 
    }
}
console.log(empiezaPorAca("academia"), empiezaPorAca("escuela"));

// 3.
function saludo(string) {
    if(string != "hola" && string !="Hola" && string != "HOLA"){
        console.log("Intrduzca un hola");
    }
    else{
        let saludo = "Hola! "
        console.log(saludo.repeat(3));
    }
}
saludo("Hola")