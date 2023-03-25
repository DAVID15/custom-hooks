import { useEffect, useState } from "react";

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })
    
    //creamos funcion asincrona para hacer la peticion a una api
    //y esperamos con el await y obtener la respuesta en json 
    const getFetch = async () => {
        
        setState({
            ...state,
            isLoading: true,
        });
        
        const resp = await fetch(url);//fetch para realizar peticion a api
        const data = await resp.json();

        setState({
            data: data,
            isLoading: false,
            hasError: null,
        });
    }

    //cuando cambie el url se ejecutara la funcion getFetch
    useEffect(() => {
        getFetch();    
    }, [url])
    
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}
