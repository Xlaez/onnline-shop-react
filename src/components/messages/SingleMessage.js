import React, { useLayoutEffect, useState } from 'react'
import { MessageViewWrapper, MessageBody, MessageBox, MessageCred, NoMessage, DeleteMessage } from './Messages';
import { AngleRightBtn, ButtonArranger, ButtonBeautiful, FirstInnerStyle, FirstInnerStyleH1, FirstInnerStyleHeaderBody, Small1, Small2, SvgCloud } from '../dashUtils/FirstInnerDashStyle'
import { api } from '../../utils/Api';

function SingleMessage( { setMode, setInnerBodyMode } ) {

    const [ msg, setMsg ] = useState( null );

    const headers = {
        Authorization: localStorage.getItem( 'x-access-store-user-allow-entry' ),
    }

    const ID = localStorage.getItem( 'x-store-admin-message-id' );

    async function getSingleMsg( id ) {
        const req = await fetch( `${api}/contact/${id}`, {
            method: 'GET',
            headers,
        } );
        const res = await req.json();
        if ( req.ok ) {
            setMsg( res.data );
        }
    };

    async function deletmsg( id ) {
        const req = await fetch( `${api}/contact/${id}`, {
            method: 'DELETE',
            headers,
        } );
        if ( req.ok ) {
            setInnerBodyMode( 'message' )
        } else {
            setMsg( null );
        }
    }

    const handleDelete = ( id ) => {
        deletmsg( id );
    }

    useLayoutEffect( () => {
        getSingleMsg( ID );
    }, [] );

    return (
        <MessageViewWrapper>
            <FirstInnerStyle>
                <FirstInnerStyleHeaderBody>
                    <FirstInnerStyleH1>Messages</FirstInnerStyleH1>
                    <ButtonArranger>
                        <Small1>Messages</Small1>
                        <AngleRightBtn />
                        <Small2 onClick={() => setMode( "home" )}>Home</Small2>
                    </ButtonArranger>
                </FirstInnerStyleHeaderBody>
                <ButtonBeautiful onClick={() => setMode( "add-product" )}>
                    <SvgCloud />
                    <span>Add product</span>
                </ButtonBeautiful>
            </FirstInnerStyle>
            {
                msg === null ? (
                    <NoMessage>
                        <h2>Something went wrong</h2>
                    </NoMessage>
                ) : (
                    <MessageBox>
                        <MessageCred>
                            <li>Name: <small>{msg.name}</small></li>
                            <li>Email: <small>{msg.email}</small></li>
                            <li>Mobile: <small>{msg.mobile}</small></li>
                            <li>Message:</li>
                        </MessageCred>
                        <MessageBody>{msg.message}</MessageBody>
                        <DeleteMessage onClick={() => handleDelete( msg._id )}>Delete</DeleteMessage>
                    </MessageBox>
                )
            }
        </MessageViewWrapper>
    )
}

export default SingleMessage