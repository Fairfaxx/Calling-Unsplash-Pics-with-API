import React from 'react';

const ImageList = (props) => {
   const images = props.images.map((image) => {
        console.log(image.urls.regular)
        return <img src={image.urls.regular} />
    })


    return <div>Images List: {images}</div>
};


export default ImageList;