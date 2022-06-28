import React, { useState, useEffect } from 'react'
import DashboardBody from '../../components/dashboardBody/Index';
import DashSidebar from '../../components/dashboardSidebar/Index';
import { WrappingDash } from './Style';
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard() {
    //eslint-disable-next-line
    const navigate = useNavigate()
    let [state, setCurrentState] = useState(false);
    const [innerBodyMode, setInnerBodyMode] = useState(null);
    const expiryDate = localStorage.getItem('expiryDate');
    const logoutHandler = () => {
        localStorage.removeItem('x-access-store-user-allow-entry');
        localStorage.removeItem('x-access-store-user-allow-entry-subt');
        localStorage.removeItem('x-access-store-user-special')
        localStorage.removeItem('x-access-store-x-x-x-allow-entry-super-level-auth')
        navigate('/login');
    };
    var remainingMilliseconds;
    useEffect(() => {
        if (new Date(expiryDate) <= new Date()) {
            logoutHandler();
        };
        remainingMilliseconds =
            new Date(expiryDate).getTime() - new Date().getTime();
        setAutoLogout(remainingMilliseconds);
    }, []);
    function setAutoLogout(milliseconds) {
        setTimeout(() => {
            logoutHandler(milliseconds);
        }, milliseconds);
    };



    const setState = () => {
        setCurrentState(!state);
    };
    return (
        <WrappingDash>
            {
                !state ? (
                    <DashSidebar setInnerBodyMode={setInnerBodyMode} innerBodyMode={innerBodyMode} />
                ) : ""
            }
            <DashboardBody setState={setState} state={state} innerBodyMode={innerBodyMode} setInnerBodyMode={setInnerBodyMode} />
        </WrappingDash>
    )
}
