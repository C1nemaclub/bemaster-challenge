import React, { useState, useEffect } from 'react';

export default function Login() {
  const [formData, setFormData] = useState([]);

  function updateForm() {
    
  }

  return (
    <>
      <div className='page login-page'>
        <div className='form-container'>
          <h3 className='form-title'>Login</h3>
          <form className='form login-form'>
            <input
              type='email'
              required='true'
              placeholder='Email'
              onChange={updateForm}
            />
            <input
              type='password'
              required='true'
              placeholder='Password'
              onChange={updateForm}
            />
          </form>
        </div>
      </div>
    </>
  );
}
