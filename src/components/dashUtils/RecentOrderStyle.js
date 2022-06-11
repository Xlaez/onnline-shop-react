import styled from "styled-components";
import { GiGroundbreaker } from 'react-icons/gi'

export const RecentOrdersWrapper = styled.div`
padding:1.3rem 1rem;
background:#fff;
display:flex;
flex-direction:column;
gap:1.2rem;
font-family: 'Overlock', cursive;
border-radius:10px;
`

export const RecentOrderStrong = styled.strong`
color:#666;
font-size:1.3rem;
`

export const FirstFLex = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`

export const OnlyIcon = styled( GiGroundbreaker )`
font-size:1rem;
color:#555;
`
export const SecondFlex = styled.div`
/* border-top:1px solid #e0e0e0; */
`

export const SecondFlexTable = styled.table`
padding-top:1rem;
th{
    padding-bottom:2rem;
    color:#555;
    font-family: 'Overlock', cursive;
}
td{
    padding-top:1rem;
    color:#666;
    padding-bottom:1rem;
}
.first-t{
    .first-t-user, .second-t-user{
        text-align:left;
        width:40%;
        font-family: 'Overlock', cursive;
    }
    .first-t-date, .second-t-date{
        text-align:left;
        width:35%;
    }
    .first-t-status, .second-t-status{
        text-align:left;
        width:25%;
    }
    .first-t-status{
        padding-left:20px;        
    }
}
`

export const SecondFlexBtn = styled.button`
color:#fff;
background:#3a8bcd;
border:1px solid #3a8bcd;
padding:7px 30px;
border-radius:20px;
&:hover{
    background::#093c66;
    border:1px solid #093c66;
}
@media(max-width:440px){
    padding:7px 15px;
    border-radius:10px;
}
`