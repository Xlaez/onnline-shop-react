import React, { Fragment } from 'react'
import FirstInnerDash from '../dashUtils/FirstInnerDash'
import SecondaryDash from '../dashUtils/SecondaryDash'
import ThirdInnerdash from '../dashUtils/ThirdInnerdash'
import { InnerWrapper } from './DashboardBody'
import AddPrdouct from '../addPrdouct/Index'
import MyStore from '../store/Index'

function DashboardInner( { setMode, setInnerBodyMode, innerBodyMode, users, orders, totalOrders } ) {

    return (
        <Fragment>
            {
                innerBodyMode === 'add-product' && (
                    <AddPrdouct setInnerBodyMode={setInnerBodyMode} setMode={setMode} />
                )
            }
            {
                innerBodyMode === 'my-store' && (
                    <MyStore setInnerBodyMode={setInnerBodyMode} setMode={setMode} />
                )
            }
            {
                innerBodyMode === null && (
                    <InnerWrapper>
                        <FirstInnerDash setMode={setMode} setInnerBodyMode={setInnerBodyMode} />
                        <SecondaryDash users={users} totalOrders={totalOrders} />
                        <ThirdInnerdash orders={orders} />
                    </InnerWrapper>
                )
            }
        </Fragment>
    )
}

export default DashboardInner