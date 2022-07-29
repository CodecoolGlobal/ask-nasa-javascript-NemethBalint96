import React from 'react'
import Img from './Img';

function Gallery(props) {
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly', alignContent: 'center'}}>
    {props.data.map((item) => (
      <Img data={item}/>
    ))}
    </div>
  )
}

export default Gallery
