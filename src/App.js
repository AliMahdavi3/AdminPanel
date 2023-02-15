import React from "react";
import { Provider } from "react-redux"
import { useLocation } from "react-router-dom";
import AuthLayout from "./layout/auth/AuthLayout";
import Index from "./layout/Index";
import store from "./redux/store";

function App() {

  const location = useLocation()

          return (
            
            <Provider store={store}>
            
                  <>
                      {
                            location.pathname.includes('/login') ? (

                                    <AuthLayout/>  

                                  ) : ( 

                                  <Index/>
                              
                            )
                        }
                  </>

                  
            </Provider>

          );
}

export default App;
