import React from 'react'
import styled from 'styled-components'

function Toaster( { props } ) {
    return (
        <ToasterContainer>
            <p>
                {props}

            </p>
        </ToasterContainer>
    )
}

const ToasterContainer = styled.div`
background:rgb(206, 60, 60);
border:2px solid rgb(206, 60, 60);
color:#fff;
line-height:1.4;
position:fixed;
right:0;
top:10%;
padding:1rem;
transition:all 1s ease-out;
max-width:250px;
overflow-wrap:line-break;
`

export default Toaster