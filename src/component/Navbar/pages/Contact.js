import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div>
        <span>
            Contact Page
            <button className='btn' onClick={this.changeText}>phone us</button>
             <button className='btn' onClick={this.changeText}>Facebook</button>  
             <button className='btn' onClick={this.changeText}>Instagram</button>  
        
        </span>

    </div>
  )
}

export default Contact