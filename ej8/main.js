// 1.
let mes = 12
switch (mes) {
    case 1:
        console.log("enero");
        break;
    case 2:
        console.log("febrero");
        break;
    case 3:
            console.log("marzo");
            break;
    case 4:
        console.log("abril");
        break;
    case 5:
        console.log("mayo");
        break;
    case 6:
            console.log("junio");
            break;
    case 7:
        console.log("julio");
        break;
    case 8:
        console.log("agosto");
        break;
    case 9:
            console.log("septiembre");
            break;
    case 10:
        console.log("octubre");
        break;
    case 11:
        console.log("noviembre");
        break;
    case 12:
            console.log("diciembre");
            break;
    default:
        console.log("Intruduzca un numero correcto")
        break;
}

// 2.
function numero (numero) {
    if (typeof numero != typeof "") {
        console.log("pon un string");
    }else{
    switch (numero) {
        case "1":
            return 1
            break;
    
        case "2":
            return 2
            break;
    
        case "3":
            return 3
            break;
    
        case "4":
            return 4
            break;
    
        case "5":
            return 5
            break;
    
        default:
            console.log("intrudizca un numero del 1 al 5");
            break;
    }
}
}
console.log(numero("5"));