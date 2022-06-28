import React from 'react'
import { useNavigate } from 'react-router-dom';

import { AllItems, DashboardIcon, DashboardSidebarWrapper, EmojiSmile, ItemDash, ItemDiv, Items, LogoutIcon, MessageIcon, StoreIcon, UserName, UserNameDiv, ItemsFirst } from './DashSidebar';

//eslint-disable-next-line
function DashSidebar({ setState, setInnerBodyMode, innerBodyMode }) {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('x-access-store-user-allow-entry-subt');
        localStorage.removeItem('x-access-store-user-allow-entry');
        localStorage.removeItem('x-access-store-x-x-x-allow-entry-super-level-auth');

        navigate('/login');
    }

    const handleStateChange = () => {
        setInnerBodyMode(null)
        setState();
    }
    const handleChangeToMyStore = (prop) => {
        setInnerBodyMode(prop);
        setState();
    }
    return (
        <DashboardSidebarWrapper>
            <UserNameDiv>
                <EmojiSmile />
                <UserName>Username</UserName>
            </UserNameDiv>
            <AllItems>
                <ItemsFirst>
                    <ItemDiv onClick={() => handleStateChange()} >
                        <DashboardIcon />
                        <ItemDash >Dashboard</ItemDash>
                    </ItemDiv>
                    <ItemDiv onClick={() => handleChangeToMyStore('my-store')}>
                        <StoreIcon />
                        <Items>My Store</Items>
                    </ItemDiv>

                    <ItemDiv onClick={() => handleChangeToMyStore('message')}>
                        <MessageIcon />
                        <Items>Messages</Items>
                    </ItemDiv>
                </ItemsFirst>
                <ItemDiv onClick={() => handleLogout()}>
                    <LogoutIcon />
                    <Items>Logout</Items>
                </ItemDiv>
            </AllItems>
        </DashboardSidebarWrapper>
    )
}

export default DashSidebar