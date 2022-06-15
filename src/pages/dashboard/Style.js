import styled from "styled-components";

export const WrappingDash = styled.main`
background:#fff;
display:grid;
grid-template-columns:20% 80%;
overflow:hidden;
height:100vh;
@media(max-width:440px){
    display:flex;
    flex-direction:column;
}
`