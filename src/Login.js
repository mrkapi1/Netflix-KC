import React, { useState} from 'react'
import "./css/login.css"
import SignUp from './SignUp';

const Login = () => {
const [signIn, setSignIn] = useState(false);

  return (
    <div className="login">
        <div className="login__header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logonet" className= "login__logo" />
            <button className="login__button" onClick={() => setSignIn (true)}>
             Sign In
            </button>

        </div>
        <div className="login__body">
            {
                signIn ? (<SignUp />) : (
<>
<h1>Unlimited movies, TV shows and more.</h1>
<h2>Watch anywhere. Cancel anytime.</h2>
<h3>Ready to watch? Enter your email to create or restart your membership.</h3>

<form className="login__form">
    <input type="text" placeholder="Email Address" />
    <button onClick={() => setSignIn (true)} > Get Started </button>
</form>
</>
             )
            }
        </div>
        <div className="login__gradient">
         </div>
    </div>
    
  )
}

export default Login;