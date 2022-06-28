import styled from 'styled-components';

export const MessageViewWrapper = styled.div`
background:#e7e7e7;
padding:2rem;
border-top-left-radius:20px;
height:100%;
overflow-y:auto;
@media(max-width:440px){
    height:100vh;
}
`

export const NoMessage = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:100%;
width:100%;
h2{
    font-size:1.4rem;
    color:#777;
    font-family: 'Nunito', sans-serif;
}
`

export const MessageBox = styled.div`
background:#fff;
width:85%;
padding:1rem;
border:1px solid #fff;
border-top-right-radius:10px;
border-top-left-radius:10px;
margin:0 auto;
overflow:hidden;
display:flex;
flex-direction:column;
@media(max-width:440px){
    width:95%;
}
`

export const MessageCred = styled.ul`
display:flex;
flex-direction:column;
gap:0.7rem;
align-items:left;
li{
    list-style:none;
    color:rgb(158, 144, 17);
    font-size:1rem;
    font-family: 'Overlock', cursive;
};
small{
    font-size:0.9rem;
    color:#093c66;
};
`

export const MessageBody = styled.div`
width:90%;
color:#888;
font-size:1rem;
font-family: 'Overlock', cursive;
margin:0 auto;
height:200px;
overflow-y:auto;
padding-top:1rem;
`

export const DeleteMessage = styled.button`
color:#fff;
background:rgb(209, 68, 33);
border:1px solid rgb(209, 68, 33);
border-radius:10px;
padding:7px 15px;
cursor:pointer;
`