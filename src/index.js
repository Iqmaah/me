import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup1 from './pages/Auth/Signup/Signup1';
import Signup2 from './pages/Auth/Signup/Signup2';
import Signup3 from './pages/Auth/Signup/Signup3';
import Signup4 from './pages/Auth/Signup/Signup4';
import Login1 from './pages/Auth/Login/Login1';
import Login2 from './pages/Auth/Login/Login2';
import Loginmodal from './pages/Auth/Login/Loginmodal';
import PasswordReset1 from './pages/Auth/ResetPassword/PasswordReset1';
import PasswordReset2 from './pages/Auth/ResetPassword/PasswordReset2';
import PasswordReset3 from './pages/Auth/ResetPassword/PasswordReset3';
import Dashboard from './pages/Dashboard/Dashboard';
import Sidebar from './shared-components/Sidebar/Sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
