import React from 'react'
import { apiHost } from '../../utils/Api'
import ExclusiveProducts from '../exclusive/Index'
import { IntermediateWrapper, Display } from './Intermediate'

function Intermediate( { exclusiveProducts } ) {

    return (
        <IntermediateWrapper>
            <ExclusiveProducts />
            <Display>
                {
                    exclusiveProducts.map( ( i ) => {
                        return (
                            <div key={i.id}>
                                {/* <img src={i.image} alt="" /> */}
                                <img src={`${apiHost}/${i.image}`} alt="" />
                                <span>{i.name}</span>
                                <small>#{i.price}</small>
                            </div>
                        )
                    } )
                }
            </Display>
        </IntermediateWrapper>
    )
}

export default Intermediate