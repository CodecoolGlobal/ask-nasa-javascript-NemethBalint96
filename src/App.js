import './App.css';
import Post from './components/Post';
import { getPostByDate, getTodaysPost, getGallery } from './Fetch';
import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery';

function App() {
  const [post, setPost] = useState(null);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const maxDate = new Date().toISOString().slice(0, 10);
  const [main, setMain] = useState(false);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    let mounted = true;
    getTodaysPost().then(data => {
      if(mounted) {
        setPost(data);
        setMain(true);
      }
    });
    getGallery().then(data => {
      if(mounted) {
        setGallery(data);
      }
    });

    return () => mounted = false;
  }, [])

  function handleChange(e) {
    setDate(e.currentTarget.value);
    getPostByDate(e.currentTarget.value).then(data => {
      setPost(data);
    })
  }

  return (
    <div className="App">
      {main ?
        <>
        <button onClick={() => setMain(false)}>Gallery</button>
        <br></br>
        <input type="date" value={date} max={maxDate}
        onChange={handleChange}></input>
        <br></br>
        <Post data={post}/>
        </>
      :
        <>
        <button onClick={() => setMain(true)}>Go Back</button>
        <br></br>
        <Gallery data={gallery} />
        </>
      }
    </div>
  );
}

export default App;
