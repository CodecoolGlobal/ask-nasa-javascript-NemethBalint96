import './App.css';
import Post from './components/Post';
import { getPostByDate, getTodaysPost } from './Fetch';
import React, { useEffect, useState } from 'react';

function App() {
  const [post, setPost] = useState(null);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const maxDate = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    let mounted = true;
    getTodaysPost().then(data => {
      if(mounted) {
        setPost(data);
      }
    })
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
      <input type="date"
        value={date}
        max={maxDate}
        onChange={handleChange}></input><br></br>
      {post && <Post data={post}/>}
    </div>
  );
}

export default App;
