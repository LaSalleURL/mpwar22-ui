import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';



export function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="list" element={<List />}/>
        <Route path="add" element={<Add />}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}


function Home() {
    return (
      <div className='container'>
       <Nav />
        Home page
      </div>
    )
  }

function List(){
  const [result, setResult] = useState([]);

  function processResult(result) {
      setResult(result)
  }
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('http://localhost:1000/employee')
        .then(response => response.json())
        .then(data => processResult(data));
}, []);
    return (
      <div className='container'>
        <Nav />
        <div>
          {
          result.map(employee => 
          <div>
          <h1>{employee.name}</h1>
          <div>{employee.email}</div>
          </div>
          )
        }
        </div>
      </div>
    )
  }

function Add(){
    return (
      <div className='container'>
       <Nav />
      </div>
    )
  }


function Nav() {
    return (
      <div className='container'>
        <Link to="/">Home</Link> | 
        <Link to="/list">List</Link> | 
        <Link to="/add">Add</Link> 
      </div>
    )
  }

