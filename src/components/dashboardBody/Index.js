import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react'
import { DashboardBodyWrapper, LoaderWrapper } from './DashboardBody'
import DashboardHead from '../dashboardHead/Index'
import DashboardInner from './Secondary'
import DashSidebar from '../dashboardSidebar/Index'
import { api } from '../../utils/Api'
import LImage from '../../images/spinning.png';
import { useNavigate } from 'react-router-dom'

function DashboardBody({ state, setState, setInnerBodyMode, innerBodyMode }) {
    const navigate = useNavigate();
    const [users, setUsers] = useState(0);
    const [orders, setOrders] = useState([]);
    const [totalOrders, setTotalOrders] = useState(0);

    const headers = {
        Authorization: localStorage.getItem('x-access-store-user-allow-entry'),
    }
    async function getTotalUsers() {
        const req = await fetch(`${api}/auth/total-users`, {
            headers,
        });
        const res = await req.json();
        if (req.ok) {
            setUsers(res);
        } else {
            req.status === 403 || req.status === 400 ? navigate('/login') : console.log('error');
        }
    };

    async function getOrders() {
        const req = await fetch(`${api}/prod/total/orders`, {
            headers,
            method: 'POST',
        });
        const res = await req.json();
        if (req.ok) {
            setTotalOrders(res.data.total);
            setOrders(res.data.orders);
        }
    }

    useLayoutEffect(() => {
        getTotalUsers();
    }, []);

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <Fragment>
            {
                state ? (
                    <DashSidebar setState={setState} setInnerBodyMode={setInnerBodyMode} innerBodyMode={innerBodyMode} />
                ) : (

                    <Fragment>
                        {
                            users > 0 ? (
                                <DashboardBodyWrapper>
                                    <DashboardHead setState={setState} />
                                    <DashboardInner state={state} innerBodyMode={innerBodyMode} setInnerBodyMode={setInnerBodyMode} users={users} orders={orders} totalOrders={totalOrders} />
                                </DashboardBodyWrapper>
                            ) : (
                                <LoaderWrapper>
                                    <img src={LImage} alt="" />
                                </LoaderWrapper>
                            )
                        }
                    </Fragment>
                )
            }
        </Fragment>
    )
}

export default DashboardBody
