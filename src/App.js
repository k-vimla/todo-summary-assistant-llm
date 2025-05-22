//import logo from './logo.svg';
import { useState, useEffect } from 'react';
import Todos from "./components/Todos";
import axios from 'axios';
import './App.css';

function App() {
  const [todos, setTodos] = useState(null);
  
  useEffect(() => {
    const getTodos = async() => {
      const res= await axios.get("http://localhost:5000");
      //console.log(res.data)
      setTodos(res.data)

    
    }
    getTodos();
  },[])



  return (
    <div className="App">
      <h1>This is ToDo App for assessemnt</h1>
    </div>
  );
}

export default App;
