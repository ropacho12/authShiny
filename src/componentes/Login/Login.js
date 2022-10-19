import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import app from '../Firebase/Firebase';
import 'firebase/auth'


const Login = () => {
  

    const auth = getAuth(app);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const singUp = () =>{
        createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("holaaaa ")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
        alert(errorCode)
      });
  
    }


    const singIn =  ()=>{
   

      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log (user)
    alert ("usuario creado")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    alert(errorCode)
  
    })}
  
    return (
    <div>
        Login

        <form>
               <div className="mb-3">
                 <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type={"email"} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setEmail (e.target.value)}/>
                 <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
               </div>
               <div className="mb-3">
                 <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                 <input type={"password" }className="form-control" id="exampleInputPassword1" onChange={(e)=> setPassword (e.target.value)}/>
               </div>
               <div className="mb-3 form-check">
                 <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                 <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
               </div>
               <button type="submit" className="btn btn-primary" onClick={singUp}>crear cuenta</button>
               <button type="submit" className="btn btn-primary" onClick={singIn}>Ingresar</button>
       </form>
        
    </div>
  )
}

export default Login