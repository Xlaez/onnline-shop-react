import React from 'react'
import { Nav, NavIcon, Bars, NavLink ,BarWrap} from './Navbar';

function Navbar({ toggle }) {
  const nav = {
    position: "sticky",
    left: 0,
    top: 0,
    zIndex: 1,
    opacity: 0.9,
  }
  return (
    <div style={nav}>
      <Nav>
        <NavLink to="/">Shopify</NavLink>
        <NavIcon>
          <BarWrap>
            <Bars onClick={toggle} />
          </BarWrap>
        </NavIcon>
      </Nav>
    </div>
  )
}

export default Navbar;