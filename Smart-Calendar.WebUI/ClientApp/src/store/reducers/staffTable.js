import * as actionTypes from "../actions/actionTypes";

const initialState = {
    users: null,
    accounts: null,
    currentUser: null,
    searchField: ""
};

const setUsers = (state, action) => {
    return { ...state, users: action.users };
};

const setAccounts = (state, action) => {
    return { ...state, accounts: action.accounts };
};

const getUserInfo = (state, action) => {
    return { ...state, currentUser: action.currentUser };
};

const addAccountInfo = (state, action) => {
    return { ...state, accounts: action.newAccounts };
};

const changeSearchField = (state, action) => {
    return { ...state, searchField: action.searchText };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USERS:
            return setUsers(state, action);
        case actionTypes.SET_ACCOUNTS:
            return setAccounts(state, action);
        case actionTypes.GET_USERINFO:
            return getUserInfo(state, action);
        case actionTypes.ADD_ACCOUNTINFO:
            return addAccountInfo(state, action);
        case actionTypes.CHANGE_SEARCH_FIELD:
            return changeSearchField(state, action);
        default:
            return state;
    }
};

export default reducer;
