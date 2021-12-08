
import './App.css';
import react, { useState }  from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductDescription from './components/ProductDescription/ProductDescription';
import ProductImages from './components/ProductImages/ProductImages';


const mode = {

  INITIALCART:"INITIAL CART",
  CART:"CART",
  DELETECART:"DELETE CART"
}
function App() {
  const [cartQuantity,setCartQuantity] = useState()
  const [productPrice,setProductPrice] = useState(0)
  const[deleteItems,setDeleteItems] = useState(false)
  const[cartMode,setCartMode] = useState(mode.INITIALCART)


  function CartQuantityHandler(qty){
    setCartQuantity(qty)
    setCartMode(mode.CART)
  }

  function ProductPriceHandler(cost){
    setProductPrice(cost)
    setCartMode(mode.CART)
  }

  const deleteHandler = ()=>{
      setDeleteItems(true)
      setCartMode(mode.DELETECART)
    }

  return (
    <div className="App">
      <Navbar cartQuantity={cartQuantity} productPrice={productPrice} deleteHandler={deleteHandler} cartMode={cartMode} />
    <div className="main">
        <ProductImages className="product-images"/>
        <ProductDescription productPriceHandler={ProductPriceHandler}cartQuantityHandler={CartQuantityHandler}className="content"/>
    </div>
    </div>
  );
}

export default App;
