import React from 'react'
// import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}


export const validateName(nameState, fieldName, setNameError, min, max)=> {
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

