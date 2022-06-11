import styled from 'styled-components';

export const HomeInterStyle = styled.article`
background:transparent;
width:100%;
height:400px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin:3rem 0;
h1{
    font-size:1.5rem;
    font-weight:700;
    font-family: 'Nunito', sans-serif;
    text-align:center;
    text-transform:uppercase;
    padding-bottom:2rem;
    color:#888;
}
p{
    text-align:center;
    line-height:1.7;
    font-family: 'Overlock', cursive;
    width:700px;
    color:#888;
    overflow-wrap:line-wrap;
    margin:0 auto;
    @media(max-width:900px){
        width:90vw;
    }
}
@media(max-width:440px){
    height:300px;
    margin:2rem 0;
    h1{
        font-size:1.3rem;
    }
}
`