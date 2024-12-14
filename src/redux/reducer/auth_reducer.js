import { ActionTypes } from "../type";

const initialState = {
    isAuthenticated: false,
    isInitializes: false,
    user: null,
    loading: true,
  };

export const jwtAuthreducer  = (state = initialState, action)=>{
    switch (action.type) {
        case ActionTypes.INITIALIZE:
            return {...state,isInitializes:true,isAuthenticated:action.payload.isAuthenticated,
            user:action.payload.user}
        case ActionTypes.LOGIN:
          return { ...state, isAuthenticated:true,user:action.payload.user };
        case ActionTypes.LOADING:
        return {
          ...state,
          loading: action.payload.loading,
        };
        case ActionTypes.LOGOUT:
            return{...state,isAuthenticated:false,user:null}
        default:
          return state;
    }
};