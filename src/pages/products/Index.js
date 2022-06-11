/* eslint-disable */
import React, { Fragment, useEffect, useState } from 'react'
import CategorySort from '../../components/category/Index';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/Index';
import Navbar from '../../components/navbar/Index'
import Showcase from '../../components/showcase/Index';
import Sidebar from '../../components/sidebar/Index'
import { api } from '../../utils/Api';
import { ButtonNavNext, ButtonNavPrev, NavButton, NavigateButtons, ProductsWrapper } from './Products'

export default function Products() {
    const [ isOpen, setIsOpen ] = useState( false );
    const [ products, setProducts ] = useState( [] );
    const [ currentPage, setCurrentPage ] = useState( 1 );
    const [ totalItems, setTotalItems ] = useState( 0 );
    const [ currentRoute, setCurrentRoute ] = useState( 'prod' )
    const toggle = () => {
        setIsOpen( !isOpen );
    };


    async function getAllProducts( page ) {
        const req = await fetch( `${api}/${currentRoute}?page=${page}` );
        const res = await req.json();
        setProducts( res.data );
        setTotalItems( res.totalItems );
    };

    useEffect( () => {
        getAllProducts( currentPage );
    }, [ currentPage, currentRoute ] );
    return (
        <Fragment>
            {
                products.length > 0 && (
                    <div>
                        <Navbar toggle={toggle} />
                        <Sidebar toggle={toggle} isOpen={isOpen} />
                        <Hero />
                        <CategorySort setCurrentRoute={setCurrentRoute} currentRoute={currentRoute} />
                        <Showcase products={products} />
                        <ProductsWrapper>
                            <NavigateButtons>
                                {
                                    currentPage > 1 && (
                                        <ButtonNavPrev onClick={() => setCurrentPage( currentPage - 1 )} />
                                    )
                                }
                                <NavButton currentPage={currentPage} num={1} onClick={() => setCurrentPage( 1 )}>1</NavButton>
                                <NavButton currentPage={currentPage} num={2} onClick={() => setCurrentPage( 2 )}>2</NavButton>
                                <NavButton currentPage={currentPage} num={3} onClick={() => setCurrentPage( 3 )}>3</NavButton>
                                <NavButton currentPage={currentPage} num={4} onClick={() => setCurrentPage( 4 )}>4</NavButton>
                                {
                                    totalItems > 6 && (
                                        <ButtonNavNext onClick={() => setCurrentPage( currentPage + 1 )} />
                                    )
                                }
                            </NavigateButtons>
                        </ProductsWrapper>
                        <Footer />
                    </div>
                )
            }
        </Fragment>
    )
}
