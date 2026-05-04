import { useSelector } from "react-redux";


function Layout({children}) { 
    const state = useSelector(store => store.cart)
     
  return (
    <>    
    <header>
        {state.itemCounter} - {state.total} $ 
        <p>{state.selectedProducts.length}</p>
    </header>
        {children}
    <footer>made by love</footer>
    </>
  );
}

export default Layout;
