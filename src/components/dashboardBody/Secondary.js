import React, { Fragment } from 'react'
import FirstInnerDash from '../dashUtils/FirstInnerDash'
import SecondaryDash from '../dashUtils/SecondaryDash'
import ThirdInnerdash from '../dashUtils/ThirdInnerdash'
import { InnerWrapper } from './DashboardBody'
import AddPrdouct from '../addPrdouct/Index'
import MyStore from '../store/Index'
import Messages from '../messages/Index'
import SingleMessage from '../messages/SingleMessage'

function DashboardInner( { setInnerBodyMode, innerBodyMode, users, orders, totalOrders } ) {

    return (
        <Fragment>
            {
                innerBodyMode === 'add-product' && (
                    <AddPrdouct setInnerBodyMode={setInnerBodyMode} />
                )
            }
            {
                innerBodyMode === 'my-store' && (
                    <MyStore setInnerBodyMode={setInnerBodyMode} />
                )
            }
            {
                innerBodyMode === 'message' && (
                    <Messages setInnerBodyMode={setInnerBodyMode} />
                )
            }
            {
                innerBodyMode === 'single-message' && (
                    <SingleMessage setInnerBodyMode={setInnerBodyMode} />
                )
            }
            {
                innerBodyMode === null && (
                    <InnerWrapper>
                        <FirstInnerDash setInnerBodyMode={setInnerBodyMode} />
                        <SecondaryDash users={users} totalOrders={totalOrders} />
                        <ThirdInnerdash orders={orders} />
                    </InnerWrapper>
                )
            }
        </Fragment>
    )
}

export default DashboardInner