import React, { useState } from 'react'

const Form = () => {
  const [ petName, setPetName ] = useState('')
  const [ date, setDate ] = useState('')
  const [ time, setTime ] = useState('')

  const handleChange = (event) => {
    event.preventDefault()
    switch(event.target.name) {
      case 'petName':
        setPetName(event.target.value)
        break
      case 'date':
        setDate(event.target.value)
        break
      case 'time':
        setTime(event.target.value)
        break
    }
  }

  const makeNewAppointment = async () => {
    const appointment = await fetch('http://localhost:3001/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pet: petName,
        date: date,
        time: time
      })
    })
  }

  const clearInputs = () => {
    setPetName('')
    setDate('')
    setTime('')
  }

  const handleClick = event => {
    event.preventDefault()
    makeNewAppointment()
    clearInputs()
  }

  return (
    <form>
      <input 
        type="text" 
        placeholder="Your pet's name" 
        name="petName" 
        value={petName} 
        onChange={event => handleChange(event)} 
      />
      <input 
        type="text" 
        placeholder="Date" 
        name="date" 
        value={date} 
        onChange={event => handleChange(event)} 
      />
      <input 
        type="text" 
        placeholder="Time" 
        name="time" 
        value={time} 
        onChange={event => handleChange(event)} 
      />
      <button 
        onClick={event => handleClick(event)}
      >SUBMIT</button>
    </form>
  )
}

export default Form