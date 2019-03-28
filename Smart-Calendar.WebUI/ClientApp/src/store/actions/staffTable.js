import * as actionTypes from "./actionTypes";
import axios from "../../axios-api";

export const getUserInfo = id => {
    return dispatch => {
        axios.get("calendar/user/" + id)
            .then(response => {
                dispatch({
                    type: actionTypes.GET_USERINFO,
                    currentUser: response.data
                });
            }).catch(error => {
                console.log(error);
            });
    };
};

export const updateUserPartial = updatedUser => {
    return dispatch => {
        axios.put("calendar/userPartial/" + updatedUser.userId, updatedUser)
            .then(response => {
                dispatch({
                    type: actionTypes.UPDATE_USERINFO,
                    newUsers: response.data.value,
                    currentUser: updatedUser
                });
            }).catch(error => {
                console.log(error);
            });
    };
};

export const addAccount = newAccount => {
    return dispatch => {
        axios
            .post("account/register", newAccount)
            .then(response => {
                dispatch(
                    {
                        type: actionTypes.ADD_ACCOUNTINFO,
                        newAccounts: response.data
                    });
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const setUsers = users => {
    return {
        type: actionTypes.SET_USERS,
        users: users
    };
};

export const setAccounts = accounts => {
    return {
        type: actionTypes.SET_ACCOUNTS,
        accounts: accounts
    };
};

export const setSearchField = text => {
    return {
        type: actionTypes.CHANGE_SEARCH_FIELD,
        searchText: text
    };
};

export const initTable = () => {
    return dispatch => {
        axios
            .get("calendar/user")
            .then(response => {
                dispatch(setUsers(response.data));
            })
            .catch(error => {
                console.log(error);
            });
        axios.get("calendar/account")
            .then(response => {
                dispatch(setAccounts(response.data));
            }).catch(error => {
                console.log(error);
            });
    };
};
