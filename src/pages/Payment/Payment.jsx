import React, { useContext } from 'react';
import './Payment.css';
import { v4 as uuidv4 } from 'uuid';
import CryptoJS from "crypto-js";
import { useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Payment = () => {
    const { getTotalCartAmount } = useContext(StoreContext);
    const transaction_uuid = uuidv4();
    const total_amount = getTotalCartAmount();
    const amount = total_amount - 0; // assuming no tax for now
    const message = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;
    const hash = CryptoJS.HmacSHA256(message, "8gBm/:&EnhH.1/q");
    const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

    return (
        <div className="payment-container">
            <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
                <input type="text" name="amount" value={amount} required  />
                <input type="text" name="tax_amount" value="0" required readOnly />
                <input type="text" name="total_amount" value={total_amount} required  />
                <input type="text" name="transaction_uuid" value={transaction_uuid} required  />
                <input type="text" name="product_code" value="EPAYTEST" required  />
                <input type="text" name="product_service_charge" value="0" required  />
                <input type="text" name="product_delivery_charge" value="0" required  />
                <input type="text" name="success_url" value="http://localhost:5173/success" required  />
                <input type="text" name="failure_url" value="http://localhost:5173/failure" required  />
                <input type="text" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required  />
                <input type="text" name="signature" value={hashInBase64} required  />
                <input type="submit" value="Pay with eSewa" />
            </form>
        </div>
    );
};

export default Payment;
