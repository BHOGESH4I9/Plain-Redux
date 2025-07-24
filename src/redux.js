import { type } from "@testing-library/user-event/dist/type";
import { act, Children } from "react";
import { createStore } from "redux";

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
        default:
            return state;
    }
    
}


const redux =  createStore(accountReducer);

export default redux;