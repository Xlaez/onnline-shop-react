import styled from 'styled-components';

export const FormButtonContainer = styled.div`
display:flex;
flex-direction:column;
padding:1rem;
`

export const FormButton = styled.button`
background:#3a8bcd;
color:#fff;
border:1px solid #3a8bcd;
border-radius:3px;
padding:1rem 2rem;
text-transform:uppercase;
transition:all 1s ease-out;
opacity:0.8;
&:hover{
    cursor:pointer;
    opacity:1;
}
`