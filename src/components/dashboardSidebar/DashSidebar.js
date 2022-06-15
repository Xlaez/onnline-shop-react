import styled from 'styled-components';
import { BsEmojiSmileFill, BsAppIndicator, BsShop, BsMessenger, BsDice4Fill } from 'react-icons/bs'
import { BiLogOutCircle } from 'react-icons/bi'

export const DashboardSidebarWrapper = styled.div`
height:100vh;
max-height:100vh;
overflow-x:hidden;
overflow-y:hidden;
display:flex;
flex-direction:column;
background:#fff;
border-right:#ccc;
@media(max-width:440px){
    /* height:50vh; */
    /* max-height:50vh; */
    /* border-bottom:2px solid #093c66; */
    transition:1s all ease-out;
    /* display:none; */
}
`


export const UserNameDiv = styled.div`
display:flex;
align-items:center;
gap:1rem;
height:60px;
padding:1rem 2rem;
`

export const UserName = styled.strong`
text-align:center;
color:#093c66;
text-transform:uppercase;
font-size:1.1rem;
`;

export const EmojiSmile = styled( BsEmojiSmileFill )`
font-size:1.1rem;
color:#093c66;
`;

export const DashboardIcon = styled( BsDice4Fill )`
color:#3a8bcd;
font-size:1rem;
`;

export const StoreIcon = styled( BsShop )`
color:#093c66;
font-size:1rem;
`;

export const AnalysysIcon = styled( BsAppIndicator )`
color:#093c66;
font-size:1rem;
`;

export const MessageIcon = styled( BsMessenger )`
color:#093c66;
font-size:1rem;
`;

export const LogoutIcon = styled( BiLogOutCircle )`
color:#e31837;
font-size:1rem;
`;

export const Items = styled.span`
color:#093c66;
font-size:1rem;
font-family: 'Overlock', cursive;
`

export const ItemsFirst = styled.div`
display:flex;
flex-direction:column;
`

export const ItemDash = styled.span`
color:#093c66;
font-size:1rem;
font-family: 'Overlock', cursive;
`

export const ItemDiv = styled.div`
padding:1rem 2rem;
width:100%;
display:grid;
grid-template-columns:10% 90%;
transition:all 0.8s ease-out;
&:hover{
    background:#efefef;
    cursor:pointer
}
`

export const AllItems = styled.div`
padding-top:2rem;
padding-bottom:2rem;
display:flex;
flex-direction:column;
gap:4rem;
`;