import React from 'react'
import Header from './header';
import "../styling/todo.css" 
import { useDispatch, useSelector } from 'react-redux'
import TodoInput from "./todoInput"




const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const handleClick = id => dispatch({
        type: "DELETE_TODO",
        payload: id,
    })
    
    return (
        <div>
            <Header />
            <div className="content">
                <h1 className="title">To-Do App</h1>
                <div className="list">
                <TodoInput />
                <ol>
                 {
                    todos.map(todo => <li onClick={() => handleClick(todo.id)}> {todo.label}</li>)
                 }
                    </ol>
                    </div>    
            </div>
        </div>
            
    )
}

export default Todos
