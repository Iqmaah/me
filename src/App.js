import { Routes, Route, Link } from "react-router-dom";
// import { Link } from "react-router-dom"
import './App.css';
import Signup1 from './pages/Auth/Signup/Signup1';
import Signup2 from './pages/Auth/Signup/Signup2';
import Signup3 from './pages/Auth/Signup/Signup3'
import Signup4 from './pages/Auth/Signup/Signup4'
import Login1 from './pages/Auth/Login/Login1'
import Login2 from './pages/Auth/Login/Login2'
import Loginmodal from './pages/Auth/Login/Loginmodal'
import PasswordReset1 from './pages/Auth/ResetPassword/PasswordReset1'
import PasswordReset2 from './pages/Auth/ResetPassword/PasswordReset2'
import PasswordReset3 from './pages/Auth/ResetPassword/PasswordReset3'


function App() {
  return (
    <>
      
        <Routes>   
            <Route  path="/" element={<Signup1 />} />
            <Route  path="/Signup2" element={<Signup2 />} />
            <Route  path="/Signup3" element={<Signup3 />} />
            <Route  path="/Signup4" element={<Signup4 />} />
            <Route  path="/Login1" element={<Login1 />}/>
            <Route  path="/Login2" element={<Login2 />} />
            <Route  path="/Login2" element={<Loginmodal />} />
            <Route  path="/PasswordReset1" element={<PasswordReset1 />} />
            <Route  path="/PasswordReset2" element={<PasswordReset2 />} />
            <Route  path="/PasswordReset3" element={<PasswordReset3 />} />
            {/* <Route path="*" element={<HomePage />} /> */}
        </Routes>
      
    </>
  );
}

export default App;
