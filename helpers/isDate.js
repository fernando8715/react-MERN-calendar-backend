const { isValid, getTime } = require("date-fns");


const isDate = (value, {req, location, path}) => {

    if(!value){
        return false
    }

    const getMiliseconds = getTime(value)
    const fecha = isValid(getMiliseconds);

    if(fecha){
        return fecha
    }else {
        return false
    }   
}

module.exports = { isDate }
