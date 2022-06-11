import styled from "styled-components";

export const InnnerDashGridWrapper = styled.div`
margin:1.4rem 0;
display:grid;
background:#efefef;
grid-template-columns:57% 37%;
grid-gap:1rem;
@media(max-width:440px){
    grid-template-columns:repeat(1, 1fr);
}
`