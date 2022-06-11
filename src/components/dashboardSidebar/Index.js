import React from 'react'
import { useNavigate } from 'react-router-dom';

import { AllItems, AnalysysIcon, DashboardIcon, DashboardSidebarWrapper, EmojiSmile, ItemDash, ItemDiv, Items, LogoutIcon, MessageIcon, StoreIcon, UserName, UserNameDiv, ItemsFirst } from './DashSidebar';

//eslint-disable-next-line
function DashSidebar( { setState, setInnerBodyMode, innerBodyMode } ) {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem( 'x-access-store-user-allow-entry-subt' );
        localStorage.removeItem( 'x-access-store-user-allow-entry' );
        navigate( '/login' );
    }
    return (
        <DashboardSidebarWrapper>
            <UserNameDiv>
                <EmojiSmile />
                <UserName>Username</UserName>
            </UserNameDiv>
            <AllItems>
                <ItemsFirst>
                    <ItemDiv onClick={() => setState()} >
                        <DashboardIcon onClick={() => setInnerBodyMode( null )} />
                        <ItemDash >Dashboard</ItemDash>
                    </ItemDiv>
                    <ItemDiv >
                        <StoreIcon />
                        <Items>Home</Items>
                    </ItemDiv>
                    <ItemDiv>
                        <AnalysysIcon />
                        <Items>Analysys</Items>
                    </ItemDiv>
                    <ItemDiv>
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