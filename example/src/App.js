import React, { useState } from 'react'

import {
  validateName,
  validateEmail,
  validatePassword
} from 'hooks-form-validation'
import 'hooks-form-validation/dist/index.css'

const App = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [Name, setName] = useState()

  // State Errors

  const [emailError, setEmailError] = useState()
  const [passwordError, setPasswordError] = useState()
  const [nameError, setNameError] = useState()
  const [confirmpasswordError, setConfirmpasswordError] = useState()

  const submit = (e) => {
    e.preventDefault()
    // validateName(name, 'Name', nameError, 3, 10)
  }
  return (
    <form method='POST' onSubmit={submit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='Name'
          id=''
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError ? <span className='errorMessage'>{nameError}</span> : null}
      </div>
      <div>
        <label htmlFor='password'>password</label>
        <input
          type='password'
          name='password'
          id=''
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        {passwordError ? (
          <span className='errorMessage'>{passwordError}</span>
        ) : null}
      </div>

      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          id=''
          value={email}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        {emailError ? <span className='errorMessage'>{emailError}</span> : null}
      </div>

      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default App
