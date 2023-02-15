import { configureStore } from "@reduxjs/toolkit"
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk";
import usersReducer from "./user/reducer"

// const store = createStore(rolesReducer, applyMiddleware(thunk));
const store = configureStore({

            reducer : {
                usersReducer
            },
}) ;

export default store;