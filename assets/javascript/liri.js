// =============================================================================

// Dependencies

// =============================================================================

// Clients Id Spotify: b4cdce8ccfb441b5ac6620a1d10cb09e
// Clients Secret Spotify: 761cde64a2bd4290bc97b142646544e6
var keys    = require("./key.js");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");
var fs      = require("fs");

// Initialize Spotify API
var spotify = new Spotify({
    id    : "b4cdce8ccfb441b5ac6620a1d10cb09e",
    secret: "761cde64a2bd4290bc97b142646544e6"
});

// =============================================================================

// Functions

// =============================================================================
var getArtistNames = function(artist) {
    return artist.name;
};

var getMeSpotify = function(songName) {
    if (songName === undefined) {
        songName = "Whats my age again";
    }

    spotify.search(
        {
            type : "track",
            query: songName
        },
        function(err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }

            var songs = data.tracks.items;

            for (var i = 0; i < songs.length; i++) {
                console.log(i);
                console.log("artist(s): " + songs[i].artists.map(getArtistNames));
                console.log("song name: " + songs[i].name);
                console.log("preview song: " + songs[i].preview_url);
                console.log("album: " + songs[i].album.name);
                console.log("-----------------------------------");

            }
        }
    );
};
