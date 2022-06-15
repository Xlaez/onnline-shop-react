import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

export const ProductsWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    padding:2rem 0;
    margin:0 auto;
    max-width:85vw;
`

export const NavigateButtons = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    gap:1rem;
    align-items:center;

`

export const NavButton = styled.button`
background:${( { currentPage, num } ) => ( currentPage === num ? '#093c66' : '#ccc' )};
border:1px solid #ccc;
border-radius:3px;
padding:0.7rem;
cursor:pointer;
color:${( { currentPage, num } ) => ( currentPage === num ? '#fff' : '#093c66' )}
transition:all 1s ease-in-out;
&:hover{
    background:#093c66;
    color:#fff;
}
`
export const ButtonNavPrev = styled( FaAngleLeft )`
color:#131313;
font-family:1.1rem;
cursor:pointer;
`

export const ButtonNavNext = styled( FaAngleRight )`
color:#131313;
font-family:1.1rem;
cursor:pointer;
`