import styled from 'styled-components';

export const ExclusiveWrapper = styled.div`
padding:3rem;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
h1{
    font-size:1.5rem;
    font-family: 'Nunito', sans-serif;
    text-transform:uppercase;
    padding:2rem;
    color:#888;
    text-align:center;
}
p{
    line-height:1.7;
    text-align:center;
    font-family: 'Overlock', cursive;
    padding-bottom:4rem;
    color:#888;
}
@media(max-width:440px){
    padding-left:1rem;
    text-align:center;
    padding-right:1rem;
    display:block;
    padding-bottom:1rem;
    h1{
        padding-left:0;
        padding-right:0;
        font-size:1.3rem;
    }
}
`