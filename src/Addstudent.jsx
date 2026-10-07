import React from 'react'
import { Link } from 'react-router-dom'

function Addstudent() {
  return (
    <div>
       <header className='header'>
      
      <h4 className='title'>Student Management</h4>
      <nav className='navi'>
        <a className = "p-2 white" href='/'>Home</a>
        <a className = "p-2" href='/students'>Students</a>
        <Link className = "p-2" to='/add'>Add Student</Link>
      </nav>
      
     </header>

<form className='form'>
  <div className='formcon'>
  <h2>Add Students...</h2>
  <div className="form-group pt-3">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
    
  </div>
  <br></br>
  <div className="form-group pt-2">
    <label for="exampleInputPassword1">Email</label>
    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <br></br>
  <div className="form-group pt-2">
    <label for="exampleFormControlSelect1">Select course</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>IT</option>
      <option>CSE</option>
      <option>EEE</option>
      <option>ECE</option>
      <option>MECH</option>
    </select>
  </div>
  <br></br>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <br></br>
  <button type="submit" className="btn  btn-primary ">Add student</button>
  </div>
</form>
    </div>
  )
}

export default Addstudent