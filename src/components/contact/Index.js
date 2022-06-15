/*eslint-ignore */
import React, { useState } from 'react'
import { ContactH1, ContactWrapper, ContactForm, ContactFormDiv, ContactFormDivEl, ContactInputs, ContactLabel, ContactTextarea, ContactFormWrapper, ContactFormBtn } from './Contact';
import { api } from '../../utils/Api'
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();

    const [ inputs, setInputs ] = useState( {
        name: '',
        email: '',
        mobile: '',
        message: '',
    } );

    const handleSubmitForm = async ( e ) => {

        const { email, message, mobile, name } = inputs;
        const body = new FormData();

        body.append( 'name', name )
        body.append( 'email', email )
        body.append( 'message', message );
        body.append( 'mobile', mobile );
        e.preventDefault();
        const req = await fetch( `${api}/contact`, { method: 'POST', body } );
        // console.log( await req.json() );
        if ( req.ok ) {
            navigate( '/' );
        } else {
            console.log( 'something went wrong' );
        }
    };

    const handleChange = ( e ) => {
        setInputs( { ...inputs, [ e.target.name ]: e.target.value } );
    };


    return (
        <ContactWrapper>
            <ContactH1>Contact Us</ContactH1>
            <ContactFormWrapper>
                <ContactForm onSubmit={( e ) => handleSubmitForm( e )}>
                    <ContactFormDiv>
                        <ContactFormDivEl>
                            <ContactLabel>Full Name</ContactLabel>
                            <ContactInputs type="text" name='name' onChange={( e ) => handleChange( e )} />
                        </ContactFormDivEl>
                        <ContactFormDivEl>
                            <ContactLabel>Email</ContactLabel>
                            <ContactInputs type="email" name='email' onChange={( e ) => handleChange( e )} />
                        </ContactFormDivEl>
                        <ContactFormDivEl>
                            <ContactLabel>Mobile</ContactLabel>
                            <ContactInputs type="tel" name='mobile' onChange={( e ) => handleChange( e )} />
                        </ContactFormDivEl>
                    </ContactFormDiv>
                    <ContactFormDiv>
                        <ContactFormDivEl>
                            <ContactLabel>Message</ContactLabel>
                            <ContactTextarea name='message' onChange={( e ) => handleChange( e )}></ContactTextarea>
                        </ContactFormDivEl>
                    </ContactFormDiv>
                    <ContactFormBtn type='submit'>Send message</ContactFormBtn>
                </ContactForm>
            </ContactFormWrapper>
        </ContactWrapper>
    )
}

export default Contact