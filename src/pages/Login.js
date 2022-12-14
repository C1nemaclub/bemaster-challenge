import React, { useState } from 'react';
import { loginUser } from '../features/login/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/Login/login.scss';
import { toast } from 'react-toastify';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  function onSubmit(e) {
    e.preventDefault();
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9·-]+\.[a-z]{2,8}(.[a-z{2.,8}])?/g;
    if (regEx.test(formData.email)) {
      dispatch(loginUser(formData));
      toast.success('Successfully Logged in!');
      navigate('/');
    } else if (!regEx.test(formData.email) && formData.email !== '') {
      toast.warning('Email Not Valid');
    } else {
      toast.error('There was an error entering your email');
    }
  }

  const { isLoading } = useSelector((state) => state.login);

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

  if (isLoading) {
    return <h1 style={{ color: '#fff' }}>Loading...</h1>;
  }
  return (
    <>
      <div className='page login-page'>
        <div className='content'>
          <div className='form-container'>
            <h3 className='form-title'>Sign In</h3>
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
      </div>
    </>
  );
}
