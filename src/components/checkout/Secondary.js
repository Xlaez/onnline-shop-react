import React, { useLayoutEffect, useState } from 'react'
import { api } from '../../utils/Api';
import { CartTotal } from './CheckoutStyle'
import { useNavigate } from 'react-router-dom'

function Secondary({ total, headers }) {
    const [subTotal, setSubTotal] = useState(0);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        var num = 0;
        for (let i = 0; i < total.length; i++) {
            num += + +total[i];
        }
        if (num > 0) {
            setSubTotal(num);
        }
    }, [total]);



    async function handleOrder() {
        const req = await fetch(`${api}/prod/orders`, {
            method: "POST",
            headers,
        });
        const res = await req.json();
        if (req.ok) {
            localStorage.setItem('x-user-cart-process-order-id', res.data._id);
            navigate('/payment');

        } else {
            console.log('error');
        }
    };
    // const handleViewInvoice = () => {
    //     fetch( `http://0.0.0.0:1818/api/prod/invoice/62aaef5d44ce3e54c67f1531`, {
    //         headers,
    //     } );
    // }
    return (
        <CartTotal>
            <h4>Cart totals</h4>
            <table>
                <tbody>
                    <tr key="1">
                        <th className='stand1'>Cart Subtotal :</th>
                        <td>#{subTotal.toFixed(2)}</td>
                    </tr>
                    <tr key="2">
                        <th className='stand1'>VAT :</th>
                        <td>#40.00</td>
                    </tr>
                    <tr className='total-price' key="3">
                        <th>Total :</th>
                        <td>#{Math.floor(subTotal + 40.00).toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => handleOrder()}>PROCEES to payment</button>
        </CartTotal>
    )
}

export default Secondary