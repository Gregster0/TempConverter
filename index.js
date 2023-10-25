const convertToCelsius = (tempf) => {
    return (tempf - 32) * (5/9);
}

const createMessage = (tempf, tempc) => {
    if(tempf < 65){
        alert(`It is ` + tempf + ` degrees fahrenheit and ` + tempc + ` degrees celsius. Brrr!`)
    } else if(tempf >= 65 && tempf <= 75){
        alert(`It is ` + tempf + ` degrees fahrenheit and ` + tempc + ` degrees celsius. About Room temp!`)
    }
    else if(tempf > 75){
        alert(`It is ` + tempf + ` degrees fahrenheit and ` + tempc + ` degrees celsius. Fiery!`)        
    }
    else{
        alert(`Please enter a temperature`)
    }  
}

const rand = (limit) => {
    return Math.round(Math.random() * limit);
}

const inputTemp = prompt('Please input a temperature in Fahrenheit');

createMessage(inputTemp,convertToCelsius(inputTemp));