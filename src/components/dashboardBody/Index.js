import React, { Fragment, useEffect, useState } from 'react'
import { DashboardBodyWrapper } from './DashboardBody'
import DashboardHead from '../dashboardHead/Index'
import DashboardInner from './Secondary'
import DashSidebar from '../dashboardSidebar/Index'
import { api } from '../../utils/Api'

function DashboardBody( { setMode, state, setState, setInnerBodyMode, innerBodyMode } ) {
    const [ users, setUsers ] = useState( 0 );
    const [ orders, setOrders ] = useState( [] );
    const [ totalOrders, setTotalOrders ] = useState( 0 );

    const headers = {
        Authorization: localStorage.getItem( 'x-access-store-user-allow-entry' ),
    }
    async function getTotalUsers() {
        const req = await fetch( `${api}/auth/total-users`, {
            headers,
        } );
        const res = await req.json();
        setUsers( res );
    };

    async function getOrders() {
        const req = await fetch( `${api}/prod/total/orders`, {
            headers,
            method: 'POST',
        } );
        const res = await req.json();
        if ( req.ok ) {
            setTotalOrders( res.data.total );
            setOrders( res.data.orders );
        }
    }

    useEffect( () => {
        getTotalUsers();
    }, [] );

    useEffect( () => {
        getOrders();
    }, [] );

    return (
        <Fragment>
            {
                state ? (
                    <DashSidebar setState={setState} setInnerBodyMode={setInnerBodyMode} />
                ) : (

                    <DashboardBodyWrapper>
                        <DashboardHead setState={setState} />
                        <DashboardInner setMode={setMode} state={state} innerBodyMode={innerBodyMode} setInnerBodyMode={setInnerBodyMode} users={users} orders={orders} totalOrders={totalOrders} />
                    </DashboardBodyWrapper>
                )
            }
        </Fragment>
    )
}

export default DashboardBody