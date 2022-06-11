import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function CenterButton() {
    const navigate = useNavigate();
    return (
        <Button>
            <button onClick={() => navigate('/all-product')}>See All Products</button>
        </Button>
    )
}

const Button = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding-bottom:3rem;
button{
    padding:10px 30px;
    background:#3a8bcd;
    color:#fff;
    border:1px solid #3a8bcd;
    border-radius:3px;
    font-family: 'Nunito', sans-serif;
    cursor:pointer;
    text-transform:uppercase;
    transition:all .6s ease-out;
    &:hover{
        /* opacity:0.8; */
        background:#093c66;
        color:#ccc;
    }
}
`

export default CenterButton