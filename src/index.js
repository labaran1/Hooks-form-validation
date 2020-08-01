import React from 'react'
// import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}


export const validateName= (nameState, fieldName='Name', setNameError, min, max)=> {
  if (nameState == null || undefined || "") {
    NameError(`${fieldName} is required`);
    setTimeout(() => {
      NameError();
    }, 5000);
  } else if (nameState.length < min) {
    NameError(`${fieldName} must be at least ${min} characters`);
    setTimeout(() => {
      NameError();
    }, 5000);
  } else if (nameState.length > max) {
    NameError(`${fieldName} must be less than ${max} characters`);
    setTimeout(() => {
      NameError();
    }, 5000);
  } else {
    return true;
  }


}

export const validateEmail(emailState, setEmailError)=> {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailState == null || undefined || "") {
    setEmailError("Email is required");
    setTimeout(() => {
      setEmailError();
    }, 5000);
  } else if (!re.test(emailState.trim())) {
    setEmailError("Enter a valid Email");
    setTimeout(() => {
      setEmailError();
    }, 5000);
  } else {
    return true;
  }

}

export const validatePassword=(passwordState, setPasswordError,min=8, max=32)=>{
  if (passwordState == null || undefined || "") {
    setPasswordError("Password is required");
    setTimeout(() => {
      setPasswordError();
    }, 5000);
  } else if (passwordState.length < min) {
    setPasswordError(`Password must be at least ${min} characters`);
    setTimeout(() => {
      setPasswordError();
    }, 5000);
  } else if (passwordState.length > max) {
    setPasswordError(`Password must be less than ${max} characters`);
  }else if(!/[A-Z]/.test(passwordState)) {
    setPasswordError('Password must contain an Upper case letter')
    setTimeout(() => {
      setPasswordError();
    }, 5000);
  }
  
  
  else {
    return true;
  }
}

// export function validateConfirmPassword(password1, password2, passwordError) {
//   if (password2 == null || undefined || "") {
//     passwordError("Please Confirm Password");
//     setTimeout(() => {
//       passwordError();
//     }, 5000);
//   } else if (password2 !== password1) {
//     passwordError("Password doesn't  match");
//     setTimeout(() => {
//       passwordError();
//     }, 5000);
//   } else {
//     return true;
//   }
// }
