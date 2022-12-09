import { userActionTypes } from "./user.types";

export const setCurrentUser = user => ({
 type: userActionTypes.SET_CURRENT_USER,
 payload: user
});

export const setUsers = users => ({
    type: userActionTypes.SET_USERS,
    payload: users
});

export const updateUser = user => ({
    type: userActionTypes.UPDATE_USER,
    payload: user
});

export const deleteUser = id => ({
    type: userActionTypes.DELETE_USER,
    payload: id
});