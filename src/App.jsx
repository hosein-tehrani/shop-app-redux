import { BrowserRouter , Routes , Route , Navigate } from "react-router-dom"
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/404";
import Products from "./pages/Products";
import DetailsPage from "./pages/DetailsPage";
import ProductProvider from "./context/ProductsContext";
import CartProvider from "./context/CartContext";
import Layout from "./components/Layout";



function App() {

  return (
    <>  
    <CartProvider>
      <ProductProvider>
          <Layout>
          <BrowserRouter>
            <Routes>
              <Route index element={<Navigate to="products" replace/>} />        
              <Route path="/products" element={<Products />} />        
              <Route path="/CheckoutPage" element={<CheckoutPage />} />
              <Route path="/product/:id" element={<DetailsPage />}/>        
              <Route path="*" element={<PageNotFound />}/>        
            </Routes>
          </BrowserRouter> 
          </Layout>
      </ProductProvider>
    </CartProvider>
    </>
  );
}

export default App;
