import React, { useState, useEffect } from 'react';
import { loginUser } from '../features/login/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/Login/login.scss';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const { user, isLoading, isSuccess, isError, msg } = useSelector(
    (state) => state.login
  );

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

  function onSubmit(e) {
    e.preventDefault();
    dispatch(loginUser(formData));
    navigate('/');
  }

  if (isLoading) {
    return <h1 style={{ color: 'red' }}>Loading...</h1>;
  }
  return (
    <>
      <div className='page login-page'>
        <div className='form-container'>
          <h3 className='form-title'>Login</h3>
          <form className='form login-form' onSubmit={(e) => onSubmit(e)}>
            <div className='input-group'>
              <input
                type='email'
                required
                placeholder='Email'
                onChange={(e) => updateForm(e)}
                name='email'
                value={formData.email}
              />
            </div>
            <div className='input-group'>
              <input
                type='password'
                required
                placeholder='Password'
                onChange={(e) => updateForm(e)}
                name='password'
                value={formData.password}
              />
            </div>
            <div className='input-group'>
              {/* <button onClick={onSubmit}>Login</button> */}
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
