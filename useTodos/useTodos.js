import { useEffect, useReducer } from 'react';
import { todoReducer } from '../10-useReducer/todoReducer';

const initialState = [];
const init = () => {
    //obtenemos los valores del localStorage 
    //que nos traiga todos_local y si no existe que no retorne arreglo vacio
    return JSON.parse( localStorage.getItem('todos_local') ) || [];
}

export const useTodos = () => {
    
    //todoReducer = funcion del tipo reducer
    //initialState = la inicializacion del array
    //init = inicializa el estado initialState 
    //todos = obtenemos el array devuelto del usereducer
    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    //guarda los elementos en localStorage (de manera local) cuando cambia todos
    //para si refresca la pagina no se pierda 
    //solo se puede guardar strings
    useEffect(() => {
        //todos_local = clave identificativa para luego recuperar los valores
        //del almacenamiento local
        localStorage.setItem('todos_local', JSON.stringify( todos ) );  
    }, [todos]);

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        //con el dispatch mando la accion a ejecutar en el useReducer 
        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id,
        }

        //con el dispatch mando la accion a ejecutar en el useReducer 
        dispatch( action );
    }

    const handleToggleTodo = ( id ) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id,
        }

        //con el dispatch mando la accion a ejecutar en el useReducer 
        dispatch( action );
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length, 
    }
}