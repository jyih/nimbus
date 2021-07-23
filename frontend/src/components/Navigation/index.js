import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className='nav-button-container'>
          <NavLink exact to='/upload'>Upload</NavLink>
          <ProfileButton user={sessionUser} />
        </div>
      </>
    );
  } else {
    sessionLinks = (
      // <div className='nav-login-left'>
      //<LoginFormModal />
      <div className='nav-credentials-container'>
        <div className='nav-button-container'>
          <NavLink exact to='/login'>
            <button className='nav-button button-sign-in'>
              Sign in
            </button>
          </NavLink>
        </div>
        <div className='nav-button-container nav-create-account'>
          <NavLink to="/signup">
            <button className='nav-button button-create-account'>
              Create account
            </button>
          </NavLink>
        </div>
      </div>
      // </div>
    );
  }

  return (
    <nav className='navbar-container'>
      <div className='navbar-content-container'>
        <div className='navbar-left-container'>
          <div className='nav-logo-container'>
            <img className='nav-logo'
              alt='Nimbus Sounds'
              src='https://nimbus-sounds.s3.us-west-1.amazonaws.com/logos/nimbus-grey.png'
            />
          </div>
          <div className='nav-button-container'>
            <NavLink className='nav-home' exact to="/">
              Home
            </NavLink>
          </div>
        </div>
        <div className='nav-site-title'>
          Nimbus Sounds
        </div>
        {isLoaded && sessionLinks}
      </div>
    </nav >
  );
}

export default Navigation;