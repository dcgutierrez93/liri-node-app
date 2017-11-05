# liri-node-app
liri-node-app is a Language Interpretation and Recognition Interface

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
Be sure to have Node installed on your local machine <br>
Once cloned on your local machine cd your way into the projects directory and run <br>
`npm install`

### What Are The Commands And What Each Will Do
1. `node liri.js my-tweets`
    * This will show last 20 tweets and when they were created at in your terminal/bash window.

2. `node liri.js spotify-this-song '<song name here>'`
    * This will display Artist(s), The Song Name, A Preview of the Link of the Song Spotify and the Album.

3. `node liri.js movie-this '<movie name here>'`
    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.

4. `node liri.js do-what-it-says`
    * It will run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
    * Feel free to change the text in that document to test out the feature for other commands.

### Built with
* Node.js
* Twitter API
* Spotify API
* Request API
* OMDB API (The Open Movie Database)

### Author
* David C. Gutierrez
