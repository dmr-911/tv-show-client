// action => add to cart
// action type ?
// add to cart => state modify
// reducer returns the modified final state

import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./types";


// dispatcher => dispatch -> {type : 'add_to_cart', payload/data : }

const cartReducer = (initialState = [], action) =>{
    switch(action.type){
        case ADD_TO_CART :
        return [
            ...initialState,
            action.payload
        ];

        case REMOVE_FROM_CART : 
        return initialState.filter((item)=> item.id !== action.payload.id);

        case CLEAR_CART :
        return [];

        default :
        return initialState;
    }
};

export default cartReducer;