import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import HomeScreen from './HomeScreen';
import Login from "./Login"
import {auth} from "./firebase";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=> {

    const unsubscribe = auth.onAuthStateChanged(user => 
      {
      if(user)
      {
        dispatch(login({
          uid:user.uid,
          email:user.email
        }))
      }
      else
      {
        dispatch(logout)
      }
    })
    return unsubscribe;
  }, [])


  return (
      <div className="App">
        {
          !user ? ( <Login /> ) : (
            <HomeScreen />
          )
        }
     </div>
  )
  
}

export default App
