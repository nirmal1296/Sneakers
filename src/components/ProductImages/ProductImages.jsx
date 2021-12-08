import './ProductImages.css'
import displayProductFrontImage from '../images/image-product-1.jpg'
import productFrontImage from '../images/image-product-1-thumbnail.jpg'
import productBackImage from '../images/image-product-2-thumbnail.jpg'
import productLeftImage from '../images/image-product-3-thumbnail.jpg'
import productRightImage from '../images/image-product-4-thumbnail.jpg'

function ProductImages(){
    return(
        <div className="product-images">
            <div className="display-image">
                <span><img className="display-product-image" src={displayProductFrontImage} alt="" /></span>
            </div>
            <div className="product-small-images">
                <span><img className="product-image" src={productFrontImage} alt="" /></span>
                <span><img className="product-image" src={productBackImage} alt="" /></span>
                <span><img className="product-image" src={productLeftImage} alt="" /></span>
                <span><img className="product-image" src={productRightImage} alt="" /></span>
            </div>
        </div>
    )
}

export default ProductImages