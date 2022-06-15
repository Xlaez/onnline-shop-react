/*eslint-ignore*/
import React, { useState, useLayoutEffect } from 'react'
import { AngleRightBtn, ButtonArranger, ButtonBeautiful, FirstInnerStyle, FirstInnerStyleH1, FirstInnerStyleHeaderBody, Small1, Small2, SvgCloud } from '../dashUtils/FirstInnerDashStyle'
import { Numbers, PeopleFillIcon, PeopleFillIconPack, SecondaryDashIndivdualWrap, SecondaryDashWrapper, TextBeneath, TextFieldGrid } from '../dashUtils/SecondaryDashStyle'
import { MessageViewWrapper, NoMessage } from './Messages'
import { api } from '../../utils/Api';

function Messages( { setMode, setInnerBodyMode } ) {

    const [ messages, setMessages ] = useState( [] );

    const headers = {
        Authorization: localStorage.getItem( 'x-access-store-user-allow-entry' ),
    }

    async function getMessages() {
        const req = await fetch( `${api}/contact`, {
            method: 'GET',
            headers,
        } );
        const res = await req.json();
        if ( req.ok ) {
            setMessages( res.data )
        }
    };

    const handleShowMsg = ( id ) => {
        localStorage.setItem( 'x-store-admin-message-id', id );
        setInnerBodyMode( 'single-message' );
    };

    useLayoutEffect( () => {
        getMessages();
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
                messages.length > 0 ? (
                    <SecondaryDashWrapper>
                        {
                            messages.map( msg => {
                                return (
                                    <SecondaryDashIndivdualWrap key={msg._id} onClick={() => handleShowMsg( msg._id )}>
                                        <PeopleFillIconPack>
                                            <PeopleFillIcon />
                                        </PeopleFillIconPack>
                                        <TextFieldGrid>
                                            <Numbers>{msg.name}</Numbers>
                                            <TextBeneath>{new Date( msg.updatedAt ).toDateString()}</TextBeneath>
                                        </TextFieldGrid>
                                    </SecondaryDashIndivdualWrap>
                                )
                            } )
                        }
                    </SecondaryDashWrapper>
                ) : (
                    <NoMessage>
                        <h2>Ooops no messages yet</h2>
                    </NoMessage>
                )
            }
        </MessageViewWrapper>
    )
}

export default Messages