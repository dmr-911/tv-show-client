// add , remove, clear

export const add_to_cart = payload => {
    return {
        type: "add_to_cart",
        payload: payload
    }
};

export const remove_from_cart = id =>{
    return {
        type : "remove_from_cart",
        payload : id
    }
};

export const clear_cart = () =>{
    return {type : "clear_from_cart"}
};
