import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../features/login/loginSlice';

export default function Header() {
  const { user, isLoading, isSuccess, isError, msg } = useSelector(
    (state) => state.login
  );
  const dispatch = useDispatch();

  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {user ? (
          <li
            onClick={() => {
              dispatch(reset());
            }}
          >
            Logout
          </li>
        ) : (
          <li>
            <Link to='/login'>Login</Link>
          </li>
        )}
        {user && <li>{user.userData.email}</li>}
      </ul>
    </nav>
  );
}
