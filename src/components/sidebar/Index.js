import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './Sidebar';

function Sidebar( { isOpen, toggle, setMode } ) {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem( 'x-access-store-user-allow-entry-subt' );
    localStorage.removeItem( 'x-access-store-user-allow-entry' );
    navigate( '/' );
  }
  const userToken = localStorage.getItem( "x-access-store-user-allow-entry" )

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="#" onClick={() => setMode( null )}>Dashboard</SidebarLink>
        <SidebarLink to="/all-product">All Proucts</SidebarLink>
        <SidebarLink to="/checkout">Checkout</SidebarLink>
        <SidebarLink to="/contact">Contact</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        {
          userToken ? (
            <SidebarRoute to="#" onClick={() => handleLogout()}>Sign Out</SidebarRoute>
          ) :
            (
              <SidebarRoute to="/login">Sign In</SidebarRoute>
            )
        }
      </SideBtnWrap>

    </SidebarContainer>
  )
}

export default Sidebar