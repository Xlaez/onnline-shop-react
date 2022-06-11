import React from 'react'
import { Table } from '../checkout/CheckoutStyle';
import { AngleRightBtn, ButtonArranger, ButtonBeautiful, FirstInnerStyle, FirstInnerStyleH1, FirstInnerStyleHeaderBody, Small1, Small2, SvgCloud } from '../dashUtils/FirstInnerDashStyle'
import { data } from '../showcase/data';
import { StoreTable, StoreWrapper } from './MyStore';

function MyStore( { setInnerBodyMode, setMode } ) {
    const handleAddProduct = () => {
        setInnerBodyMode( "add-product" )
    };
    const control = {
        width: "50px",
        height: "50px",
        padding: "5px",
    }
    const newData = [ ...data ]
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
                        <Small2 onClick={() => setMode( 'home' )}>Home</Small2>

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
                            newData.map( ( i ) => {
                                return (
                                    <tr key="6" className='table-row-2'>
                                        <td><img className='item-x-x' style={control} src={i.image} alt="" /></td>
                                        <td className='descr-x-x'>
                                            <h5>{i.name}</h5>
                                        </td>
                                        <td className='price-x-x'>
                                            <h5>{i.price}</h5>
                                        </td>
                                        <td className='discount-x-x'>
                                            <h5>2%</h5>
                                        </td>
                                        <td className='quantity-x-x'>
                                            <h5>2</h5>
                                        </td>
                                        <td className='total-x-x'>
                                            <h5>#1 800</h5>
                                        </td>

                                    </tr>
                                )
                            } )
                        }
                    </tbody>
                </Table>
            </StoreTable>
        </StoreWrapper>
    )
}

export default MyStore