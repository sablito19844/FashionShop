import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4 text-danger'>Signup</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor='email'>Email</Form.Label>
              <Form.Control type='email' id='email ' />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor='password'>Password</Form.Label>
              <Form.Control type='password' id='password ' />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor='password-confiramation'>Password Confirmation</Form.Label>
              <Form.Control type='password' id='password-confirmation' />
            </Form.Group>

            <Button className="mt-4 w-100" variant='primary' type='submit'>Signup</Button>

          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}

export default Signup