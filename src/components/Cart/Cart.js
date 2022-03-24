import React from 'react';

const cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = total * 0.1;
    const grandTotal = total + shipping + tax;



    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Item Ordered: {props.cart.length}</h3>
            <h3>Total price: {total}</h3>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <h2>Grand Total: {grandTotal}</h2>


        </div>
    );
};

export default cart;