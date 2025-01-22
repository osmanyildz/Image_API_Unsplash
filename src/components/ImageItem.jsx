import React from 'react'


function ImageItem({element}) {
  return (
    <div>

        <img className='showImage' src={element.urls.small} alt={element.description} />

    </div>
  )
}

export default ImageItem
