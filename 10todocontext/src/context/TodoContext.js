import { createContext, useContext } from 'react';


export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo:" todo msg", 
            completed: false,
            colorToggles:true,
        }
    ],
    addTodo: (todo)=>{}, 
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{},
    colorsetup: (id)=>{},
    color:"bg-white", 
    
})


export const useTodo = ()=>{
     return useContext(TodoContext);
}

export  const TodoProvider =TodoContext.Provider