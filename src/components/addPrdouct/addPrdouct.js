import styled from "styled-components";

export const AddPrdouctWrapper = styled.main`
max-width:85vw;
color:#777;
overflow-y:auto;
height:85vh;
padding:0 1rem;
&::-webkit-scrollbar{
    border-radius:.3rem;
    background:#fff;
    width:0.4rem;
    &-thumb{
    border-radius:.3rem;
    background:#555;
    width:0.3rem;
    }
}
@media(max-width:440px){
    height:90vh;
    border-top-right-radius:.5rem;
    max-width:99vw;
    padding:0;
    &::-webkit-scrollbar{
        width:0.1rem;
        &-thumb{
            width:0.1rem;
        }
    }
}

`

export const AddPrdouctGrid = styled.section`
display:grid;
grid-template-columns:repeat(2,1fr);
grid-gap:1.3rem;
@media(max-width:440px){
    grid-template-columns:repeat(1,1fr);
    grid-gap:0;
}
`

export const AddPrdouctForm = styled.form`
padding:0;
border:1px solid #fff;
background:transparent;
div{
    display:flex;
    flex-direction:column;
    padding:1rem .5rem;
}
@media(max-width:440px){
    padding:0.2rem;
}
`

export const AddPrdouctInputs = styled.input`
width:100%;
height:35px;
border-radius:3px;
border:1px solid #e0e0e0;
background:transparent;
color:#777;
&:focus{
    outline:none;
}
`

export const AddPrdouctSelect = styled.select`
width:100%;
height:35px;
border-radius:3px;
border:1px solid #e0e0e0;
background:transparent;
color:#777;
&:focus{
    outline:none;
}
option{
    background:#093c66;
    color:#fff;
}
`
export const AddPrdouctLabel = styled.label`
padding-bottom:3px;
color:#777;

`

export const AddPrdouctButton = styled.button`
padding:10px 20px;
background:#093c66;
color:#fff;
border:1px solid #093c66;
border-radius:3px;
transition:all 1s ease-out;
cursor:pointer;
&:hover{
    opacity:0.9;
}
`

export const dashbtn = {
    display: 'flex',
    justifContent: 'flex-start',
    paddingBottom: '1rem'
}
export const btn = {
    padding: '10px 20px',
    border: '1px solid #3a8bcd',
    borderRadius: '20px',
    background: '#3a8bcd',
    color: '#fff',
    cursor: 'pointer'
}
