import React from 'react'
import { Category, Button } from './Category';

//eslint-disable-next-line
function CategorySort( { setCurrentRoute, currentRoute } ) {

    return (
        <Category>
            <Button className={`${currentRoute === 'prod/all/category/men' ? 'current' : ''}`} onClick={() => setCurrentRoute( 'prod/all/category/men' )}>
                men cloths
            </Button>
            <Button className={`${currentRoute === 'prod/all/category/women' ? 'current' : ''}`} onClick={() => setCurrentRoute( 'prod/all/category/women' )}>
                women cloths
            </Button>
            <Button className={`${currentRoute === 'prod/all/category/children' ? 'current' : ''}`} onClick={() => setCurrentRoute( 'prod/all/category/children' )}>
                children cloths
            </Button>
            <Button className={`${currentRoute === 'prod' ? 'current' : ''}`} onClick={() => setCurrentRoute( 'prod' )}>
                random products
            </Button>
        </Category>

    )
}

export default CategorySort