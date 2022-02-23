import React, { useState } from 'react'
import './App.css';
import Form from './Form'
import Appointments from './Appointments'

const App = () => {
  return (
    <main>
      <Form />
      <Appointments />
    </main>
  )
}

export default App;
