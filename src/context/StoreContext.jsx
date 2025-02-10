import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
import './Alert.css'
import { Link } from "react-router-dom";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [alertMessage, setAlertMessage] = useState("");


    const addAlert = (message) => {
        setAlertMessage(message);
        setTimeout(() => setAlertMessage(""), 5000, 5000);
    };

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        addAlert(`Item added to cart!`);
    };

    const removeFromCart = (itemId) => {
        if (cartItems[itemId] > 1) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        } else {
            const updatedCart = { ...cartItems };
            delete updatedCart[itemId];
            setCartItems(updatedCart);
        }
        addAlert(`Item removed from cart!`);
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        addAlert, // Provide addAlert in context
        alertMessage, // Provide alert message state
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
            {alertMessage && <div className="alert-popup">{alertMessage}<Link to='/cart'> <span className="alert-popup-click-here">Click here</span> </Link></div>}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
