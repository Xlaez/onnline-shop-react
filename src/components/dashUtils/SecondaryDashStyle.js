import { BsPeopleFill, BsCalendarDayFill, BsCurrencyDollar } from 'react-icons/bs'
import styled from 'styled-components'

export const SecondaryDashWrapper = styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
gap:1.5rem;
margin-top:1rem;
@media(max-width:440px){
    grid-template-columns:repeat(1,1fr);
}
`

export const SecondaryDashIndivdualWrap = styled.div`
background:#fff;
padding:1rem;
border-radius:10px;
display:flex;
align-items:center;
justify-content:flex-start;
gap:1rem;
&:hover{
    opacity:0.9;
    cursor:pointer;
}
@media(mnax-width:440px){
    justify-conten:center;
    gap:1.3rem;
}
`;

export const PeopleFillIcon = styled( BsPeopleFill )`
color:#093c66;
font-size:1.4rem;
`
export const CalendarDayFillIcon = styled( BsCalendarDayFill )`
color: rgb(158, 144, 17);
font-size:1.4rem;
`
export const CurrencyDollarIcon = styled( BsCurrencyDollar )`
color:rgb(209, 68, 33);
font-size:1.4rem;
`

export const PeopleFillIconPack = styled.div`
padding:1rem;
background:#3a8bcd;
border:1px solid #3a8bcd;
border-radius:5px;
`

export const CalendarDayFillIconPack = styled.div`
padding:1rem;
background:rgb(241, 224, 70);
border:1px solid rgb(241, 224, 70);
border-radius:5px;
`
export const CurrencyDollarIconPack = styled.div`
padding:1rem;
background:rgb(231, 118, 89);
border:1px solid rgb(231, 118, 89);
border-radius:5px;
`

export const Numbers = styled.h2`
font-size:1.4rem;
color:#666;
padding-bottom:5px;
ont-family: 'Nunito', sans-serif;
`
export const TextBeneath = styled.span`
color:#555;
font-size:1rem;
font-family: 'Overlock', cursive;
`

export const TextFieldGrid = styled.div`
display:flex;
flex-direction:column;
`;
