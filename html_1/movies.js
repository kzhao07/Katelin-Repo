// Movie data
const movieData = {
    'Inception': {
        year: 2010,
        genre: 'Sci-Fi/Action',
        relatedSongs: [
            {
                title: 'Time',
                artist: 'Hans Zimmer',
                year: 2010,
                connection: 'The iconic main theme of Inception, perfectly capturing the film\'s mind-bending nature.'
            },
            {
                title: 'Dream Is Collapsing',
                artist: 'Hans Zimmer',
                year: 2010,
                connection: 'Intensifies during crucial dream sequence moments.'
            }
        ]
    },
    'La La Land': {
        year: 2016,
        genre: 'Musical/Romance',
        relatedSongs: [
            {
                title: 'City of Stars',
                artist: 'Ryan Gosling & Emma Stone',
                year: 2016,
                connection: 'The film\'s signature song about dreams and love in Los Angeles.'
            },
            {
                title: 'Another Day of Sun',
                artist: 'La La Land Cast',
                year: 2016,
                connection: 'Opens the film with an energetic celebration of Hollywood dreamers.'
            }
        ]
    },
    'Interstellar': {
        year: 2014,
        genre: 'Sci-Fi/Drama',
        relatedSongs: [
            {
                title: 'S.T.A.Y.',
                artist: 'Hans Zimmer',
                year: 2014,
                connection: 'Emotional core of the film\'s soundtrack, representing the father-daughter relationship.'
            },
            {
                title: 'Mountains',
                artist: 'Hans Zimmer',
                year: 2014,
                connection: 'Builds tension during the water planet sequence.'
            }
        ]
    },
    'The Greatest Showman': {
        year: 2017,
        genre: 'Musical/Drama',
        relatedSongs: [
            {
                title: 'This Is Me',
                artist: 'Keala Settle',
                year: 2017,
                connection: 'Powerful anthem about self-acceptance and empowerment.'
            },
            {
                title: 'The Greatest Show',
                artist: 'Hugh Jackman',
                year: 2017,
                connection: 'Opens and closes the film with spectacular energy.'
            }
        ]
    }
};

// Carousel functionality
let currentPosition = 0;
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const itemWidth = items[0].offsetWidth;
const itemsPerView = 3;

document.querySelector('.next-btn').addEventListener('click', () => {
    currentPosition = Math.max(currentPosition - 1, -(items.length - itemsPerView));
    updateCarousel();
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentPosition = Math.min(currentPosition + 1, 0);
    updateCarousel();
});

function updateCarousel() {
    const shift = currentPosition * (itemWidth + 32); // 32px is the gap
    track.style.transform = `translateX(${shift}px)`;
}

// Modal functionality
const modal = document.getElementById('movieModal');
const closeBtn = document.querySelector('.close-btn');

items.forEach(item => {
    item.addEventListener('click', () => {
        const movieTitle = item.querySelector('h3').textContent;
        const movie = movieData[movieTitle];
        
        document.getElementById('movieTitle').textContent = movieTitle;
        document.getElementById('movieDetails').textContent = 
            `${movie.year} | ${movie.genre}`;
        
        const songsList = document.getElementById('songsList');
        songsList.innerHTML = movie.relatedSongs.map(song => `
            <div class="related-item">
                <h4>${song.title}</h4>
                <p>${song.artist} (${song.year})</p>
                <p class="connection">${song.connection}</p>
            </div>
        `).join('');
        
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});