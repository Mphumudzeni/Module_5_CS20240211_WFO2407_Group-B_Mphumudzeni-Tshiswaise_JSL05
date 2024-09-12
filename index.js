// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Once in a lifetime", artist: "Remain in Light", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Sugar", artist: "Maroon 5", genre: "Pop" },
    { title: "Special Affair", artist: " The internet", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "Bood Up", artist: " Ella Mai", genre: "R&B" },
    { title: "Dark Horse", artist: "Katy Perry", genre: "Pop" },
    { title: "Lets go crazy", artist: "Purple Rain", genre: "Rock" },
    { title: "Chain of Fools", artist: "Aretha Franklin", genre: "Blues"},
    { title: "Redbone", artist: " Donald Glover", genre: "R&B" },
    { title: "The Thrill Is Gone", artist: "B.B. King", genre: "Blues"},
    { title: "The Sky is Crying", artist: "Gary B.B. Coleman", genre: "Blues"},
    { title: "Super Freak", artist: "Rick James", genre: "Funk"},
    { title: "Brick House", artist: "The Commodores", genre: "Funk"},
    { title: "Play That Funky Music", artist: "Wild Cherry", genre: "Funk"},
    { title: "Let her go", artist: "Passenger", genre: "Pop" },
    { title: "I want you Around", artist: "Snoh Aalegra", genre: "R&B" },
    { title: "Come and Get your love", artist: "Redbone", genre: "Blues"},
    { title: "The Chain", artist: "Fleetwood Mac", genre: "Blues"},
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Funk"},
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Funk"},
   
   
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Rocket": "Blues",
    "Groot": "Funk",
    "Drax": "R&B",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlistsDiv = document.getElementById('playlists');
    // Iterate over each Guardian and generate a playlist based on their preferred genre
    for (const guardian in guardians) {
        const preferredGenre = guardians[guardian];
        const playlist = songs
            .filter(song => song.genre === preferredGenre)
            .map(song => `<p class="song"><span class="song-title">${song.title}</span> - ${song.artist}</p>`)
            .join('');

        const guardianPlaylistDiv = document.createElement('div');
        guardianPlaylistDiv.classList.add('playlists'); // Add the playlists class
        guardianPlaylistDiv.innerHTML = `<h2>${guardian}'s Playlist:</h2>${playlist}`;
        playlistsDiv.appendChild(guardianPlaylistDiv);
    }
}
// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);

