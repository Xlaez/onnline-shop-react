//eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import { ShowcaseContainer, Box } from './Showcase';
// import { data } from './data';
import { BsCartFill } from 'react-icons/bs'
import { apiHost } from '../../utils/Api';
import { useNavigate } from 'react-router-dom';

function Showcase({ products }) {
    const navigate = useNavigate();
    const handleViewProd = () => {
        navigate('/product');
    }
    const handleViewReady = (id) => {
        localStorage.setItem('x-user-store-view-single-prod', id);
    }
    return (
        <ShowcaseContainer>
            <div className="showcase">
                {
                    products.map((item) => {
                        return (
                            <Box key={item._id}>
                                <div className="showcase-item">
                                    <img src={item.image} alt="" />
                                    {/* <img src={`${apiHost}/${item.image}`} alt="" /> */}
                                    <div className="cart" >
                                        <button onClick={() => handleViewProd()} onMouseOver={() => handleViewReady(item._id)}> <BsCartFill /> View Product</button>
                                    </div>
                                </div>
                                <div className="other">
                                    <span>{item.name}</span>
                                    <small>#{item.price}</small>
                                </div>
                            </Box>
                        )
                    })
                }
            </div>
        </ShowcaseContainer>
    )
}

export default Showcase