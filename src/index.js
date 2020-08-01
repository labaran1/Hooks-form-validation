import React from 'react'

export const validateName = (
  nameState,
  fieldName = 'Name',
  setNameError,
  min,
  max
) => {
  if (nameState == null || undefined || '') {
    setNameError(`${fieldName} is required`)
    setTimeout(() => {
      setNameError()
    }, 5000)
  } else if (nameState.length < min) {
    setNameError(`${fieldName} must be at least ${min} characters`)
    setTimeout(() => {
      setNameError()
    }, 5000)
  } else if (nameState.length > max) {
    setNameError(`${fieldName} must be less than ${max} characters`)
    setTimeout(() => {
      setNameError()
    }, 5000)
  } else {
    return true
  }
}

export const validateEmail = (emailState, setEmailError) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (emailState == null || undefined || '') {
    setEmailError('Email is required')
    setTimeout(() => {
      setEmailError()
    }, 5000)
  } else if (!re.test(emailState.trim())) {
    setEmailError('Enter a valid Email')
    setTimeout(() => {
      setEmailError()
    }, 5000)
  } else {
    return true
  }
}

export const validatePassword = (
  passwordState,
  setPasswordError,
  min = 8,
  max = 32
) => {
  if (passwordState == null || undefined || '') {
    setPasswordError('Password is required')
    setTimeout(() => {
      setPasswordError()
    }, 5000)
  } else if (passwordState.length < min) {
    setPasswordError(`Password must be at least ${min} characters`)
    setTimeout(() => {
      setPasswordError()
    }, 5000)
  } else if (passwordState.length > max) {
    setPasswordError(`Password must be less than ${max} characters`)
  } else if (!/[A-Z]/.test(passwordState)) {
    setPasswordError('Password must contain an Upper case letter')
    setTimeout(() => {
      setPasswordError()
    }, 5000)
  } else if (!/[a-z]/.test(passwordState)) {
    setPasswordError('Password must contain a lower case letter')
    setTimeout(() => {
      setPasswordError()
    }, 5000)
  } else if (!/[0-9]/.test(passwordState)) {
    setPasswordError('Password must contain a number')
    setTimeout(() => {
      setPasswordError()
    }, 5000)
  } else if (!/[●!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(passwordState)) {
    setPasswordError('Password must contain a special character')
    setTimeout(() => {
      setPasswordError()
    }, 5000)
  } else {
    return true
  }
}

export function validateConfirmPassword(
  password1,
  password2,
  setConfirmPasswordError
) {
  if (password2 == null || undefined || '') {
    setConfirmPasswordError('Please Confirm Password')
    setTimeout(() => {
      setConfirmPasswordError()
    }, 5000)
  } else if (
    password1 == null ||
    undefined ||
    ('' && password2 != null) ||
    undefined
  ) {
    setConfirmPasswordError('Please enter password and confirm it ')
    setTimeout(() => {
      setConfirmPasswordError()
    }, 5000)
  } else if (password2 !== password1) {
    setConfirmPasswordError("Password doesn't  match")
    setTimeout(() => {
      setConfirmPasswordError()
    }, 5000)
  } else {
    return true
  }
}
