import React from 'react'
import RecentOrder from './RecentOrder'
import { InnnerDashGridWrapper } from './ThirdInnerDashStyle'

function ThirdInnerdash( { orders } ) {
    return (
        <InnnerDashGridWrapper>
            <RecentOrder orders={orders} />
        </InnnerDashGridWrapper>
    )
}

export default ThirdInnerdash