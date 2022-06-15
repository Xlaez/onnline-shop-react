import React from 'react'
import { FormInputs } from './Inputs'

function Index( { props, setInputs } ) {
    // if(props === 'register'){
    //     setInputs({
    //         name:document.getElementById('name'),
    //         email:document.getElementById('email'),
    //         mobile:document.getElementById('mobile'),
    //         password:document.getElementById('password'),
    //         Cpassword:document.getElementById('confirmPassword')
    //     })
    // }else{
    //     setInputs( {
    //         email: document.getElementById( 'email' ),
    //         password: document.getElementById( 'password' ),
    //         Cpassword: document.getElementById( 'confirmPassword' )
    //     } )
    // }
    return (
        <FormInputs>
            {
                props === 'register' && (
                    <div>
                        <input type="text" placeholder='Full name'
                            id='name' />
                    </div>
                )
            }
            <div>
                <input type="email" placeholder='Email address' id='email' />
            </div>
            {
                props === 'register' && (
                    <div>
                        <input type="tel" placeholder='Mobile number' id='mobile' />
                    </div>
                )
            }
            <div>
                <input type="password" placeholder='Password' id='password' />
            </div>
            <div>
                <input type="password" placeholder='Confirm password' id='confirmPassword' />

            </div>
        </FormInputs>
    )
}

export default Index