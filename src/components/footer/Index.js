import styled from 'styled-components';

export const FooterContainer = styled.footer`
background:#3a8bcd;
padding:1rem;
color:#f4f4f4;
overflow:hidden;
`
export const FootWrapper = styled.div`
background:transparent;
margin: 0 auto;
width:85vw;
display:flex;
flex-direction:column;
@media(max-width:440px){
    width:90vw;
}
`

export const FirstFooter = styled.div`
padding:3rem 1px;
display:flex;
flex-direction:row;
justify-content:space-between;
gap:2rem;
border-bottom:1px solid #e0e0e0;
  strong {
  color:#fff;
  border-bottom: 1px #e0e0e0 dashed;
  font-weight:700;
  font-size: 1.3rem;
}
li{
    cursor:pointer;
}
.about-sec, .recent-sec, .category, .rated{
    display:flex;
    flex-direction:column;
    strong{
        padding-bottom:0.5rem;
        margin-bottom:1rem;
    }
}
@media(max-width:440px){
    flex-direction:column;
    justify-content:center;
}
`
export const SecondFooter = styled.div`
padding:1rem 1px;
display:flex;
align-items:center;
justify-content:space-between;
@media(max-width:440px){
    flex-direction:column;   
    justify-content:center;
    gap:1rem;
}
div{
    display:flex;
    align-items:center;
}
ul{
    display:flex;
    align-items:center;
    gap:1rem;
    padding-right:2rem;
}
li{
    list-style:none;
    color:fff;
    a{
        text-decoration:none;
        color:fff;
    }
    svg{
        color:#fff;
        font-size:1rem;       
        cursor:pointer;
    }
}
.svg{
    cursor:pointer;
    padding:.6rem;
    border-radius:.3rem;
    background:#093c66;
    color:#f4f4f4;
    a{
        text-decoration:none;
        color:#fff;
    }
}

`