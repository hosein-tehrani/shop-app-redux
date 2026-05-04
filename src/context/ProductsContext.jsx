import { createContext, useContext, useEffect, useState } from "react";
import api from "../servises/config";
import { productData } from "./productData";

const ProductContext = createContext()

function ProductProvider({children}) {
    const [products , setProducts] = useState([])
    useEffect(()=>{
        
        const fetchPruducts = async () => {
            await setTimeout(() => {
                setProducts(productData)
            }, 1000);
            // try {
                
                // setProducts(await api.get(""))            
            // } catch (error) {
                // console.log(error);
            // }
        }
        fetchPruducts()
    },[])
  return (
    <ProductContext.Provider value={products}>
        {children}
    </ProductContext.Provider>
  );
}
const useProducts = () => {
    return useContext(ProductContext)
}
export default ProductProvider;
export { useProducts }