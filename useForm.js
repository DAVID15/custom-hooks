import { useState } from "react";

//por defecto un objeto vacio
export const useForm = (initialForm = {}) => {
    
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            //mantenemos todos los valores de las variables o propiedades
            ...formState,

            //en javascript existen las propiedades computadas de los objetos
            //y con esta sintaxis solo modificamos el valor de name 
            //que le venga
            [ name ]: value
        });
    }
  
    const onResetForm = () => {
        setFormState(initialForm);
    }
  
    //tabajar siempre con objetos
    return {
        ...formState,//con esto devolvemos las variables del formState (username, email, password) 
                     //y asi luego podemos hacer la desestructuracion
        formState,
        onInputChange,
        onResetForm,
    }
}


