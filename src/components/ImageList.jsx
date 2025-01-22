import React from 'react'
import ImageItem from './ImageItem'
import './ImageList.css'

function ImageList({imagesPlaceholder}) {
  return (
    <div>
        <div className="imageListContainer">

        {imagesPlaceholder.map((item,index)=>{
            console.log(item)
            return <ImageItem element={item} key={index}/>
        })}
        </div>
    </div>
  )
}

export default ImageList
