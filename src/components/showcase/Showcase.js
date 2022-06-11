import styled from 'styled-components';

export const ShowcaseContainer = styled.div`
    border-top:1px solid #e7e7e7;
    padding:4rem 2px;
    padding-bottom:1rem;
    overflow:hidden;
    margin-bottom:1rem;
    .showcase{
        margin:0 auto;
        max-width:85vw;
        display:grid;
        grid-template-columns:repeat(3, 1fr);
        grid-gap:1rem;
        overflow:hidden;
        @media(max-width: 440px){
        grid-template-columns:repeat(1, 1fr);
        max-width:97vw;
        padding-left:0;
        padding-right:0;
    }
    
}
`
export const Box = styled.div`
transition:all 1s ease-out;
    .showcase-item{
        position:relative;
        padding-bottom:1rem;
        width:100%;
        overflow:hidden;
        opacity:0.9;
        border:1px solid #e0e0e0;
        padding:1rem;
        &:hover{
            cursor:pointer;
            img{
                opacity:0.3;
            }
            .cart{
            transform: translateY(0);
        }
        @media(max-width:440px){
            border:1px solid transparent;
            border-bottom:1px solid #e0e0e0;
        }
    }
    }
    .cart{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        position:absolute;
        top:40%;
        left:30%;
        transform: translateY(-200px);
        transition: all 1s ease-in-out;
        @media(max-width:440px){
            left:25%;
        }
        button{
            text-transform:uppercase;
            padding:10px 30px;
            background:#3a8bcd;
            cursor:pointer;
            color:#fff;
            border:1px solid #3a8bcd;
            border-radius:3px;
            display:flex;
            align-items:center;
            justify-content:center;
            gap:.6rem;
            svg{
                font-size:1rem;
            }
            &:hover{
                background:#093c66;
                color:yellow;
                border:1px solid #093c66;
            }
        }
    }
    img{
        opacity:0.9;
        height:320px;
        max-width:100%;
        width:100%;
    @media(max-width: 440px){
        width:100%;
        height:250px;
    }
    }
    .other{
        display:flex;
        flex-direction:column;
        align-items:center;
        padding-bottom:1rem;
        span{
            text-transform:uppercase;
            font-size:1.1rem;
            padding-bottom:1rem;
            color:#093c66;
        }
        small{
            color:#888;
        }
    }
`