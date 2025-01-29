// Music data
const musicData = {
    'City of Stars': {
        artist: 'Ryan Gosling & Emma Stone',
        album: 'La La Land Soundtrack',
        year: 2016,
        relatedMovies: [
            {
                title: 'La La Land',
                year: 2016,
                genre: 'Musical/Romance',
                connection: 'The film\'s central love theme, representing dreams and romance in Los Angeles.'
            },
            {
                title: 'Singin\' in the Rain',
                year: 1952,
                genre: 'Musical/Romance',
                connection: 'A classic Hollywood musical that inspired La La Land\'s style and tone.'
            }
        ]
    },
    'Time': {
        artist: 'Hans Zimmer',
        album: 'Inception Soundtrack',
        year: 2010,
        relatedMovies: [
            {
                title: 'Inception',
                year: 2010,
                genre: 'Sci-Fi/Action',
                connection: 'The main theme that drives the emotional core of the dream-heist narrative.'
            },
            {
                title: 'The Dark Knight',
                year: 2008,
                genre: 'Action/Drama',
                connection: 'Another Nolan-Zimmer collaboration with similar emotional intensity.'
            }
        ]
    },
    'This Is Me': {
        artist: 'Keala Settle',
        album: 'The Greatest Showman Soundtrack',
        year: 2017,
        relatedMovies: [
            {
                title: 'The Greatest Showman',
                year: 2017,
                genre: 'Musical/Drama',
                connection: 'The breakthrough song that became an anthem for self-acceptance.'
            },
            {
                title: 'Moulin Rouge',
                year: 2001,
                genre: 'Musical/Romance',
                connection: 'Another spectacular musical celebration of outcasts and dreamers.'
            }
        ]
    },
    'S.T.A.Y.': {
        artist: 'Hans Zimmer',
        album: 'Interstellar Soundtrack',
        year: 2014,
        relatedMovies: [
            {
                title: 'Interstellar',
                year: 2014,
                genre: 'Sci-Fi/Drama',
                connection: 'The emotional centerpiece of the father-daughter relationship across space and time.'
            },
            {
                title: 'Contact',
                year: 1997,
                genre: 'Sci-Fi/Drama',
                connection: 'Another space exploration film with strong emotional family ties.'
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
const modal = document.getElementById('musicModal');
const closeBtn = document.querySelector('.close-btn');

items.forEach(item => {
    item.addEventListener('click', () => {
        const songTitle = item.querySelector('h3').textContent;
        const song = musicData[songTitle];
        
        document.getElementById('songTitle').textContent = songTitle;
        document.getElementById('songDetails').textContent = 
            `${song.artist} | ${song.album} (${song.year})`;
        
        const moviesList = document.getElementById('moviesList');
        moviesList.innerHTML = song.relatedMovies.map(movie => `
            <div class="related-item">
                <h4>${movie.title} (${movie.year})</h4>
                <p>${movie.genre}</p>
                <p class="connection">${movie.connection}</p>
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