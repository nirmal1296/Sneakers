import './ProductDescription.css'

import minus from "../images/icon-minus.svg"
import plus from "../images/icon-plus.svg"
import cart from "../images/icon-cart.svg"
import { useState } from 'react'

function ProductDescription(props){

    const price = 125

    const{cartQuantityHandler,productPriceHandler}=props

    const [quantity, setQuantity] = useState(0)

    function RemoveQuantity(num){
        if(num!==0){
            num-=1;
            setQuantity(num)
        } 
    }

    function AddQuantity(num){
        num+=1;
        setQuantity(num)
    }

    return(
        <div className="product-description">
            <span>SNEAKER COMPANY</span>
            <span><h1>FALL LIMITED EDITION SNEAKERS</h1></span>
            <span>These low profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole,they'll withstand everything the weather can offer</span>
            <div className="price">
                <h2>${price}.00</h2>
                <p className="discount">50%</p>
            </div>
            <span className="price-strike">$250.00</span>
            <div className="qty">
                <div className="qty-bar">
                <span className="minus"><button onClick={()=>{RemoveQuantity(quantity)}} className="minus-button"><img src={minus} alt="" /></button></span>
                    <p>{quantity}</p>
                    <span className="plus"><button onClick={()=>{AddQuantity(quantity)}} className="plus-button"><img className="plus" src={plus} alt="" /></button></span>
                </div>
                 <button onClick={()=>{cartQuantityHandler(quantity);productPriceHandler(price)}} className="add-to-cart">
                        <img className="cart" src={cart} alt="" />
                        <p>Add to cart</p>
                </button>
            </div>
            

        </div>
    )

}

export default ProductDescription