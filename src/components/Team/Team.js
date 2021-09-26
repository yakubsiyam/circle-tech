import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Peoples from '../Peoples/Peoples';

const Team = () => {
    const [teams, setTeams] = useState([]);
    const [cart, setCart] = useState([]);

    // fake data load
    useEffect((() =>{
        fetch('./people.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }),[]);

    // cart handler
    const handleAddToCart = people =>{
        const newCart = [...cart, people];
        setCart(newCart);
    }

    return (

        <div className = "d-flex container-fluid mb-3">
            <div className = "col-md-9">
                <div className = "row row-cols-1 row-cols-md-2 g-4">
                {/* card data call */}
                    {
                        teams.map(people => <Peoples
                            key = {people.id}
                            people={people}
                            handleAddToCart = {handleAddToCart}
                        ></Peoples>)
                    }
                </div>
            </div>

            <div className = "col-md-3">
                
                {/* cart data call */}
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Team;