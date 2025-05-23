import { useState, useEffect } from 'react';
import axios from 'axios';
import Todos from "./components/Todos";
import Preloader from './components/Preloader';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import './App.css';


function App() {
  const [todos, setTodos] = useState(null);
  
  useEffect(() => {
    const getTodos = async() => {
      const res= await axios.get("http://localhost:5000");
      setTodos(res.data)

    
    }
    getTodos();
  },[])

const createTodo = async(text) => {
    const res = await axios.post('http://localhost:5000', {message:text});
    setTodos(res.data);
}

  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <TodoInput createTodo={createTodo}/>
        {todos ? <Todos todos={todos}/> : <Preloader/> }
      </div>
    </div>
  );
}

export default App;
