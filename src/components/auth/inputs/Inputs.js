import styled from 'styled-components';

export const FormInputs = styled.div`
padding:1rem;
width:100%:
display:flex;
flex-direction:column;
gap:.5rem;
div{
    width:100%;
    padding:.5rem 0;
    input{
        width:100%;
        /* border-radius:5px; */
        border:1px solid transparent;
        border-bottom:1px solid #ccc;
        padding-top:2px;
        height:40px;
        color:#f4f4f4;
        background:transparent;
        &::placeholder{
            color:#999;
            padding-left:3px;
        }
        &:focus{
            outline:none;
        }
    }
}
`