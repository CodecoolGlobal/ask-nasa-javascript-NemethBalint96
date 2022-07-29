import React from 'react'

function Post (props) {
  let media;
  if (props.data.media_type === 'image') {
    media = <img src={props.data.url} alt={props.data.title}></img>;
  } else if (props.data.media_type === 'video'){
    media = <iframe src={props.data.url} title={props.data.title}></iframe>;
  }

  return (
    <>
      {media}
      <h1>{props.data.title}</h1>
      <p>{props.data.explanation}</p>
    </>
  )
}

export default Post
