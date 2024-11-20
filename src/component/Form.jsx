import React, { useState } from 'react'
import './Form.css'

function Form() {
  const [Name,setName] = useState('');
  const [Email,setEmail] = useState('');
  const [Number,setNumber] = useState('');

  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!Name ||!Email || !Number ) {
      alert(`${this.state.name}${this.state.email}${this.state.Number}`);
      return;
    }
    alert(`Name: ${Name}, Email: ${Email} and Number: ${Number}`);
    setName('');
    setEmail('');
  }
  const FormData =  {Name,Email,Number};
    console.log(FormData, FormData);

    setName();
    setEmail();
    setNumber();

return(
  <div className="Form">
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={Name} onChange={(e) => setName(e.target.value)} required/>
      </label>
      <br/>
      <label>
        Email:
        <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} required/>
      </label>
      <br/>
      <label>
        Number:
        <input type="tel" value={Number} onChange={(e) => setNumber(e.target.value)} required/>
      </label>
      <br/>
      <input type="submit" value="Submit"/>
    </form>
  </div>
)

}
  
export default Form





