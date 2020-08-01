# hooks-form-validation

> Form Validation With hooks made easy 

[![NPM](https://img.shields.io/npm/v/hooks-form-validation.svg)](https://www.npmjs.com/package/hooks-form-validation) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development . 
You want to write simple and maintainable form validations. As part of this goal, you want your validations to be simple yet accomadate your specifc needs. Be it in React Web or React Native.
### Prerequisites
Basic Understanding of Hooks 

## Install

```bash
npm install --save hooks-form-validation
```

## Usage

```jsx
import React, {useState } from 'react'

import {validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword} from 'hooks-form-validation'



```

# Arguments
  ### validateName
  This takes 4 argument <br/>
      **State** => which will hold the value of the input field <br/>
      **fieldName** => This is the name of the field e.g ' First Name , Last Name'  <br/>
      **setNameError** => Funcction to update the error message <br/>
      **min**=> This is the minimum number of characters the name should have <br/>
      **max** => This is the maximum number of characters the name should have <br/>
  
``` 
validateName(Name, "fieldName" SetNameError , Min , Max)

```
### validateEmail 
  This takes two argument<br/>
  **State** =>  This hold the value of the email input field<br/>
  **setEmailError** => function to update the error message of the email<br/>
  
  ```
      validateEmail(email, setEmailError)

  ```

### validatePassword
 This takes two argument<br/>
 **State** => Holds the value of the password field <br/>
 **SetPasswordError** Function to update the error message of the password<br/>
 **min** => (Optional=8) minimum characters of a password <br/>
 **max** => (optional =32) maximum characters of a password<br/>
  ```
  validatePassword(password, setPasswordError)
  or 
  validatePassword(password , setPasswordError , 10,40)
  // minimum password should be 10 and maximum should be 40
   ```
 ### validateConfirmPassword
 This takes three argument <br/>
 **firstPassword** => hold the value of the first password<br/>
 **SecondPassword** => holds the value of the password to be confirm <br/>
 **setConfirmPasswordError** => function to update the error message of the  confirm password <br/>
    ```
    validateConfirmPassword(password , confirmPassword , setConfirmPasswordError)
    ```



### Set Up State
Since the value of your input field will be pointing to your state\
State Errors will hold the errors of each field when validated
```
const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [Name, setName] = useState()

  // State Errors

  const [emailError, setEmailError] = useState()
  const [passwordError, setPasswordError] = useState()
  const [nameError, setNameError] = useState()
  const [confirmpasswordError, setConfirmpasswordError] = useState()

```

### Setting Up Form
```
<form method='POST' onSubmit={submit} noValidate>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='Name'
          id=''
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
      
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
     
      </div>
      <div>
        <label htmlFor='password'> Confirm password</label>
        <input
          type='password'
          name='password'
          id=''
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value)
          }}
        />
      
      </div>

      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          id=''
          value={email}
          onChange={(e) => setName(setEmail(e.target.value))}
        />
       
      </div>

      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>

```

### Conditionally showing of Errors
We created a state the store the error messages of each field. <br/>
We show this error only if the state is not null || undefine || ""
```
<form method='POST' onSubmit={submit} noValidate>
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
        <label htmlFor='password'> Confirm password</label>
        <input
          type='password'
          name='password'
          id=''
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value)
          }}
        />
        {confirmpasswordError ? (
          <span className='errorMessage'>{confirmpasswordError}</span>
        ) : null}
      </div>

      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          id=''
          value={email}
          onChange={(e) => setName(setEmail(e.target.value))}
        />
        {emailError ? <span className='errorMessage'>{emailError}</span> : null}
      </div>

      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
```
### Validating form onSubmit 
```
const submit = (e) => {
    e.preventDefault()

    validateName(Name, 'Name', setNameError, 3, 10)
    validatePassword(password, setPasswordError)
    validateEmail(email, setEmailError)
    validateConfirmPassword(password, confirmPassword, setConfirmpasswordError)
  }
```
#### storing the value of the function 
```
const submit = (e) => {
    e.preventDefault()

  let validName=  validateName(Name, 'Name', setNameError, 3, 10)
   let validPassword validatePassword(password, setPasswordError)
  let validEmail = validateEmail(email, setEmailError)
  let validConfirmPassword=  validateConfirmPassword(password, confirmPassword, setConfirmpasswordError)
  }
  
  if (validName && validPassword && validEmail && validConfirmPassword ) {
// send respond to a server 

}
```

## License

MIT © [labaran1](https://github.com/labaran1)
