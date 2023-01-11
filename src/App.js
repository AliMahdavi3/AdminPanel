import React from "react";
import { useLocation } from "react-router-dom";
import AuthLayout from "./layout/auth/AuthLayout";
import Index from "./layout/Index";

function App() {

  const location = useLocation()

  return (
    
     <>
   {
      location.pathname.includes('/login') ? (

        <AuthLayout/>  

       ) : ( 

      <Index/>
        
       )
     }
     </>
  
  );
}

export default App;
