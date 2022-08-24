import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../features/login/loginSlice';
import '../styles/Header/header.scss';
import { FaHome, FaUser } from 'react-icons/fa';

export default function Header() {
  const { user, isLoading, isSuccess, isError, msg } = useSelector(
    (state) => state.login
  );
  const dispatch = useDispatch();

  return (
    <nav>
      <ul>
        <li className='user-login user'>
          {user && <h3>Welcome Back {user.userData.email}</h3>}
        </li>
        <li>
          <NavLink
            to='/'
            exact='true'
            activeclassname='active'
            className='projects-link'
          >
            Home
          </NavLink>
        </li>
        <li>
          <Link to='#'>About</Link>
        </li>
        <li>
          <Link to='#'>Contact</Link>
        </li>
        {user ? (
          <li
            onClick={() => {
              dispatch(reset());
            }}
          >
            <a href='#' className='login'>
              Logout
            </a>
          </li>
        ) : (
          <li>
            <NavLink
              to='/login'
              exact='true'
              activeclassname='active'
              className='projects-link login'
            >
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
