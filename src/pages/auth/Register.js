import React, { useState } from 'react'
import Input from '../../components/auth/inputs/Index';
import { RegisterForm } from './Style';
import Button from '../../components/auth/button/Index';
import { api } from '../../utils/Api'
import { useNavigate } from 'react-router-dom';


export default function Register() {
    const navigate = useNavigate();
    const notmatch = {
        color: 'red',
    }
    const notallowed = {
        color: 'orange'
    }
    const prop = 'register'

    let [ inputs, setInputs ] = useState( {} );
    let [ error, setError ] = useState( 'none' );

    const handleReistration = () => {
        setInputs( {
            name: document.getElementById( 'name' ).value,
            email: document.getElementById( 'email' ).value,
            mobile: document.getElementById( 'mobile' ).value,
            password: document.getElementById( 'password' ).value,
            Cpassword: document.getElementById( 'confirmPassword' ).value,
        } );
    };

    async function submitForm() {
        const body = new FormData();
        const { name, email, mobile, password } = inputs;

        body.append( 'name', name );
        body.append( 'email', email );
        body.append( 'mobile', mobile );
        body.append( 'password', password );

        const req = await fetch( `${api}/auth`, {
            method: 'POST',
            body,
        } );

        const res = await req.json();

        if ( req.status === 400 ) {
            console.log( 'email taken' );
        }
        if ( req.status === 403 ) {
            console.log( 'password incorrect' );
        }
        if ( req.status === 201 ) {
            localStorage.setItem( 'x-access-store-user-allow-entry', res.data.token );
            localStorage.setItem( 'x-access-store-user-allow-entry-subt', res.data.refreshToken );
            localStorage.setItem( 'x-access-store-user-special', res.data._id )
            navigate( '/' );
        };
    }

    const handleRegistrationValidation = ( e ) => {
        e.preventDefault();

        if ( inputs.Cpassword !== inputs.password ) {
            setError( 'not-match' );
            setTimeout( () => {
                setError( 'none' );
            }, 2000 );
        } else if ( inputs.password.length < 7 ) {
            setError( 'not-allowed' )
            setTimeout( () => {
                setError( 'none' )
            }, 2000 );
        }
        else {
            setError( 'none' );
            submitForm();
        }
    }

    return (
        <RegisterForm onSubmit={( e ) => handleRegistrationValidation( e )}>

            {
                error === 'not-match' && (
                    <strong style={notmatch}>Password doesn't match</strong>
                )
            }
            {
                error === 'none' && (
                    <strong>Please supply valid data</strong>
                )
            }
            {
                error === 'not-allowed' && (
                    <strong style={notallowed}>Password cannot be less than 7 characters</strong>
                )
            }
            <div className='form-body'>
                <Input props={prop} setInputs={setInputs} />
                <Button props={prop} handleReistration={handleReistration} />
            </div>
        </RegisterForm>
    )
}
