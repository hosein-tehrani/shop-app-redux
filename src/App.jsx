import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/404";
import Products from "./pages/Products";
import DetailsPage from "./pages/DetailsPage";
import ProductProvider from "./context/ProductsContext";
import CartProvider from "./context/CartContext";
import Layout from "./layout/Layout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <CartProvider>
        <ProductProvider>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route index element={<Navigate to="products" replace />} />
                <Route path="/products" element={<Products />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/product/:id" element={<DetailsPage />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
              <Toaster />
            </Layout>
          </BrowserRouter>
        </ProductProvider>
      </CartProvider>
    </>
  );
}

export default App;
