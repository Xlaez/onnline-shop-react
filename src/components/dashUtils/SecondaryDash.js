import React from 'react'
import { CalendarDayFillIcon, CalendarDayFillIconPack, CurrencyDollarIcon, CurrencyDollarIconPack, Numbers, PeopleFillIcon, PeopleFillIconPack, SecondaryDashIndivdualWrap, SecondaryDashWrapper, TextFieldGrid, TextBeneath } from './SecondaryDashStyle'

function SecondaryDash( { users, totalOrders } ) {
    return (
        <SecondaryDashWrapper>
            <SecondaryDashIndivdualWrap>
                <CalendarDayFillIconPack>
                    <CalendarDayFillIcon />
                </CalendarDayFillIconPack>
                <TextFieldGrid>
                    <Numbers>{totalOrders}</Numbers>
                    <TextBeneath>Orders</TextBeneath>
                </TextFieldGrid>
            </SecondaryDashIndivdualWrap>
            <SecondaryDashIndivdualWrap>
                <PeopleFillIconPack>
                    <PeopleFillIcon />
                </PeopleFillIconPack>
                <TextFieldGrid>
                    <Numbers>{users}</Numbers>
                    <TextBeneath>Users</TextBeneath>
                </TextFieldGrid>
            </SecondaryDashIndivdualWrap>
            <SecondaryDashIndivdualWrap>
                <CurrencyDollarIconPack>
                    <CurrencyDollarIcon />
                </CurrencyDollarIconPack>
                <TextFieldGrid>
                    <Numbers>$2583</Numbers>
                    <TextBeneath>Total Sales</TextBeneath>
                </TextFieldGrid>
            </SecondaryDashIndivdualWrap>
        </SecondaryDashWrapper>
    )
}

export default SecondaryDash