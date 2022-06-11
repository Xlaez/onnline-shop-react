import React, { useCallback, useMemo, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { AddPrdouctInputs } from '../addPrdouct/addPrdouct';
import { acceptStyle, activeStyle, baseStyle, rejectStyle, viewImage, DragAndDropWrapper } from './DragAndDrop'

function DragAndDrop() {
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

    return (
        <DragAndDropWrapper>
            <div {...getRootProps( { style } )}>
                <AddPrdouctInputs {...getInputProps()} />
                <div>Select Product Image</div>

            </div>
            <div style={viewImage}>
                {thumbs}
            </div>
        </DragAndDropWrapper>
    )
}

export default DragAndDrop