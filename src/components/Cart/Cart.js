import React from 'react';

const Cart = (props) => {

    // destructuring
    const {cart} = props;

    let total = 0;
    for(const people of cart){
        total = total + people.salary;
    }

    return (
        <div className="card p-2 ms-4 text-center">
            <h5><span className = "text-danger">People Added</span> {props.cart.length}</h5>
            <h5><span className = "text-danger">Total:</span> {total}</h5>
            <p>{props.cart.name}</p>
        </div>
    );
};

export default Cart;