import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink exact to='/upload'>Upload</NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      // <div className='nav-login-left'>
      <>
        <LoginFormModal />
        <div className='nav-create-account'>
          <NavLink to="/signup">Create account</NavLink>
        </div>
      </>
      // </div>
    );
  }

  return (
    <nav className='navbar-container'>
      <div className='nav-logo-container'>
        <img className='nav-logo' alt='Nimbus Sounds' src='https://nimbus-sounds.s3.us-west-1.amazonaws.com/nimbus-grey.png'>
        </img>
      </div>
      <div className='nav-home'>
        <NavLink exact to="/">
          Home
        </NavLink>
      </div>
      <div className='nav-site-title'>
        Nimbus Sounds
      </div>
      {isLoaded && sessionLinks}
    </nav>
  );
}

export default Navigation;