import React, { useState, useEffect } from 'react'

const Appointments = () => {
  const [ appointments, setAppointments ] = useState([])

  const getAppointments = async () => {
    const getData = await fetch('http://localhost:3001/appointments')
    const appts = await getData.json()
  }
  
  useEffect(() => {
    getAppointments()
  }, [])

  const populateAppointments = () =>  {
    return appointments.map(appointment => {
      return (
        <div key={appointment.id}>
          <p>PET: {appointment.pet}</p>
          <p>DATE: {appointment.date}</p>
          <p>TIME: {appointment.time}</p>
        </div>
      )
    })
  }

  return (
    <section>
      { populateAppointments() }
    </section>
  )
}

export default Appointments