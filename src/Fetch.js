export function getTodaysPost() {
  return fetch('https://api.nasa.gov/planetary/apod?api_key=SiMRkZXqAg7DNjt0A5UYqrRxdbmBBt3uQxvEUBj2')
    .then(response => response.json())
}

export function getPostByDate(date) {
  return fetch(`https://api.nasa.gov/planetary/apod?api_key=goKcJW5jRlSawdjoOH0R3dVrMsgf1YWvyyuao9Jt&date=${date}`)
      .then(response => response.json())
}