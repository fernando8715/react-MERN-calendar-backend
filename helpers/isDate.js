const { isValid } = require("date-fns");


const isDate = (value, {req, location, path}) => {

    if(!value){
        return false
    }

    const fecha = isValid(value);

    if(fecha){
        return fecha
    }else {
        return false
    }   
}

module.exports = { isDate }
