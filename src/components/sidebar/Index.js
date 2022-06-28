import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap, SidebarRouteSignout } from './Sidebar';

function Sidebar({ isOpen, toggle }) {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('x-access-store-user-allow-entry-subt');
    localStorage.removeItem('x-access-store-user-allow-entry');
    localStorage.removeItem('x-store-admin-message-id');
    localStorage.removeItem('x-access-store-x-x-x-allow-entry-super-level-auth');
    navigate('/login');
  }
  const isAdmin = localStorage.getItem('x-access-store-x-x-x-allow-entry-super-level-auth');
  const userToken = localStorage.getItem("x-access-store-user-allow-entry")

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        {
          isAdmin === 'true' ? (
            <SidebarLink to="/admin/dashboard">Dashboard</SidebarLink>
          ) : (
            <SidebarLink to='/'>Home</SidebarLink>
          )
        }
        <SidebarLink to="/all-product">All Proucts</SidebarLink>
        <SidebarLink to="/checkout">Checkout</SidebarLink>
        <SidebarLink to="/contact">Contact</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        {
          userToken ? (
            <SidebarRouteSignout onClick={() => handleLogout()}>Sign Out</SidebarRouteSignout>
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