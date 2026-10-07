import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import cap from './assets/cap.png'
import book2 from './assets/book2.png'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <header className='header'>
      
      <h4 className='title'>Student Management</h4>
      <nav className='navi'>
        <a className = "p-2 white" href='/'>Home</a>
        <a className = "p-2" href='/students'>Students</a>
        <Link className = "p-2" to='/add'>Add Student</Link>
      </nav>
      
     </header>
     <div className='whole'>
     <div>
     <div className='Hcontent'>
     <img className = "cap" src={cap}></img>
    
     <h1 className='head'><b>Welcome to Student Management System</b></h1>
     <p className='head '>Manage your students easily. you can view, add, edit and delete student details</p>
     <div className='d-flex gap-3'>
      <button className='btn btn-primary'>View Students</button>
      <button className='btn btn-primary'>Add Students</button>
     </div>
     </div>
     </div>
     <div>
      <img className='book' src={book2} ></img>
     </div>
     </div>
    </>
  )
}

export default App
