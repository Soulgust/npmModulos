/**
 * Función que valida string nulo, vacio y largo >2
 * return bolean true or false
 * fecha creación:  05-03-2023
 * fecha modificación: 
 * Autor: Gustavo Ubilla
 */
 const validanombre = function validacionNombre(dato){
    if( dato != null && dato.trim() != "" && dato.trim().length >2){
        return true;
    }
    else{
        return false;
    }
}
/**
 * Metodo que permite validar rut ingresado por parametro devuelve verdadero o falso
 * permite ingreso con formato
 *  - nn.nnn.nnn-n /n.nnn.nnn-n
 *  - nnnnnnnnn
 * Fecha Creación: 13-03-2023
 * @author Gustavo Ubilla
 * @param {string} rut 
 * @returns {boolean} 
 */  
  
 const validacionRut = function validaRut(dato){
    //PASO 1
    // separación rut entre numero y dv
    var rutVar = rut
    var respuesta = false;
    //formato para el rut el cual quita 
    //- el último digito con subtring
    //- puntos y guiones con replace y expresión regular 
    var rut =rutVar.substring(0, rutVar.length -1).replace(/\D/g, '');
    var dv = rutVar.substring(rutVar.length -1)
    // paso 2
    // crear arreglo con los n° y voltarlos
    // asignar multiplo y acumulador
    var arrayRut = rut.split('').reverse();
    var acumulador = 0;
    var multiplicador = 2;
    var dvVerifica = 0;

    for(var numero of arrayRut){
        acumulador += parseInt(numero) * multiplicador;
        multiplicador++;

        if(multiplicador == 8){
            multiplicador = 2;
        }

    }

    var dvVerifica = 11 - (acumulador % 11);
    if(dvVerifica == 11){
        dvVerifica = '0'
    }
    if(dvVerifica == 10){
        dvVerifica = 'k'
    }
    
    if(dvVerifica.toString().toUpperCase() === dv.toString().toUpperCase()){
        respuesta =  true;
    }
    else{
        respuesta = false;
    } 
    return respuesta;
 }   




module.exports ={
    validanombre,
    validacionRut
}