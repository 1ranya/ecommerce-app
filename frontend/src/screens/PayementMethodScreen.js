import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import { Checkoutsteps } from '../components/CheckoutSteps'

export function Payementmethodscreen(props) {
    const [ paymentMethod, setPaymentMethod ] = useState('PayPal');
    const dispatch = useDispatch();

    const cart = useSelector((state)=> state.cart)
    const { shippingAddress } = cart
    if(!shippingAddress.address){
        props.history.push('/shipping')
    }
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    }
    return (
    <div>
        <Checkoutsteps step1 step2 step3></Checkoutsteps>
        <form className="form" onSubmit={submitHandler}>
            <div>
                <h1> Payment </h1>
            </div>
            <div>
                <div>
                    <input 
                        type="radio" 
                        id="paypal" 
                        value="PayPal"
                        name="paymentMethod"
                        onChange={(e)=>setPaymentMethod(e.target.value)}
                        checked 
                        required/>
                    <label htmlFor="paypal">PayPal</label>
                </div>
            </div>
            <div>
                <div>
                    <input 
                        type="radio" 
                        id="stripe" 
                        value="Stripe" 
                        name="paymentMethod"
                        onChange={(e)=>setPaymentMethod(e.target.value)}
                        required/>
                    <label htmlFor="stripe">Stripe</label>
                </div>
            </div>
            <div>
                <label/>
                <button className="primary" type="submit">Continue</button>
            </div>
        </form>
    </div>
    )
}
