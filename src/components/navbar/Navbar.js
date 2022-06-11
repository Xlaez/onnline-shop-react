import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Nav = styled.nav`
  position:sticky;
  left:0;
  top:0;
  background: #3a8bcd;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled( Link )`
  color: #fff;
  font-size: 2rem;
  font-family: 'Overlock', cursive;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  text-transform:uppercase;
  @media(max-width: 400px) {
    position: absolute;
    top: 20px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  align-items:center;
  position: absolute;
  padding-top:30px;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
`;

export const Bars = styled( GiHamburgerMenu )`
  font-size: 2rem;
  transform: translate(-50%, -15%);
  /* color:#000; */
`;

export const BarWrap = styled.div`
/* padding:.8rem;
  border-radius:.3rem;
  background:#ccc; */
`