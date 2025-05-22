//import logo from './logo.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [todos, setTodos] = useState(null);
  useEffect( async () =>{
    const res = await axios.get('http://localhost:5000');
    console.log(res);
  },[])




  return (
    <div className="App">
      <h1>This is ToDo App for assessemnt</h1>
    </div>
  );
}

export default App;
