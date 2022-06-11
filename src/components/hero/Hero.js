import styled from 'styled-components';
import Image from '../../images/banner-bg.jpg';

export const HeroSec = styled.main`
display:absolute;
background:linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)),url(${Image});
opacity:0.9;
width:100%;
height:70vh;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom:3rem;
div{
    text-align:center;
    strong{
        text-align:center;
        text-transform:uppercase;
        font-family: 'Nunito', sans-serif;
        font-size:1.9rem;
        color:#fff;
        z-index:1;
        font-weight:700;
        padding-bottom:3rem;
    }
    div{
        width:500px;
        overflow-wrap: break-word;
        text-align:center;   
    
    p{
        text-align:center;
        font-family: 'Overlock', cursive;
        font-size:1.2rem;
        font-weight:600;
        text-transform:italic;
        line-height:1.6;
        color:#fff;
        z-index:1;
    }
    }
}
@media(max-width:440px){
    div{
        strong{
            font-size:1.3rem;
        }
        div{
            p{
                font-size:1.1rem;
            }
        width:80vw;
        }
    }
}
`