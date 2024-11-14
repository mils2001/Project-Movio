import React, { useState } from 'react'
import './Form.css'

function Form() {
  const [Name,setName] = useState('');
  const [Email,setEmail] = useState('');
  const [Number,setNumber] = useState();

  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!Name ||!Email || !Number ) {
      alert('Please fill out all fields');
      return;
    }
    alert(`Name: ${Name}, Email: ${Email} and Number: ${Number}`);
    setName('');
    setEmail('');
  }

  setEmail();
  setName();
  setNumber();

  return (

    <div className="form">
      <h2>Registration Form</h2>
    <form onSubmit={handleSubmit} className='Formreg'>
      <div>
      <label htmlFor="Name">
        Name:
        <input
          type="text"
          id="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />

      </label>
      </div>
      <div>
      <label htmlFor="Email">
      Email:
      <input
        type="email"
        id="Email"
        value={Email}
        onChange={(e) => setEmail(e.target.value)} />
      </label>
      </div>
      <div>
        <label htmlFor="PhoneNumber">
            Phone Number:
            <input
              type="text"
              id="PhoneNumber"
              value={Number}
              onChange={(e) => setNumber(e.target.value)} /> 
        </label>
      </div>

    </form>
    <button type="submit">Submit</button>
    </div>
  )
}

export default Form



