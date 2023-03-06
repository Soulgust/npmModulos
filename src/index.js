const val = require('./validaciones/validaciones')
const calc = require('./calculos/funcionesCalculos')
const saludo = nombre => 'Hola ' + nombre + ', estamos probnado la función';

const sumar = function(){
    return 2+2
}

const resta = function(){
    return 5-2
}


/**
 * función que devuelve nombre con primera letra en mayúscula, previo de validación de largo, nulo o vacio
 * return string toUpperCase
 * fecha creación:  05-03-2023
 * fecha modificación: 
 * Autor: Gustavo Ubilla
 */
const prettyNombre = function prettyNombre(dato){
    var validar = val.validanombre(dato)
    if(validar){
        return dato[0].toUpperCase() + dato.substring(1);
    }
    else{
        return "Nombre Invalido";
    }
}

/**
 * funcion que permite hacer calculos matematicos basicos, indicando el tipo de operaciones matematica y los valores\n
 * fecha creación:  05-03-2023\n
 * fecha modificación: \n
 * Autor: Gustavo Ubilla\n
 * @param {string} expr operacion matematica
 * @param {string} num1 
 * @param {string} num2 
 * @returns 
 */
const calculadora = function calculadora(expr, num1, num2 ){
    numero1 = parseInt(num1)
    numero2 = parseInt(num2)
    switch(expr){
    case 'suma':
        
        return numero1 +"+"+numero2+"= " + calc.suma(numero1,numero2);
        break;
    case 'resta':
        return numero1 +"-"+numero2+"= " + calc.resta(numero1,numero2);
        break;
    case 'multiplacion':
        return numero1 +"X"+numero2+"= " + calc.multiplacion(numero1,numero2);
        break;
    case 'dividir':
        if(numero2 === 0){
            return "No es posible dividir por cero"
        }
        else{
            return numero1 +"/"+numero2+"= " + calc.dividir(numero1,numero2);
        }   
        break;

    }
}
/**
 * función que devuelve nombre completo con primera letra en mayúscula, previo de validación de largo, nulo o vacio
 * return string toUpperCase
 * fecha creación:  05-03-2023
 * fecha modificación: 
 * Autor: Gustavo Ubilla
 */
const prettyNombreCompleto = function prettyNombreCompleto(dato){
    var validar = val.validanombre(dato)
    if(validar){
        var nombre = dato.split(' ');
        var nombres = nombre[0].substring(0,1).toUpperCase()+nombre[0].substring(1)+ 
                     ' '+ nombre[1].substring(0,1).toUpperCase()+nombre[1].substring(1);
        var apellidos = nombre[2].substring(0,1).toUpperCase()+nombre[2].substring(1)+ 
        ' '+ nombre[3].substring(0,1).toUpperCase()+nombre[3].substring(1);
        var nombreCompleto = nombres +' '+ apellidos
        return nombreCompleto;
    }
    else{
        return "Nombre Invalido";
    }
}

module.exports = {
    saludo,
    sumar,
    resta,
    prettyNombre,
    prettyNombreCompleto,
    calculadora
}