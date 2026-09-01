import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ProductsProvider = (props) =>{
    const [login, setLogin] = useState(true)
    const [loginShow, setLoginShow] = useState(false);
    const [searchShow, setSearchShow] = useState(false);
    const [search, setSearch] = useState("");
    const currency = '₹';
    const delivery = 10;
    const value = {
        products,currency,delivery,loginShow, setLoginShow,searchShow, setSearchShow,search, setSearch,login, setLogin
    };
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};



export default ProductsProvider;