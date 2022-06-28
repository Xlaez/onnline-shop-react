import styled from "styled-components";
import { BsCloudArrowUp, BsShop } from 'react-icons/bs'
import { FaAngleRight } from 'react-icons/fa'

export const FirstInnerStyle = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:row;
    width:100%;
    margin-bottom:1rem;
    @media(max-width:440px){
        flex-direction:column;
    }
`;

export const FirstInnerStyleH1 = styled.h1`
font-size:1.6rem;
color:#555;
font-family: 'Nunito', sans-serif;
padding-bottom:1.5rem;
@media(max-width:440px){
    text-align:center;
    font-size:1.5rem;
}
`

export const FirstInnerStyleHeaderBody = styled.div`
display:flex;
flex-direction:column;
`

export const Small1 = styled.small`
color:#666;
font-family: 'Overlock', cursive;
font-size:1rem;
`

export const Small2 = styled.small`
color:#3a8bcd;
font-family: 'Overlock', cursive;
font-size:1rem;
cursor:pointer;
&:hover{
    color:#093c66;
}
`
export const AngleRightBtn = styled( FaAngleRight )`
color:#555;
font-size:.9rem;
`
export const ButtonArranger = styled.div`
display:flex;
align-items:center;
gap:1rem;
justify-content:center;
@media(max-width:440px){
    padding-bottom:2rem;
}
`

export const ButtonBeautiful = styled.div`
color:#fff;
background:#3a8bcd;
padding:10px 30px;
border:1px solid #3a8bcd;
border-radius:2.4rem;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
font-family: 'Overlock', cursive; 
gap:1rem;
transition:all 1s ease-out;
&:hover{
    background:#093c66 ;
    border:1px solid #093c66;
}   
`

export const SvgCloud = styled( BsCloudArrowUp )`
color:#fff;
`
export const SvgStore = styled( BsShop )`
color:#fff;
`