import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import "../styling/todoinput.css"
import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const TodoInput = () => {
    
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState();
    const handleChange = event => setNewTodo(event.target.value);
    const handleClick = () => dispatch({
        type: "ADD_TODO",
        payload: {
            label: newTodo,
            id: Math.ceil(Math.random() * 100),
        }
    })

    return (
        <div>
        <input value={newTodo} onChange={handleChange} placeholder="Add item to your list" type="text" className="input_list" />
        <Button className="input_button" onClick={handleClick} ><FontAwesomeIcon icon={faPlus} /></Button>
        </div>
    )
}

export default TodoInput
