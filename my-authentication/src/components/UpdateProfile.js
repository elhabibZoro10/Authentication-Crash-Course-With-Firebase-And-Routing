import React, { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const { currentUser, updateUserEmail, updateUserPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const currentPasswordRef = useRef(); // Reference for the current password
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      setError("Passwords do not match");
      return;
    }

    const promises = [];
    setError("");
    setLoading(true);

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateUserEmail(emailRef.current.value, currentPasswordRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updateUserPassword(passwordRef.current.value, currentPasswordRef.current.value));
    }

    Promise.all(promises).then(() => {
      navigate(redirectPath, { replace: true });
    }).catch(() => {
      setError("Failed to update account");
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Update Profile</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required defaultValue={currentUser?.email} />
            </Form.Group>
            <Form.Group id='current-password'>
              <Form.Label>Current Password</Form.Label>
              <Form.Control type='password' ref={currentPasswordRef} required />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>New Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} />
            </Form.Group>
            <Form.Group id='password-confirmation'>
              <Form.Label>New Password Confirmation</Form.Label>
              <Form.Control type='password' ref={passwordConfirmationRef} />
            </Form.Group>
            <Button disabled={loading} className='w-100 mt-3' type='submit'>
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Link to="/">Cancel</Link>
      </div>
    </>
  );
}

export default UpdateProfile;
