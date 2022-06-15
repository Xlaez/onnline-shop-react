import React from 'react'
import LImage from '../images/spinning.png';
import styled from 'styled-components';

function Loader() {
    return (
        <Wrapper>
            <img src={LImage} alt="" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
background:#fff;
/* #093c66 */
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
img{
    color:#fff;
    width:100px;
    animation: spin infinite 2s linear;
}
@keyframes spin{
    from{transform: rotate(0deg)};
    to{transform: rotate(360deg)}
}
`;

export default Loader