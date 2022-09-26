import React, { useState } from 'react';
import LoginForm from './LoginForm';
import TableApp from '../table/TableApp';
import { Navigate } from "react-router-dom";
import PrivateRoutes from './PrivateRoutes';



function Login() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }
  
  const [user, setUser] = useState({email: "", password: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password) {
    console.log("Logged in");
    setUser({
      name: details.name,
      email:details
    });
  } else {
    console.log("Details do not match!");
    setError("Hata!");
  }
  }

  const Logout = () => {
    setUser({ email: "", password: ""});
  }

 
  
  return (
    <div className="App">
      {(user.email != "") ? (
        <Navigate to="/table" replace={true} />
      ) : (
        <LoginForm Login={Login} error={error}/>
      ) }
    </div>
  );
}

export default Login;
