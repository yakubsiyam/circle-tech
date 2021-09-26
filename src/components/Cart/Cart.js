import React from 'react';

const Cart = (props) => {

    // destructuring
    const {cart} = props;

    let total = 0;
    for(const people of cart){
        total = total + people.salary;
    }

    return (
        <div className="card p-2 ms-4 text-center shadow">
            <h5><span className = "text-danger">People Added:</span> {props.cart.length}</h5>
            <h5><span className = "text-danger">Total Salaries:</span> ${total}</h5>
            <ul className = "list-group md-5">
                {
                    cart.map((people, index) => <li key = {index} className = "list-group-item">{people.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;