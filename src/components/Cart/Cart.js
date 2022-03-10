import React from 'react';

const cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Item Ordered: {props.cart.length}</h3>
            <h3>Total price: {total}</h3>

        </div>
    );
};

export default cart;