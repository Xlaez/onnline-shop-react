import styled from "styled-components";
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiBell } from 'react-icons/bi'

export const HeadWrapper = styled.div`
background:#fff;
display:flex;
align-items:center;
justify-content:space-between;
height:60px;
margin-bottom:0.5rem;
@media(max-width:440px){
    height:10vh;
}
`

export const PriHeadWrapper = styled.div`
display:flex;
align-items:center;
gap:1rem;
justify-content:center;
color:#000;
padding-left:1rem;
`

export const SecHeadWrapper = styled.div`
display:flex;
align-items:center;
gap:1rem;
justify-content:flex-end;
color:#000;
padding-right:2rem;
`

export const HamburgerMenu = styled( GiHamburgerMenu )`
color:#000;
font-size:1rem;
cursor:pointer;
&:hover{
    color:#131324;
}
@media(min-width:450px){
    visibility:hidden;
}
`

export const TextWrap = styled.span`
font-size:1rem;
color:#000;
@media(min-width:450px){
    visibility:hidden;
}
`

export const BellIcon = styled( BiBell )`
font-size:1.4rem;
color:#000;
`

export const ImageWrap = styled.img`
border-radius:50%;
width:2rem;
height:2rem;
`;