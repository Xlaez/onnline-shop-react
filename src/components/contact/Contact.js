import styled from "styled-components";

export const ContactWrapper = styled.div`
margin: 0 auto;
max-width:85vw;
font-family:'Overlock', cursive;
margin-bottom:5rem;
@media(max-width:440px){
    max-width:99vw;
    margin:0 ;
    margin-bottom:5rem;
}
`;

export const ContactH1 = styled.h1`
font-size:1.5rem;
color:#666;
font-family: 'Nunito', sans-serif;
padding:3rem 0;
text-align:center;
text-transform:uppercase;
@media(max-width:440px){
padding:2rem 0;
}
`;

export const ContactFormWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`

export const ContactForm = styled.form`
padding:1rem;
display:grid;
grid-template-columns:repeat(2,1fr);
gap:2rem;
height:300px;
@media(max-width:440px){
    grid-template-columns:repeat(1,1fr);
}
@media(max-width:440px){margin-bottom:14rem;}
`;

export const ContactFormDiv = styled.div`
display:flex;
flex-direction:column;
gap:1rem;
`;

export const ContactFormDivEl = styled.div`
display:flex;
flex-direction:column;
gap:.2rem;
`

export const ContactInputs = styled.input`
width:100%;
height:40px;
border:1px solid #999;
border-radius:5px;
color:#131313;
background:transparent;
padding-left:2px;
&:focus{
    outline:none;
}
`

export const ContactLabel = styled.label`
color:#666;
text-transform:capitalize;
`

export const ContactTextarea = styled.textarea`
width:100%;
border:1px solid #999;
border-radius:5px;
color:#131313;
height:200px;
background:transparent;
padding-left:2px;
padding-top:3px;
&:focus{
    outline:none;
}
`

export const ContactFormBtn = styled.button`
width:100%;
padding:0.8rem;
text-transform:uppercase;
color:#fff;
background:#3a8bcd;
border:1px solid #3a8bcd;
border-radius:3px;
transition:all 1s ease-out;
&:hover{
    cursor:pointer;
    background:cornflowerblue;
}
`