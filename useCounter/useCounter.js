import { useState } from "react"

//un hooks es basicamente una funcion que devuelve algo
export const useCounter = (initalValue = 10) => {
    
    const [counter, setCounter] = useState(initalValue);
    
    //para poder modificar el counter hay que exponer metodos externos 
    const increment = (value = 1) =>{
        setCounter( (current) => current + value );    
    }

    const decrement = (value = 1) =>{
        if (counter === 0) return;//si llega a 0 no sigue ejecutandose  
        setCounter( (current) => current - value );    
    }

    const reset = () =>{
        setCounter( initalValue );    
    }


    return {
        //asi
        //counter: counter
        //increment: increment
        //o
        counter,
        increment,
        decrement,
        reset,
    }
}