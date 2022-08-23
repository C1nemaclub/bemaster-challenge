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
            <a href='#'>Logout</a>
          </li>
        ) : (
          <li>
            <NavLink
              to='/login'
              exact='true'
              activeclassname='active'
              className='projects-link'
            >
              Login
            </NavLink>
          </li>
        )}
        {user && <li>{user.userData.email}</li>}
      </ul>
    </nav>
  );
}
