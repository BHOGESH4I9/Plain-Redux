import { type } from "@testing-library/user-event/dist/type";

export function deposit(amount) {
    return {type: "deposit", payload: amount};
}

export function withdraw(amount) {
    return {type: "withdraw", payload: amount};
}

export function nameUpdate(name) {
    return {type: "nameUpdate", payload:name};
}

export function mobileUpdate(number){
    return {type: "mobileUp", payload: number};
}

export function reset(){
    return {type: "reset"}
}