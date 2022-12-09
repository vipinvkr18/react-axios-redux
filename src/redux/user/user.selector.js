import { createSelector } from "reselect";
import { getUser } from "./user-utils";

const userSelect = state => state.user;

export const selectUsers = createSelector(
[userSelect],
 user => user.users
);

export const selectUser = id => 
    createSelector(
        [selectUsers],
        users => {
            return (users ? getUser(users,id) : null)}
    );



