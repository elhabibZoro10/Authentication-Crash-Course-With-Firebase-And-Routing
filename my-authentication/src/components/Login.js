import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4' >Login</h2>
          <Form>
            <Form.Group>
              <Form.Label htmlFor='email' >Email</Form.Label>
              <Form.Control type='email' id='email' />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor='password' >Pasword</Form.Label>
              <Form.Control type='password' id='password' />
            </Form.Group>      
          <Button variant="primary" type="submit">Log In</Button>
          </Form>

          <div className='w-100 text-center mt-3' >
            <Link to="/forgot-password" >Forgot Password</Link>
          </div>

        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2' >
        Need an account ? <Link to="/signup" >Signup</Link>
      </div>
    </>
  )
}

export default Login


