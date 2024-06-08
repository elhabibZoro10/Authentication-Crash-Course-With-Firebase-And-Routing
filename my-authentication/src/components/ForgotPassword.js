import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4' >Reset Password</h2>
          <Form>
            <Form.Group>
              <Form.Label htmlFor='email' >Email</Form.Label>
              <Form.Control type='email' id='email' />
            </Form.Group>   
          <Button className='w-100 text-center mt-3' variant="primary" type="submit">Reset Password</Button>
          </Form>

          <div className='w-100 text-center mt-3' >
            <Link to="/login" >Login</Link>
          </div>

        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2' >
        Need an account ? <Link to="/signup" >Signup</Link>
      </div>
    </>
  )
}

export default ForgotPassword

