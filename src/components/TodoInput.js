import React, {useRef} from "react";
import './TodoInput.css';

const TodoInput = ({createTodo}) =>{
    const TodoInput = useRef('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        
        createTodo(TodoInput.current.value)
        TodoInput.current.value = '';
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" ref = {TodoInput} required className="input"/>
            <input type="submit" className="submitbtn"/>
        </form>
    )
}

export default TodoInput