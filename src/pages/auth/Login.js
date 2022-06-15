import React, { useState } from 'react'
import Input from '../../components/auth/inputs/Index';
import { RegisterForm } from './Style'
import Button from '../../components/auth/button/Index';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/Api';
import Toaster from '../../utils/Toaster';

export default function Login() {
    const navigate = useNavigate();
    const notmatch = {
        color: 'red',
    }
    const notallowed = {
        color: 'orange'
    }

    let [ inputs, setInputs ] = useState( {} );
    let [ error, setError ] = useState( 'none' );

    const handleReistration = () => {
        setInputs( {
            email: document.getElementById( 'email' ).value,
            password: document.getElementById( 'password' ).value,
            Cpassword: document.getElementById( 'confirmPassword' ).value,
        } );
    };

    async function submitForm() {
        const body = new FormData();
        const { email, password } = inputs;

        body.append( 'email', email );
        body.append( 'password', password );

        const req = await fetch( `${api}/auth/login`, {
            method: 'POST',
            body,
        } );

        const res = await req.json();

        if ( req.status === 400 ) {
            setError( 'wrong-pass' );
            setTimeout( () => {
                setError( 'none' );
            }, 2000 );
        }
        if ( req.status === 403 ) {
            setError( 'wrong-pass' );
            setTimeout( () => {
                setError( 'none' );
            }, 2000 );
        }
        if ( req.status === 200 ) {
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
    const prop = 'login'
    return (
        <RegisterForm onSubmit={( e ) => handleRegistrationValidation( e )}>
            {
                error === 'not-match' && (
                    <strong style={notmatch}>Password doesn't match</strong>
                )
            }
            {
                error === 'none' && (
                    <strong>Welcome back!</strong>
                )
            }
            {
                error === 'wrong-pass' && (
                    <strong>Welcome back!</strong>
                )
            }
            {
                error === 'not-allowed' && (
                    <strong style={notallowed}>Password cannot be less than 7 characters</strong>
                )
            }
            <div className="form-body">
                <Input props={prop} setInputs={setInputs} />
                <Button props={prop} handleReistration={handleReistration} />
            </div>
            {
                error === 'wrong-pass' && (
                    <Toaster props={"credentials are wrong"} />
                )
            }
        </RegisterForm>
    )
}
