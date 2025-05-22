import React, {useRef} from "react";

const TodoInput = ({createTodo}) =>{
    const TodoInput = useRef('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        
        createTodo(TodoInput.current.value)
        TodoInput.current.value = '';
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" ref = {TodoInput} required/>
            <input type="submit"/>
        </form>
    )
}

export default TodoInput