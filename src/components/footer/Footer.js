import React, { useEffect, useState } from 'react'
import { FirstFooter, FootWrapper, FooterContainer, SecondFooter } from './Index'
import { BsArrowBarUp, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa'
import './footer.css'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../utils/Api'

function Footer() {
    //eslint-disable-next-line
    const navigate = useNavigate();
    const [ latestProducts, setLatestProducts ] = useState( [] );

    async function getlatestProducts() {
        const req = await fetch( `${api}/prod/latest` );
        if ( req.ok ) {
            const res = await req.json();
            setLatestProducts( res.data );
        } else {
            getlatestProducts();
        }
    }

    function handleViewSingleProd( id ) {
        localStorage.setItem( 'x-user-store-view-single-prod', id );
        navigate( '/product' );
    };

    useEffect( () => {
        getlatestProducts();
    }, [] );
    return (
        <FooterContainer>
            <FootWrapper>
                <FirstFooter>
                    <div className='about-sec'>
                        <strong>About Shopiffy</strong>
                        <p>Shopiffy is an online store which sells a lot of clothes, all gender and ages.</p>
                        <br />
                        <span>Phone: +234 7019107553</span>
                        <br />
                        <br />
                        <span>Phone2: +234 8068620412</span>
                        <span>Email: shopify@mail.com</span>
                    </div>
                    <div className='recent-sec'>
                        <strong>Recently Added</strong>
                        {
                            latestProducts.length > 0 && (
                                <ul>
                                    {
                                        latestProducts.map( ( i ) => {
                                            return (
                                                <li key={i._id} onClick={() => handleViewSingleProd( i._id )}><FaAngleDoubleRight /> {i.name} </li>
                                            )
                                        } )
                                    }
                                </ul>
                            )
                        }
                    </div>
                    <div className='category'>
                        <strong>Categories</strong>
                        <ul>
                            <li><FaAngleRight /> Women wears</li>
                            <li><FaAngleRight /> Men wears</li>
                            <li><FaAngleRight /> Children wears</li>
                        </ul>
                    </div>
                    <div className='rated'>
                        <strong>Most bought</strong>
                        <ul>
                            <li>Varrati Balansiaga</li>
                            <li>Varrati Balansiaga</li>
                        </ul>
                    </div>
                </FirstFooter>
                <SecondFooter>
                    <div>
                        <span> &copy; 2022 Shoppify, All Rights Reserved </span>
                    </div>
                    <div>
                        <ul>
                            <li> <Link to="https://facebook.com">
                                <BsFacebook /></Link> </li>
                            <li> <Link to="https://twitter.com">
                                <BsTwitter /></Link></li>
                            <li> <Link to="https://instagram.com">
                                <BsInstagram /></Link></li>
                        </ul>
                        <div className='svg'>
                            <a href="#totop">
                                <BsArrowBarUp />
                            </a>
                        </div>
                    </div>
                </SecondFooter>
            </FootWrapper>
        </FooterContainer>
    )
}

export default Footer