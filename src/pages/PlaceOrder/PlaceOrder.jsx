import React, { useContext, useState } from 'react';
import './PlaceOrder.css';  
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom'; // Needed for navigation to payment page

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext);
    const [tableNo, setTableNo] = useState(""); // Manage table number
    const navigate = useNavigate(); // To redirect to payment page

    const handleEsewaClick = () => {
        if (!tableNo) {
            alert("Please select a table number before proceeding.");
            return;
        }
        navigate("/payment"); // Navigate only if valid
    };

    return (
        <form className='place-order'> 
            <div className="place-order-left"> 
                {/* Table Selection - Required */}
                <div className="table-selection">
                    <label htmlFor="tableNo">Table No.</label>
                    <select 
                        id="tableNo" 
                        name="tableNo" 
                        value={tableNo} 
                        onChange={(e) => setTableNo(e.target.value)} 
                        required
                    >
                        <option value="" disabled hidden>Select Table</option>
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

                    {/* Payment Buttons */}
                    <button type="button" className="pay-cash">PAY WITH CASH</button>
                    <button 
                        type="button" 
                        className="pay-esewa" 
                        onClick={handleEsewaClick}
                    >
                        PAY WITH Esewa
                    </button>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;
