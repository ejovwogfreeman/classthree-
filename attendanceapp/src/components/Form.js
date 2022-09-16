import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()

        // if(name === '' || email === ''){
        if(!name || !email) {   
            alert('invalid input')
            return;
        }

        alert(`name: ${name} and email: ${email} has been registered successfully!`)
        setName('')
        setEmail('')
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <input 
                type="text" 
                placeholder='Enter your company'
                value = {name}
                onChange = {(e)=> setName(e.target.value)}
                // required
            />
        </div>
        <div>
            <input 
                type="email" 
                placeholder='Enter your email'
                value={email}
                onChange = {(e)=> setEmail(e.target.value)}
                // required
            />
        </div>
        <button>Submit</button>
{/* 
        <h1>{name}</h1>
        <h2>{email}</h2> */}
    </form>
  )
}

export default Form