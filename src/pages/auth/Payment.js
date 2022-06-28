import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { api } from '../../utils/Api';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3'

//redirect_url

export default function Payment() {
    const navigate = useNavigate();
    const [ invoiceId, setInvoiceId ] = useState( null );
    useEffect( () => {
        const id = localStorage.getItem( 'x-user-cart-process-order-id' );
        if ( id ) {
            setInvoiceId( id );
        } else {
            navigate( '/checkout' );
        }

    }, [] );

    const config = {
        public_key: 'FLWPUBK_TEST-cee46f6f5e4ee433318ecbdf34ef997d-X',
        tx_ref: Date.now(),
        amount: 100,
        currency: 'NGN',
        payment_options: 'card',
        customer: {
            email: 'user@gmail.com',
            phonenumber: '07064586146',
            name: 'joel ugwumadu',
        }
    }
    const fwConfig = {
        ...config,
        callback: ( response ) => {
            console.log( response );
            closePaymentModal();
        },
        onClose: () => { },
    }
    return (
        <Container>
            <PaymentForm>
                <strong>Payment details</strong>
                <FormInvoiceLink href={`${api}/prod/invoice/${invoiceId}`}>get invoice</FormInvoiceLink>
                <FormEl>
                    <FormElLabel >Fullname</FormElLabel>
                    <FormElInput type="text" value="Jessica Mercy" name='fullname' id='fullname' readOnly />
                </FormEl>
                <FormEl>
                    <FormElLabel >Email</FormElLabel>
                    <FormElInput type="email" value="jessica@gmail.com" name='email' id='email' readOnly />
                </FormEl>
                <FormEl>
                    <FormElLabel >Mobile</FormElLabel>
                    <FormElInput type="tel" value="07019107553" readOnly name='mobile' id='mobile' />
                </FormEl>
                <FormElHalf>
                    <FormEl>
                        <FormElLabel >Card Number</FormElLabel>
                        <FormElInput type="text" maxLength={10} name='card_number' id='cardNumber' />
                    </FormEl>
                    <FormEl>
                        <FormElLabel >Amount (#)</FormElLabel>
                        <FormElInput type="text" value="36 000" name='amount' id='amount' />
                    </FormEl>
                </FormElHalf>
                <FormElHalf2>
                    <FormEl>
                        <FormElLabel >Expiry Year</FormElLabel>
                        <FormElSelect name="expiry_year" id='expiryYear'>
                            <option value="2022" key="1">2022</option>
                            <option value="2023" key="2">2023</option>
                            <option value="2024" key="3">2024</option>
                            <option value="2025" key="4">2025</option>
                            <option value="2026" key="5">2026</option>
                        </FormElSelect>
                    </FormEl>
                    <FormEl>
                        <FormElLabel >Expiry Month</FormElLabel>
                        <FormElSelect id="expiryMonth" name="expiry_month">
                            <option value="january" key="0">JAN</option>
                            <option value="februrary" key="1">FEB</option>
                            <option value="march" key="2">MAR</option>
                            <option value="april" key="3">APR</option>
                            <option value="may" key="4">MAY</option>
                            <option value="june" key="5">JUN</option>
                            <option value="july" key="6">JUL</option>
                            <option value="august" key="17">AUG</option>
                            <option value="september" key="7">SEP</option>
                            <option value="october" key="8">OCT</option>
                            <option value="november" key="9">NOV</option>
                            <option value="december" key="11">DEC</option>
                        </FormElSelect>
                    </FormEl>
                    <FormEl>
                        <FormElLabel >Cvv</FormElLabel>
                        <FormElInput type="text" maxLength={3} name='cvv' id='cvv' />
                    </FormEl>
                </FormElHalf2>
                <FormBtn>procced</FormBtn>
            </PaymentForm>
            <a className='invoice-link' href={`${api}/prod/invoice/${invoiceId}`}>get invoice</a>
        </Container>
    )
};

const Container = styled.div`
background:#fff;
height:100vh;
width:100vw;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
.invoice-link{
    display:none;
}
@media(max-width:440px){
    .invoice-link{
        display:block;
    }
}
`;

const PaymentForm = styled.div`
background:#093c66;
border-radius:5px;
border:1px solid #093c66;
color:#fff;
font-family: 'Overlock', cursive;
display:flex;
flex-direction:column;
gap:0.8rem;
width:500px;
padding:2rem 1.4rem;
strong{
    font-size:1.3rem;
    color:#f4f4f4;
    padding-bottom:0.3rem;
    padding-top:1rem;
    font-family: 'Nunito', sans-serif;
    text-transform:uppercase;
}
@media(max-width:440px){
    width:90vw;
    overflow:auto;
    border-radius:0;
    strong{
        padding-bottom:1.5rem;
    }
    
}
`;

const FormInvoiceLink = styled.a`
color:yellow;
text-decoration:none;
padding-bottom:1.4rem;
@media(max-width:440px){
    display:none;
}
`

const FormElInput = styled.input`
width:100%;
height:30px;
border:1px solid transparent;
border-bottom:1px solid #fff;
background:transparent;
color:#888;
padding-left:0.1rem;
&:focus{
    outline:none;
}
`;

const FormElSelect = styled.select`
width:100%;
height:30px;
border:1px solid transparent;
border-bottom:1px solid #fff;
background:transparent;
color:#888;
padding-left:0.1rem;
&:focus{
    outline:none;
}
option{
    background:#fff;
    color:#3a8bcd;
}
`;

const FormElLabel = styled.label`
color:#ccc;
padding-bottom:0.3rem;
`;

const FormEl = styled.div`
display:flex;
flex-direction:column;
padding-bottom:1rem;
`;

const FormElHalf = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
grid-gap:1rem;
`;
const FormElHalf2 = styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
grid-gap:1rem;
padding-bottom:1rem;
`;

const FormBtn = styled.button`
background:#3a8bcd;
color:#fff;
border-radius:1px;
padding:20px;
width:100%;
text-transform:uppercase;
font-family: 'Nunito', sans-serif;
border:1px solid transparent;
transition:all 1s ease-out;
cursor:pointer;
&:hover{
    background:#093c66;
}

`