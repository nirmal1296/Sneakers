import './Navbar.css'

import logo from "../images/logo.svg"
import cart from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"
import productImage from "../images/image-product-1-thumbnail.jpg"
import deleteButton from "../images/icon-delete.svg"



function Navbar(props){


    const{cartQuantity,productPrice,deleteHandler,cartMode} = props

    const totalPrice = (qty,price)=>{
        return qty*price
    }

     return(
        <div className="navbar">
            <img className="logo" src={logo}alt="" />
            <div className="navbar-items">
                <div className="navbar-item"><a href="##">Collections</a> </div>
                <div className="navbar-item"><a href="##">Men</a> </div>
                <div className="navbar-item"><a href="##">Women</a></div>
                <div className="navbar-item"><a href="##"> About</a></div>
                <div className="navbar-item"><a href="##">Contact</a></div>
            </div>
            <div className="avatar-cart">
                <div className="dropdown">
                    {cartMode==="CART"&&<span>{cartQuantity}</span>}
                    <button className="cart-icon-btn"><img className="cart-icon dropbtn" src={cart} alt="" /></button>
                    <div className="dropdown-content">
                        <h4>CART <br/></h4>

                        {cartMode==="INITIAL CART" && <span>Your Cart is Empty</span>}

                        {cartMode==="CART"&&
                            <>
                            {cartQuantity===0?<span>Add items in cart</span>
                            :<>
                            <div className="cart-contents">
                                <img className='cart-product-image' src={productImage} alt="" />
                                <div className="product-details">
                                    <span>Fall limited Edition Sneakers</span>
                                    <span>{productPrice}x{cartQuantity}={totalPrice(productPrice,cartQuantity)}</span>
                                </div>
                                <button onClick={()=>{deleteHandler()}} className="delete-button"><img src={deleteButton} alt="" /></button>
                            </div>
                            <button className="checkout-button">checkout</button>
                             </> }
                             </> }
                        {cartMode === "DELETE CART"&&<span>The Cart is Empty</span>}

                      

                    </div>
                    </div>
                    <div><img className="avatar" src={avatar} alt="" /></div>
            </div>
            <br />
        </div>
     )

}

export default Navbar