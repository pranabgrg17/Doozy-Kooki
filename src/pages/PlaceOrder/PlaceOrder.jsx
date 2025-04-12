import React, { useContext } from 'react';
import './PlaceOrder.css';  
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext);

    return (
        <form className='place-order'> 
            <div className="place-order-left">
                <p className="title">Customer Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder='Full name' />
                    
                </div>
                <div className="table-selection">
                    <label htmlFor="tableNo">Table No.</label>
                    <select id="tableNo">
                        <option value="" disabled>Select Table</option>
                        <option value="1">Table 1</option>
                        <option value="2">Table 2</option>
                        <option value="3">Table 3</option>
                        
                    </select>
                </div>
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div className="cart-total-details">
                        <b>Total</b>
                        <b>रु{getTotalCartAmount()}</b>
                    </div>
                    <button type="button" className="pay-cash">PAY WITH CASH</button>
                    <button type="button" className="pay-esewa">PAY WITH Esewa</button>
                    <button type="submit">PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;