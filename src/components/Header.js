import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../features/login/loginSlice';
import '../styles/Header/header.scss';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function Header() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.login);
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
              toast.success('Succesfully logged out');
              navigate('/');
            }}
          >
            <a href='#' className='login'>
              <FaSignOutAlt />
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
              <FaSignInAlt />
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
