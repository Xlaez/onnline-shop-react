import styled from 'styled-components';

export const IntermediateWrapper = styled.section`
margin:0 auto;
max-width:85vw;
margin-bottom:10rem;
overflow:hidden;
@media(max-width:440px){
margin-bottom:7rem;
max-width:100vw;
}
`
export const Display = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
@media(max-width:440px){
padding-bottom:1rem;
}
div{
    border:1px solid #e0e0e0;
    padding:1rem;
    img{
        width:100%;
        height:250px;
        padding-bottom:1rem;
        opacity:0.7;
        cursor:pointer;
        transition: all .6s ease-out;
        &:hover{
            opacity:1;
        }
        @media(max-width:440px){
            height:150px;
        }
    }
    span{
        text-align:center;
        text-transform:uppercase;
        font-family: 'Nunito', sans-serif;
        padding-bottom:.8rem;
        display:block;
        color:#093c66;
        @media(max-width:440px){
            font-size:.9rem;
        }
    }
    small{
        color:#888;
        display:block;
        text-align:center;
    }
}
`