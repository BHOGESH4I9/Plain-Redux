import { combineReducers, createStore } from "redux";

const accountDetails = {
    name : "Bhogesh",
    mobile : 9874102563,
    accountNumber : "DWSDD841257952SWW",
    balance : 0
}

function accountReducer(state = accountDetails, action) {
    switch(action.type) {
        case "deposit":
            return {...state, balance: state.balance + +action.payload};
        case "nameUpdate":
            return {...state, name: action.payload};
        case "mobileUp":
            return {...state, mobile: action.payload};
        case "withdraw":
            return {...state, balance: state.balance - +action.payload};
        case "reset":
            return accountDetails;
        default:
            return state;
    }
    
}


function transactionReducer(state=[], action) {
    switch (action.type){
        case "ADD_TRANSACTION":
            return [
                ...state,
                {
                    id: action.payload.id,
                    amount: action.payload.amount,
                    balance : action.payload.balance,
                    type: action.payload.type,
                    date: action.payload.date
                }
            ]
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    account: accountReducer,
    transactions: transactionReducer
})

const store =  createStore(rootReducer);

export default store;