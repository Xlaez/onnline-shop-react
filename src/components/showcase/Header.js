import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <Head>
            <h1>Latest In clothing</h1>
        </Head>
    )
}

const Head = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:3rem;
padding-top:4rem;
@media(max-width:440px){
    padding-left:1rem;
    padding-right:1rem;
}
h1{
    font-family: 'Nunito', sans-serif;
    color:#888;
    text-transform:uppercase;
    font-size:1.5rem;
    text-align:center;
}
`

export default Header