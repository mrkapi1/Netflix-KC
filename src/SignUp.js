import React, {useRef}  from 'react'
import './css/login.css';
import  {auth} from './firebase';

const SignUp = () => {

  const emailRef = useRef(null);
  const passswordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    alert(emailRef.current.value);
    auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passswordRef.current.value
        ).then(authUser =>{
            console.log(authUser)
        }).catch(error =>{
            alert(error.message)
        })

  }
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passswordRef.current.value
        ).then(authUser =>{
            console.log(authUser)
        }).catch(error =>{
            alert(error.message)
        })
  }

  return (
    <div className = "signUpScreen" > 
          <form>
            <img src="https://pngimg.com/uploads/netflix/netflix_PNG15.png" alt="netflixalpha" className= "signUpScreen__logo" />
            <h1> Sign In</h1>
            <input ref= {emailRef} type="email" placeholder= "Email" />
            <input  ref= {passswordRef} type="password" placeholder="Password" />
            <button onClick = { signIn } >Sign In</button>
            <h4>New to Netflix? <span onClick= { register}  >Sign up now.</span></h4>
          </form>
    </div>
  )
}

export default SignUp;

