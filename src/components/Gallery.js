import React from 'react'

function Gallery(props) {
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly', alignContent: 'center'}}>
    {props.data.map((item) => 
      <img src={item.url} alt={item.title}/>
    )}
    </div>
  )
}

export default Gallery
