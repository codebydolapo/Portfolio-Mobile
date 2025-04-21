import { isAddress } from "ethers/lib/utils";
import { combineReducers } from "redux";

const hamburgerState = (state = false, action: {type: string})=>{
    switch(action.type){
        case "HAMBURGER_ACTIVE":
            return state= true;
        case "HAMBURGER_INACTIVE":
            return state=false;
        default:
            return false
    }
}

const connectedAddress = (state = "", action:{type: string, connectedAddress: string}) =>{
    switch(action.type){
        case "CONNECT_ADDRESS":
            return action.connectedAddress;
        case "DISCONNECT_ADDRESS":
            return ""
        default:
            return ""
    }
}


export const allReducers = combineReducers({
    hamburgerState,
})