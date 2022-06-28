import React, { useCallback, useMemo, useState, useEffect } from 'react'
import { AddPrdouctButton, AddPrdouctGrid, AddPrdouctForm, AddPrdouctLabel, AddPrdouctInputs, AddPrdouctWrapper, AddPrdouctSelect } from './addPrdouct'
// import DragAndDrop from '../dragAndDrop/Index'
import { AngleRightBtn, ButtonArranger, ButtonBeautiful, FirstInnerStyle, FirstInnerStyleH1, FirstInnerStyleHeaderBody, Small1, Small2, SvgStore } from '../dashUtils/FirstInnerDashStyle'
import { acceptStyle, activeStyle, baseStyle, DragAndDropWrapper, rejectStyle, viewImage } from '../dragAndDrop/DragAndDrop';
import { useDropzone } from 'react-dropzone';
import { api } from '../../utils/Api';
import { useNavigate } from 'react-router-dom';

//eslint-disable-next-line
function AddPrdouct( { setInnerBodyMode } ) {
    const navigate = useNavigate();
    const [ files, setFiles ] = useState( [] );
    const onDrop = useCallback( acceptedFiles => {
        setFiles( acceptedFiles.map( file => Object.assign( file, {
            preview: URL.createObjectURL( file )
        } ) ) );
    }, [] );

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone( {
        onDrop,
        accept: 'image/jpeg, image/png, image/jpg'
    } );

    const thumbs = files.map( file => (
        <div key={file.name}>
            <img
                src={file.preview}
                alt={file.name}
            />
        </div>
    ) );

    useEffect( () => () => {
        files.forEach( file => URL.revokeObjectURL( file.preview ) );
    }, [ files ] );

    const style = useMemo( () => ( {
        ...baseStyle,
        ...( isDragActive ? activeStyle : {} ),
        ...( isDragAccept ? acceptStyle : {} ),
        ...( isDragReject ? rejectStyle : {} )
    } ), [
        isDragActive,
        isDragReject,
        isDragAccept
    ] );
    const token = localStorage.getItem( 'x-access-store-user-allow-entry' );
    // const refreshToken = localStorage.getItem( 'x-access-store-user-allow-entry-subt' );
    const userId = localStorage.getItem( 'x-access-store-user-special' )

    const handlesubmitForm = async ( e ) => {
        e.preventDefault();

        const formData = new FormData();
        var name = document.getElementById( "name" ).value;
        var descr = document.getElementById( "descr" ).value;
        var category = document.getElementById( "category" ).value;
        var price = document.getElementById( "price" ).value;
        var prodNum = document.getElementById( "prodNum" ).value;
        var discount = document.getElementById( "discount" ).value;
        formData.append( 'name', name );
        formData.append( 'category', category );
        formData.append( 'price', price );
        formData.append( 'descr', descr );
        formData.append( 'prodNum', prodNum );
        formData.append( 'discount', discount );
        formData.append( 'image', files[ 0 ] );

        const req = await fetch( `${api}/prod`, {
            method: 'POST',
            body: formData,
            headers: {
                Authorization: token,
                userAccess: userId,
            }
        } )
        if ( req.ok ) {
            console.log( 'successful' );
        } else {
            console.log( 'an error occured' );
        }
    }
    return (
        <AddPrdouctWrapper>
            <FirstInnerStyle>
                <FirstInnerStyleHeaderBody>
                    <FirstInnerStyleH1>
                        Add product
                    </FirstInnerStyleH1>
                    <ButtonArranger>
                        <Small1>Add product</Small1>
                        <AngleRightBtn />
                        <Small2 onClick={() => navigate( '/' )}>Home</Small2>
                    </ButtonArranger>
                </FirstInnerStyleHeaderBody>
                <ButtonBeautiful onClick={() => setInnerBodyMode( 'my-store' )}>
                    <SvgStore />
                    <span>My Store</span>

                </ButtonBeautiful>
            </FirstInnerStyle>
            <AddPrdouctForm onSubmit={( e ) => handlesubmitForm( e )}>
                <AddPrdouctGrid>
                    <div>

                        <div>
                            <AddPrdouctLabel>Name of product</AddPrdouctLabel>
                            <AddPrdouctInputs type="text" name='name' id='name' />
                        </div>
                        <div>
                            <AddPrdouctLabel>Product description</AddPrdouctLabel>
                            <AddPrdouctInputs type="text" name='descr' id='descr' />
                        </div>
                        <div>
                            <AddPrdouctLabel>Amount of products in stock</AddPrdouctLabel>
                            <AddPrdouctInputs type="number" name='prodNum' id='prodNum' />
                        </div>
                    </div>
                    <div>

                        <div>
                            <AddPrdouctLabel>Product category</AddPrdouctLabel>
                            <AddPrdouctSelect name='category' id='category'>
                                <option value="women" key="1">Women</option>
                                <option value="men" key="2">Men</option>
                                <option value="children" key="3">Children</option>
                                <option value="body-sprays" key="4">Body sprays</option>
                            </AddPrdouctSelect>
                        </div>
                        <div>
                            <AddPrdouctLabel>Product Price</AddPrdouctLabel>
                            <AddPrdouctInputs name="price" type="number" id='price' />
                        </div>
                        <div>
                            <AddPrdouctLabel>Product discount</AddPrdouctLabel>
                            <AddPrdouctInputs name="discount" type="number" id='discount' />
                        </div>
                    </div>
                </AddPrdouctGrid>
                <div>
                    {/* <DragAndDrop /> */}
                    <DragAndDropWrapper>
                        <div {...getRootProps( { style } )}>
                            <AddPrdouctInputs {...getInputProps()} />
                            <div>Select Product Image</div>

                        </div>
                        <div style={viewImage}>
                            {thumbs}
                        </div>
                    </DragAndDropWrapper>
                </div>
                <div className='btn-div'>
                    <AddPrdouctButton>Add to store</AddPrdouctButton>
                </div>
            </AddPrdouctForm>
        </AddPrdouctWrapper>
    )
}

export default AddPrdouct