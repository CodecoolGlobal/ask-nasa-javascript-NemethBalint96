import './App.css';
import Post from './components/Post';
import { getTodaysPost } from './Fetch';
import React, { useEffect, useState } from 'react';

function App() {
  const [post, setPost] = useState(null);
  
  useEffect(() => {
    let mounted = true;
    getTodaysPost().then(data => {
      if(mounted) {
        setPost(data);
      }
    })
    return () => mounted = false;
  }, [])

  return (
    <div className="App">
      <Post data={post}/>
    </div>
  );
}

export default App;
