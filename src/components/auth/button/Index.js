import React from 'react'
import { FormButton, FormButtonContainer } from './Button'

function Index( { props, handleReistration } ) {
    return (
        <FormButtonContainer>
            <FormButton type="submit" onMouseOver={() => handleReistration()}>
                {props}
            </FormButton>
        </FormButtonContainer>
    )
}

export default Index