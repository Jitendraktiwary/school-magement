import axiosInstance from "../../services/axios";
import { ActionTypes } from "../type";
//import { setSession,resetSession } from "../../services/sessions";
//import { validateToken } from "../../services/jwt";




export const getToken = async(username,password)=>{
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    try {
        const response = await axiosInstance.post("/auth/login", formData);
       // setSession(response.data.access_token, response.data.refresh_token);

      } 
    catch (error) {
        throw error;
    }
};
export const initialize = (isAuthenticated,user)=>{
    return {
        type: ActionTypes.INITIALIZE,
        payload: {isAuthenticated,user}
    }
} 



export const loginUser = (username,password) => async (dispatch)=>{
   
    try{
        await getToken(username,password)
        const response = await axiosInstance.get("/hrms/me");
        const  {data:user} = response;   
        console.log(user,"data from auth")   
        dispatch({
            type: ActionTypes.LOGIN,
            payload:{user}
        })

    }
    catch (err){
        //errorNotification("Email or password is wrong")
        //const {data} = err.response
        // general_notification(data.detail)
    }
}



export const logout =  ()=> async (dispatch)=>{
   // resetSession()
    dispatch({
        type: ActionTypes.LOGOUT
    })
}

