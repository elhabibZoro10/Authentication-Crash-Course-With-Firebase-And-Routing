import React, { useState } from 'react'
import { Alert, Card } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const {currentUser , logout } = useAuth()
  const [error , setError] = useState("")
  const navigate = useNavigate()

  const handelLogout =  async () => {
    setError("")
    try {
      await logout()
      navigate("/login")
    } catch {
      setError("Failed to Log out")
    }
  }

  return (
    <>
      <Card>
      <Card.Body>
        <h2 className='text-center mb-4'>Profile </h2>
        {error && <Alert variant='danger'>{error}</Alert>}
        <strong>Email:</strong> {currentUser && currentUser.email}
        <Link to="/update-profile" className='btn btn-primary w-100 mt-3' >Update Profile</Link>
      </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'  >
        <button onClick={handelLogout} className='btn btn-primary' >Log Out</button>
      </div>
    </>
  )
}

export default Dashboard
