import React, { useLayoutEffect, useState } from 'react'
import { Table, Table2 } from '../checkout/CheckoutStyle';
import { AngleRightBtn, ButtonArranger, ButtonBeautiful, FirstInnerStyle, FirstInnerStyleH1, FirstInnerStyleHeaderBody, Small1, Small2, SvgCloud } from '../dashUtils/FirstInnerDashStyle'
import { StoreTable, StoreWrapper } from './MyStore';
import { api, apiHost } from '../../utils/Api'
import { useNavigate } from 'react-router-dom';

function MyStore({ setInnerBodyMode }) {
    const navigate = useNavigate()
    const handleAddProduct = () => {
        setInnerBodyMode("add-product")
    };
    const control = {
        width: "50px",
        height: "50px",
        padding: "5px",
    }
    const [products, setProducts] = useState([]);

    const headers = {
        Authorization: localStorage.getItem('x-access-store-user-allow-entry'),
    }

    const getAllProducts = async () => {
        const req = await fetch(`${api}/prod/display`, {
            headers,
        });
        const res = await req.json();
        if (req.ok) {
            setProducts(res.data);
        } else {
            console.log('An error occured');
        }
    }

    useLayoutEffect(() => {
        getAllProducts();
    }, []);
    return (
        <StoreWrapper>
            <FirstInnerStyle>
                <FirstInnerStyleHeaderBody>
                    <FirstInnerStyleH1>
                        My store
                    </FirstInnerStyleH1>
                    <ButtonArranger>
                        <Small1>My store</Small1>
                        <AngleRightBtn />
                        <Small2 onClick={() => navigate('/')}>Home</Small2>

                    </ButtonArranger>
                </FirstInnerStyleHeaderBody>
                <ButtonBeautiful onClick={() => handleAddProduct()}>
                    <SvgCloud />
                    <span>Add prdouct</span>
                </ButtonBeautiful>
            </FirstInnerStyle>
            <StoreTable>
                <Table>
                    <tbody>
                        <tr key="4" className="table-row-1">
                            <th className='item-x'>Item</th>
                            <th className='descr-x'>Description</th>
                            <th className='price-x'>Price</th>
                            <th className='discount-x'>Discount</th>
                            <th className='quantity-x'>Quantity</th>
                            <th className='total-x'>Total</th>

                        </tr>
                        {
                            products.map((i) => {
                                return (
                                    <tr key={i._id} className='table-row-2'>
                                        <td><img className='item-x-x' style={control} src={i.image} alt="" /></td>
                                        {/* <td><img className='item-x-x' style={control} src={`${apiHost}/${i.image}`} alt="" /></td> */}
                                        <td className='descr-x-x'>
                                            <h5>{i.name}</h5>
                                        </td>
                                        <td className='price-x-x'>
                                            <h5>#{Math.floor(i.price).toFixed(2)}</h5>
                                        </td>
                                        <td className='discount-x-x'>
                                            <h5>{i.discount}%</h5>
                                        </td>
                                        <td className='quantity-x-x'>
                                            <h5>{i.prodNum}</h5>
                                        </td>
                                        <td className='total-x-x'>
                                            <h5>#{Math.floor(i.newPrice * i.prodNum).toFixed(2)}</h5>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <Table2>
                    <tbody>
                        <tr key="4" className="table-row-1">
                            <th className='item-x'>Item</th>
                            <th className='descr-x'>Description</th>
                            <th className='price-x'>Price</th>
                            <th className='discount-x'>Discount</th>
                            <th className='quantity-x'>Quantity</th>
                            <th className='total-x'>Total</th>

                        </tr>
                        {
                            products.map((i) => {
                                return (
                                    <tr key={i._id} className='table-row-2'>
                                        <td><img className='item-x-x' style={control} src={i.image} alt="" /></td>
                                        {/* <td><img className='item-x-x' style={control} src={`${apiHost}/${i.image}`} alt="" /></td> */}
                                        <td className='descr-x-x'>
                                            <h5>{i.name}</h5>
                                        </td>
                                        <td className='price-x-x'>
                                            <h5>#{Math.floor(i.price).toFixed(2)}</h5>
                                        </td>
                                        <td className='discount-x-x'>
                                            <h5>{i.discount}%</h5>
                                        </td>
                                        <td className='quantity-x-x'>
                                            <h5>{i.prodNum}</h5>
                                        </td>
                                        <td className='total-x-x'>
                                            <h5>#{Math.floor(i.newPrice * i.prodNum).toFixed(2)}</h5>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table2>
            </StoreTable>
        </StoreWrapper>
    )
}

export default MyStore