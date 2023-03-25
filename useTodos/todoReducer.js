
export const todoReducer = ( initialState = [], action ) => {

    switch ( action.type ) {
        case '[TODO] Add Todo':         
            //con esto devolvemos todos los elementos + el elemento que le mandamos con el action
            return [ ...initialState, action.payload ];
    
        case '[TODO] Remove Todo': 
            //con esto devolvemos todos los elementos - el id que le mandamos con el action        
            return initialState.filter( todo => todo.id !== action.payload );
            
        case '[TODO] Toggle Todo': 
            //con esto devolvemos el done cambiado de true a false y viceversa 
            //del elemento seleccionado (span onclick)   
            return initialState.map( todo => {
                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done,
                    }
                } 

                return todo;
            });

        default:
            return initialState;
    }

} 