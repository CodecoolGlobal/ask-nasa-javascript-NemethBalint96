import React, { useState } from 'react'
import Modal from 'react-modal';
import Post from './Post';

function Img(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <img onClick={() => setIsModalOpen(true)}
      style={{maxWidth: '650px'}} src={props.data.url} alt={props.data.title}/>
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} >
        <Post data={props.data}></Post>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </>
  )
}

export default Img
