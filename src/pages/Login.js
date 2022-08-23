import React, { useState, useEffect } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  function updateForm(e) {
    e.preventDefault();

    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <>
      <div className='page login-page'>
        <div className='form-container'>
          <h3 className='form-title'>Login</h3>
          <form className='form login-form'>
            <div className='input-group'>
              <input
                type='email'
                required={true}
                placeholder='Email'
                onChange={(e) => updateForm(e)}
                name='email'
                value={formData.email}
              />
            </div>
            <div className='input-group'></div>
            <input
              type='password'
              required={true}
              placeholder='Password'
              onChange={(e) => updateForm(e)}
              name='password'
              value={formData.password}
            />
          </form>
        </div>
      </div>
    </>
  );
}
