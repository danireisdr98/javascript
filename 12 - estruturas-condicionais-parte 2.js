/**
 * estruturas condicionais - parte 2
 * 
 * switch
 */
let fruta = "pera"

switch (fruta) {
    case "maçã":
        console.log("o valor da maçã é R$ 2,00");
        break;   
        case "banana":
        console.log("o valor da banana é R$ 1,50")
        break
        case "jaca":
        case "melancia":
             console.log("o valor da jaca e da melancia é R$ 3,00")
             break
        default:
            console.log("desculpa, não temos a fruta");
}