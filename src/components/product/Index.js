import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api, apiHost } from '../../utils/Api';
import Footer from '../footer/Footer';
import Intermediate from '../intermediate/Index';
import Showcase from '../showcase/Index';
import { Container, Description, DescriptionBody, ImageBody, OrderButton, OrderButtonDiv, ProductImage, Wrapper, heading, price, review, RelatedProdWrap } from './singleProduct'
import Loader from '../../utils/Loader';

function SingleProduct() {
    const navigate = useNavigate()
    const id = localStorage.getItem( 'x-user-store-view-single-prod' );
    const [ data, setData ] = useState( {} );
    const [ products, setProducts ] = useState( [] );
    const [ exclusiveProducts, setExclusiveProducts ] = useState( [] );

    async function getProduct( id ) {
        const req = await fetch( `${api}/prod/${id}` );
        const res = await req.json();
        if ( !req.ok ) {
            console.log( 'error' );
        } else {
            setData( res.data );
        };
    };

    async function getExclusiveProducts() {
        const req = await fetch( `${api}/prod/exclusive` );
        const res = await req.json();
        setExclusiveProducts( res.data );
    }

    async function getSimilarProducts( category ) {
        const req = await fetch( `${api}/prod/category/${category}` );
        const res = await req.json();
        setProducts( res.data );
    };

    async function handleAddToCart( id ) {
        const body = new FormData();
        body.append( 'productId', id );
        const headers = {
            Authorization: localStorage.getItem( 'x-access-store-user-allow-entry' ),
            useraccess: localStorage.getItem( 'x-access-store-user-special' )
        }

        const req = await fetch( `${api}/prod/add`, {
            method: 'POST',
            body,
            headers,
        } );
        if ( req.status === 403 ) {
            navigate( '/login' );
        } else if ( req.status === 400 ) {
            console.log( 'error' );
        } else {
            if ( req.ok ) {
                navigate( '/checkout' );
            }
        }
    };

    useEffect( () => {
        getProduct( id );
    }, [] );

    useEffect( () => {

        getSimilarProducts( data.category );
    }, [ data ] );

    useEffect( () => {
        getExclusiveProducts();
    }, [] );


    const divStyle = {
        overflow: "hidden",
    }
    return (
        <Fragment>
            {
                data._id ? (
                    <div style={divStyle}>
                        <Wrapper>
                            <Container>
                                <ImageBody>
                                    {/* <ProductImage src={productData.image} /> */}
                                    <ProductImage src={`${apiHost}/${data.image}`} />
                                </ImageBody>
                                <DescriptionBody>
                                    <h1 style={heading}>{data.name}</h1>
                                    <span style={review}>Former sale : #{data.price}</span>
                                    <h2 style={price}>#{data.newPrice}</h2>
                                    <Description>
                                        {data.descr}
                                    </Description>
                                    <OrderButtonDiv>
                                        <OrderButton onClick={() => handleAddToCart( data._id )}>Add to cart</OrderButton>
                                    </OrderButtonDiv>
                                </DescriptionBody>
                            </Container>
                            <RelatedProdWrap>
                                <h1 style={heading}>Related Prdoucts</h1>
                            </RelatedProdWrap>
                            <Showcase products={products} />
                        </Wrapper>
                        <Intermediate exclusiveProducts={exclusiveProducts} />
                        <Footer />
                    </div >
                ) : (
                    <Loader />
                )
            }

        </Fragment>
    )
}

export default SingleProduct