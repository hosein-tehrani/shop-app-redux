import { createContext, useContext, useEffect, useReducer } from "react";
import { sumProducts } from "../helper/helper";

const initialState = {
    selectedProducts: [],
    itemCounter: 0,
    total: 0,
    checkout: false
}
const reducer = (state , action) => {
    
    switch (action.type) {
        case "ADD_ITEM":
            state.selectedProducts.push({...action.payload, quantity: 1})
            return{
                ...state, 
                ...sumProducts(state.selectedProducts),
                checkout: false,
            }
        case "REMOVE_ITEM":
            const newSelected = state.selectedProducts.filter(item => item.id !== action.payload.id)

            return{
                ...state,
                selectedProducts: [...newSelected],
                ...sumProducts(newSelected)

            }
        case "INCREASE":
            const incIndex = state.selectedProducts.findIndex(item => item.id === action.payload.id)
            state.selectedProducts[incIndex].quantity++
            return{
                ...state,
                ...sumProducts(state.selectedProducts)
            }
        case "DECREASE":
            const decIndex = state.selectedProducts.findIndex(item => item.id === action.payload.id)
            state.selectedProducts[decIndex].quantity--
            return{
                ...state,
                ...sumProducts(state.selectedProducts)
            }
            case "CHECKOUT":
            return{
                selectedProducts: [],
                itemCounter: 0,
                total: 0,
                checkout: true                

            }

        default:
            throw new Error("action not defined!")
    }
}

const CartContext = createContext()

function CartProvider({children}) {
const [state,dispatch] = useReducer(reducer , initialState)    
  return (
    <CartContext.Provider value={{state,dispatch}}>
        {children}
    </CartContext.Provider>
  );
}
const useCart = () => {

    const result = useContext(CartContext)
    return result;
}
export default CartProvider;
export { useCart }