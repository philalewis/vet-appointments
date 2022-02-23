import React, { useState, useEffect } from 'react'

const Appointments = () => {
  const [ appointments, setAppointments ] = useState([])

  const getAppointments = async () => {
    const getData = await fetch('http://localhost:3001/appointments')
    const appts = await getData.json()
    setAppointments(appts)
  }

  const cancelBooking = async (event) => {
    const id = event.target.id
    const deleted = await fetch(`http://localhost:3001/appointments/${id}`, {
      method: 'DELETE'
    })
    const appts = await deleted.json()
    setAppointments(appts)
  }

  useEffect(() => {
    getAppointments()
  }, [appointments])

  const populateAppointments = () =>  {
    return appointments.map(appointment => {
      return (
        <div key={appointment.id}>
          <p>PET: {appointment.pet}</p>
          <p>DATE: {appointment.date}</p>
          <p>TIME: {appointment.time}</p>
          <button id={appointment.id} onClick={(event) => cancelBooking(event)}>CANCEL</button>
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