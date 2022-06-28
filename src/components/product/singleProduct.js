import styled from 'styled-components';

export const Wrapper = styled.main`
margin:0 auto;
max-width:85vw;
@media(max-width:440px){
    max-width:97vw;
}
@media(max-width:1000px){
    max-width:90vw;
}
`

export const Container = styled.div`
padding:5rem 0 5rem 0;
display:grid;
grid-template-columns:repeat(2, 1fr);
grid-gap:1rem;
.out-of-stock{
    color:red !important;
    cursor:not-allowed;
}
@media(max-width:440px){
    padding:3rem 0 3rem 0;
    grid-template-columns:repeat(1,1fr);
}
@media(max-width:1000px){
    padding:3rem 0 3rem 0;
}
`;

export const ProductImage = styled.img`
width:100%;
height:80vh;
padding:2rem;
border:1px solid #e0e0e0 !important;
@media(max-width:1000px){
    height:50vh;
}
@media(max-width:780px){
    border:none;
    padding:0;
}
`

export const ImageBody = styled.div`
width:500px;
overflow:hidden;
padding:1rem;
border:1px solid #e0e0e0e;
@media(max-width:440px){
    width:100%;
    margin:0 auto;
    border:none;
    padding:0;
}
@media(max-width:1000px){
    width:300px;
}
`

export const DescriptionBody = styled.div`
display:flex;
flex-direction:column;
gap:2rem;
padding-top:1rem;
font-family: 'Nunito', sans-serif;
@media(max-width:440px){
    padding:1rem;
}
`

export const Description = styled.p`
line-height:1.6;
font-family: 'Overlock', cursive;
color:#888;
`

export const OrderButton = styled.button`
color:#fff;
text-transform:uppercase;
padding:1rem 5rem;
border:1px solid #093c66;
border-radius:3px;
font-size:1rem;
background:#093c66;
cursor:pointer;
transition:all .6s ease-out;
&:hover{
    opacity:0.9;
}
@media(max-width:440px){
    width:100%;
    padding:1rem 3rem;
}
`

export const OrderButtonDiv = styled.div`
display:flex;
justify-content:flex-end;
padding-bottom:1rem;
@media(max-width:1000px){
    justify-content:center;
}
`

export const heading = {
    fontWeight: 800,
    color: "#888",
    textTransform: "uppercase",
}
export const review = {
    fontSize: ".8rem",
    color: "#093c66",
    // textDecoration: 'line-through',
}
export const price = {
    color: "#888",
    fontSize: "1.5rem",
}
export const RelatedProdWrap = styled.section`
padding:5rem 0;
h1{
    padding-bottom:3rem;
    font-family: 'Nunito', sans-serif;
    text-align:center;
}
`