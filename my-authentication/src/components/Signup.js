import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4' >Signup</h2>
          <Form>
            <Form.Group>
              <Form.Label htmlFor='email' >Email</Form.Label>
              <Form.Control type='email' id='email' />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor='password' >Pasword</Form.Label>
              <Form.Control type='password' id='password' />
            </Form.Group>      
            <Form.Group>
            <Form.Label htmlFor='password-confirmation' >Pasword Confirmation</Form.Label>
            <Form.Control type='password' id='password-confirmation' />
          </Form.Group>
          <Button className='w-100 text-center mt-3' variant="primary" type="submit">Signup</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2' >
        Already havz an account? <Link to="/login" >Log In</Link>
      </div>
    </>
  )
}

export default Signup
