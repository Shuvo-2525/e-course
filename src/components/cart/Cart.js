import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0 ;
    for (let i = 0; i  < cart.length; i++) {
        const element = cart[i];
        total = total + element.price;
        
    }
    return (
        <div>
           <center><h2><FontAwesomeIcon icon= {faShoppingCart} /> Your cart </h2></center>

            <h1> ordered course : {cart.length} </h1> 
            <h4> total price : {total}</h4>
        </div>
    );
};

export default Cart;