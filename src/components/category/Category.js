import styled from 'styled-components';

export const Category = styled.div`
    max-width:85vw;
    margin:5rem auto;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    .current{
        color:#fff !important;
        background:#093c66 !important;
    }
`
export const Button = styled.button`
padding:10px 1rem;
width:24%;
gap:1rem;
background:transparent;
color:#093c66;
text-transform:uppercase;
font-size:.7rem;
font-family: 'Nunito', sans-serif;
border:.5px solid #e7e7e7;
transition:all .6s ease-out;
&:hover{
    cursor:pointer;
    background:#093c66;
    color:#fff;
    border:.5px solid #093c66;
}
`