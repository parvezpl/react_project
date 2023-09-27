import React, {useEffect, useState } from 'react'
import { useTodo } from '../context/TodoContext';

function TodoItem({ todo }) {  
    const [isTodoEditable, setisTodoEditable]= useState(false)
    const [todoMsg, setTodoMsg]=useState(todo.todo)
    const {updateTodo, deleteTodo, toggleComplete, colorToggle, setColorToggle}=useTodo()
    const editTodo =()=>{
        updateTodo(todo.id, {...todo, todo:todoMsg})
        setisTodoEditable(false)
    }
    const toggleCompleted = ()=>{
        toggleComplete(todo.id)
       
    }
    

    return (
        <div
            className={`flex border-black/10 rounded-lg px-2 py-1.5 gap-x-2 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[rgb(114,192,46)]" : 
                // "bg-[rgb(169,78,238)]"
                `${colorToggle ? "bg-[hsl(317,47%,35%)]" : 
                "bg-[hsl(164,48%,50%)]"}`  
            
            } `}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return

                    if (isTodoEditable) {
                        editTodo();
                    } else {setisTodoEditable((prev) => !prev);}
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;


