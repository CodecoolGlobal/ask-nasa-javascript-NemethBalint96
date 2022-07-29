export function getTodaysPost() {
    return fetch('https://api.nasa.gov/planetary/apod?api_key=SiMRkZXqAg7DNjt0A5UYqrRxdbmBBt3uQxvEUBj2')
      .then(response => response.json())
  }