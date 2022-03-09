import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className='product-name'>{name}</h2>
                <h3>by: {seller}</h3>
                <h3>Price: {price}</h3>
                <p><small>only {stock} left in stoct - order soon</small></p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className='btn-regular'>Add to cart
                </button>

            </div>

        </div>
    );
};

export default Product;