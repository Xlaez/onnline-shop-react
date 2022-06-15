import styled from "styled-components";

export const DashboardBodyWrapper = styled.aside`
display:flex;
flex-direction:column;
`

export const InnerWrapper = styled.div`
background:#efefef;
width:100%;
height:100%;
border-top-left-radius:1.5rem;
padding:2rem ;
overflow-y:auto;
height:90vh;
overflow-x:hidden;
display:flex;
flex-direction:column;
&::-webkit-scrollbar{
    border-radius:.3rem;
    background:#fff;
    width:0.4rem;
    &-thumb{
    border-radius:.3rem;
    background:#555;
    width:0.3rem;

}
@media(max-width:440px){
    height:90vh;
    border-top-right-radius:1.5rem;
}
`

export const LoaderWrapper = styled.div`
background:#fff;
/* #093c66 */
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
img{
    color:#fff;
    width:100px;
    animation: spin infinite 2s linear;
}
@keyframes spin{
    from{transform: rotate(0deg)};
    to{transform: rotate(360deg)}
}
`;