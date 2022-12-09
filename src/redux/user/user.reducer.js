
import { userActionTypes } from "./user.types";
import { updateUser } from "./user-utils";
const INITIAL_STATE = {
    users: []
}

const userReducer = (state = INITIAL_STATE,action) => {
  switch(action.type){
    
    case userActionTypes.SET_CURRENT_USER:
        return {
            users:[...state.users,action.payload]
        }
    
    case userActionTypes.SET_USERS:
        return{
            users: action.payload
        }

    case userActionTypes.UPDATE_USER:
        return{
            users: updateUser(state.users,action.payload)
        }

    case userActionTypes.DELETE_USER:
        return{
            users: state.users.filter(user => user.id !== action.payload)
        }
    
    default:
        return state;
  }
};

export default userReducer;