import React, { useState } from 'react'

const Form = () => {
  const [ petName, setPetName ] = useState('')
  const [ date, setDate ] = useState('')
  const [ time, setTime ] = useState('')

  return (
    <form>
      <input type="text" value={petName} onChange={}/>
      <input type="text" value={date} onChange={} />
      <input type="text" value={time} onChange={} />
    </form>
  )
}

export default Form