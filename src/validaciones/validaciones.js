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



module.exports ={
    validanombre
}