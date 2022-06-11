import React, { useState, useEffect, Fragment } from 'react'
import { FaTimes } from 'react-icons/fa'
import { api, apiHost } from '../../utils/Api'
import { CheckoutWrapper, Heading, Table, Table2 } from './CheckoutStyle'
import Secondary from './Secondary'
import { useNavigate } from 'react-router-dom'

function CheckoutPage() {
    const naviagte = useNavigate();
    const control = {
        width: "50px",
        height: "50px",
        padding: "5px",
    }


    const [ cart, setCart ] = useState( [] );
    const [ total, setTotal ] = useState( [] );
    const token = localStorage.getItem( 'x-access-store-user-allow-entry' );
    const headers = {
        Authorization: token,
    };

    async function getCart() {
        const req = await fetch( `${api}/prod/get`, {
            headers,
        } );
        const res = await req.json();
        if ( req.status === 403 ) {
            naviagte( '/login' );
        } else if ( req.status === 400 ) {
            console.log( 'error' );
        } else {
            if ( req.ok ) {
                setCart( res.data );
            }
        }
    };

    async function handleRemoveFromCart( id ) {
        const body = new FormData();
        body.append( 'productId', id );
        const req = await fetch( `${api}/prod/remove`, {
            method: 'POST',
            headers,
            body,
        } );
        if ( !req.ok ) {
            console.log( 'erorr' )
        } else {
            getCart();
        }
    };

    useEffect( () => {
        getCart();
    }, [], [ cart ] );

    useEffect( () => {
        var emptyArray = [];
        cart.forEach( i => {
            emptyArray.push( Math.floor( i.productId.newPrice * i.quantity ).toFixed( 2 ) )
        } );
        setTotal( emptyArray )
    }, [ cart ] );

    return (
        <Fragment>
            {
                cart.length > 0 && (
                    <main className='main-control'>
                        <Heading>Checkout</Heading>
                        <CheckoutWrapper>
                            <Table>
                                <tbody>
                                    <tr key="01" className='table-row-1'>
                                        <th className='item-x'>Item</th>
                                        <th className='descr-x'>Description</th>
                                        <th className='price-x'>Price</th>
                                        <th className='discount-x'>Discount</th>
                                        <th className='quantity-x'>Quantity</th>
                                        <th className='total-x'>Total</th>
                                        <th className='remove-x'>Remove</th>
                                    </tr>
                                    {
                                        cart.map( ( i ) => {
                                            return (
                                                <tr key={i.productId._id} className='table-row-2'>
                                                    {/* <td><img className='item-x-x' style={control} src={i.productId.image} alt="" /></td> */}
                                                    <td><img className='item-x-x' style={control} src={`${apiHost}/${i.productId.image}`} alt="" /></td>
                                                    <td className='descr-x-x'>
                                                        <h5>{i.productId.name}</h5>
                                                    </td>
                                                    <td className='price-x-x'>
                                                        <h5>#{i.productId.price}</h5>
                                                    </td>
                                                    <td className='discount-x-x'>
                                                        <h5>{i.productId.discount}%</h5>
                                                    </td>
                                                    <td className='quantity-x-x'>
                                                        <h5>{i.quantity}</h5>
                                                    </td>
                                                    <td className='total-x-x'>
                                                        <h5>#{Math.floor( i.productId.newPrice * i.quantity ).toFixed( 2 )}</h5>
                                                    </td>
                                                    <td className='remove-x-x' onClick={() => handleRemoveFromCart( i.productId._id )}>
                                                        <FaTimes />
                                                    </td>
                                                </tr>
                                            )
                                        } )
                                    }
                                </tbody>
                            </Table>
                            <Table2>
                                <tbody>
                                    <tr key="1" className='table-row-1'>
                                        <th className='descr-x'>Description</th>
                                        <th className='price-x'>Price</th>
                                        <th className='quantity-x'>Quantity</th>
                                        <th className='total-x'>Total</th>
                                        <th className='remove-x'>Remove</th>
                                    </tr>
                                    {
                                        cart.map( ( i ) => {
                                            return (
                                                <tr key={i.productId._id} className='table-row-2'>

                                                    <td className='descr-x-x'>
                                                        <h5>{i.productId.name}</h5>
                                                    </td>
                                                    <td className='price-x-x'>
                                                        <h5>#{i.productId.newPrice}</h5>
                                                    </td>

                                                    <td className='quantity-x-x'>
                                                        <h5>{i.quantity}</h5>
                                                    </td>
                                                    <td className='total-x-x'>
                                                        <h5>#{Math.floor( i.productId.newPrice * i.quantity ).toFixed( 2 )}</h5>
                                                    </td>
                                                    <td className='remove-x-x' onClick={() => handleRemoveFromCart( i.productId._id )}>
                                                        <FaTimes />
                                                    </td>
                                                </tr>
                                            )
                                        } )
                                    }
                                </tbody>
                            </Table2>
                        </CheckoutWrapper>
                        <Secondary total={total} headers={headers} naviagte={naviagte} />
                    </main>
                )
            }
        </Fragment>
    )
}

export default CheckoutPage