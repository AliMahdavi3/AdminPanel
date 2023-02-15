// import { getUserService } from "../../services/auth";
import {
  RECEIVE_USER_ERROR,
  RECEIVE_USER_RESPONSE,
  SEND_USER_REQUEST,
} from "./userTypes";

export const sendUsersRequest = () => {
  return {
    type: SEND_USER_REQUEST,
  };
};

export const receiveUsersResponse = (data) => {
  return {
    type: RECEIVE_USER_RESPONSE,
    payload: data,
  };
};

export const receiveUsersError = (error) => {
  return {
    type: RECEIVE_USER_ERROR,
    payload: error,
  };
};

// export const getRolesActionsRedux = () => {
//     return (dispatch, state) => {

//         dispatch(sendRolesRequest());

//         getUserService().then(res=>{
//                 dispatch(receiveRolesResponse(res.data.roles));

//         }).catch(error=>{

//                 dispatch(receiveRolesError(error.message));

//         })
//     };
// }
