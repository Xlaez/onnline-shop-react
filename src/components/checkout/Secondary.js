import React, { useEffect, useState } from 'react'
import { api } from '../../utils/Api';
import { CartTotal } from './CheckoutStyle'

function Secondary( { total, headers } ) {
    const [ subTotal, setSubTotal ] = useState( 0 );

    useEffect( () => {
        total.forEach( i => {
            var commultativeSum = +i + +i;
            setSubTotal( commultativeSum );
        } );
    }, [ total ] );

    async function handleOrder() {
        const req = await fetch( `${api}/prod/orders`, {
            method: "POST",
            headers,
        } );
        const res = await req.json();
        if ( req.ok ) {
            localStorage.setItem( 'x-user-cart-process-order-id', res.data._id );

        } else {
            console.log( 'error' );
        }
    };
    return (
        <CartTotal>
            <h4>Cart totals</h4>
            <table>
                <tbody>
                    <tr key="1">
                        <th className='stand1'>Cart Subtotal :</th>
                        <td>#{subTotal.toFixed( 2 )}</td>
                    </tr>
                    <tr key="2">
                        <th className='stand1'>VAT :</th>
                        <td>#40.00</td>
                    </tr>
                    <tr className='total-price' key="3">
                        <th>Total :</th>
                        <td>#{Math.floor( subTotal + 40.00 ).toFixed( 2 )}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => handleOrder()}>PROCEES to payment</button>
        </CartTotal>
    )
}

export default Secondary