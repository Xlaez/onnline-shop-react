import React from 'react'
import { HamburgerMenu, HeadWrapper, PriHeadWrapper, SecHeadWrapper, TextWrap, ImageWrap, BellIcon } from './dashboardHead'

import image from '../../images/product-05.jpg';

function DashboardHead( { setState } ) {
    return (
        <HeadWrapper>
            <PriHeadWrapper>
                <HamburgerMenu onClick={() => setState()} />
                <TextWrap>Sidebar</TextWrap>
            </PriHeadWrapper>
            <SecHeadWrapper>
                <BellIcon />
                <ImageWrap src={image} />
            </SecHeadWrapper>
        </HeadWrapper>
    )
}

export default DashboardHead