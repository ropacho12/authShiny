
import './App.css';
import Navbar from './componentes/Navbar/Navbar.js';
// import Hero from './componentes/Hero/Hero';
import Login from './componentes/Login/Login';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function App() {


  // const auth = getAuth();

  // const singUp = () =>


  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });


  return (
    <div className="App">
      <Navbar/>
      {/* <Hero/> */}
      <Login/>
    </div>
  );
}

export default App;
