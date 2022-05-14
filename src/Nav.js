import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import './css/nav.css';

const Nav = () => {

    const [show, handleShow] = useState (false)
    const transitionNavbar=() => {
        if(window.scrollY>100)
        {
            handleShow(true)
        }
        else
        {
            handleShow(false)
        }
    }

    useEffect(()=> {
        window.addEventListener("scroll",transitionNavbar)

        return ()=> {
            window.removeEventListener("scroll",transitionNavbar)
        }
    },[])
  return (
      <div className={`nav ${show && "nav__black"}`}>
            <div className='nav__content'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflixalpha" className='logo' />
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt="avatar" className='nav__avatar' onClick = {()=> firebase.auth().signOut} />
    </div>
    </div>
  )
}

export default Nav;