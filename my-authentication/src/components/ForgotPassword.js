import React, { useRef, useState } from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { Link} from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

const ForgotPassword = () => {

  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message , setMessage] = useState("")
  const emailRef = useRef();



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("check your inbox to get new password")
    } catch (error) {
      setError("Failed to Reset Password");
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4' >Reset Password</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          {message && <Alert variant='success'>{message}</Alert>}
          <Form onSubmit={handleSubmit} >
            <Form.Group>
              <Form.Label htmlFor='email' >Email</Form.Label>
              <Form.Control type='email' id='email' ref={emailRef} />
            </Form.Group>   
          <Button disabled={loading} className='w-100 text-center mt-3' variant="primary" type="submit">Reset Password</Button>
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

