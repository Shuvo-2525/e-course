import React, { useState } from 'react';
import './Body.css';
import fakeData from '../../fakeData/fakedata';
import InnerBody from '../InnerBody/InnerBody';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';
import Cart from '../cart/Cart';








const Body = () => {
    const AllFakeData = fakeData ;
const [ crsName ] = useState(AllFakeData);
const [ cart , setCart ] = useState([]);

const addToCart = (crsName) => {
    console.log('course in cart' , crsName );
    const newCart = [...cart , crsName];
    setCart(newCart)
}


    return (
        <div className="bodyPart">
            <div className="row">
                
                <div className="col-8 right-part">
                <center><h2>Choose your favorite course</h2></center>
                <div className="courseBox">
                {
                    crsName.map(crsItem => <InnerBody 
                        addToCart = {addToCart}
                        crsName={crsItem}
                        ></InnerBody>)
                }
                </div>
                </div>
                <div className="col-4">

                    <Cart cart={cart}></Cart>
                

                </div>
            </div>
        </div>
    );
};

export default Body;