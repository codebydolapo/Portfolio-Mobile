export const activateHamburger = () => {
    return { type: "HAMBURGER_ACTIVE" }
}

export const deactivateHamburger = () => {
    return { type: "HAMBURGER_INACTIVE" }
}

export const addConnectedAddress = (address: string)=>{
    return {type: "CONNECT_ADDRESS", connectedAddress: address}
}

export const removeConnectedAddress = ()=>{
    return {type: "CONNECT_ADDRESS", connectedAddress: ""}
}

