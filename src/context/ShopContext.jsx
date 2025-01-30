import React, { Children } from 'react';
import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;


    const value = {
        products, currency, delivery_fee
    }
    return (
        <ShopContext.Provider value={value}>
            {props.Children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;