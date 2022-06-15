import React from 'react'
import { FirstFLex, OnlyIcon, RecentOrderStrong, RecentOrdersWrapper, SecondFlex, SecondFlexBtn, SecondFlexTable, SecondFlexTable2 } from './RecentOrderStyle'

function RecentOrder( { orders } ) {
    return (
        <RecentOrdersWrapper>
            <FirstFLex>
                <RecentOrderStrong>Recent Orders</RecentOrderStrong>
                <OnlyIcon />
            </FirstFLex>
            <SecondFlex>
                <SecondFlexTable>
                    <tbody>
                        <tr className='first-t' key="0">
                            <th className='first-t-user'>User</th>
                            <th className='first-t-date'>Date of Order</th>
                            <th className='first-t-status'>Status</th>
                        </tr>
                        {
                            orders.map( ( i ) => {
                                return (
                                    <tr className='second-t' key={i._id}>
                                        <td className='second-t-user'>{i.user.email}</td>
                                        <td className='second-t-date'>{new Date( i.createdAt ).toLocaleDateString()}</td>
                                        <td className='second-t-status'>
                                            <SecondFlexBtn>
                                                completed
                                            </SecondFlexBtn>
                                        </td>
                                    </tr>
                                )
                            } )
                        }

                    </tbody>

                </SecondFlexTable>
                <SecondFlexTable2>
                    <tbody>
                        <tr className='first-t' key="0">
                            <th className='first-t-user'>User</th>
                            <th className='first-t-date'>Date of Order</th>
                        </tr>
                        {
                            orders.map( ( i ) => {
                                return (
                                    <tr className='second-t' key={i._id}>
                                        <td className='second-t-user'>{i.user.email}</td>
                                        <td className='second-t-date'>{new Date( i.createdAt ).toLocaleDateString()}</td>

                                    </tr>
                                )
                            } )
                        }

                    </tbody>

                </SecondFlexTable2>
            </SecondFlex>
        </RecentOrdersWrapper>
    )
}

export default RecentOrder