const movies = [];

function createMovieElement(movie) {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.innerHTML = `
        <h2>${movie.title}</h2>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Year:</strong> ${movie.year}</p>
    `;
    return movieElement;
}

function displayMovies() {
    const movieListContainer = document.getElementById('movieList');
    movieListContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = createMovieElement(movie);
        movieListContainer.appendChild(movieElement);
    });
}

function addMovie() {
    const titleInput = document.getElementById('title');
    const directorInput = document.getElementById('director');
    const yearInput = document.getElementById('year');

    const title = titleInput.value;
    const director = directorInput.value;
    const year = parseInt(yearInput.value);

    if (title && director && !isNaN(year)) {
        const newMovie = { title, director, year };
        movies.push(newMovie);
        displayMovies();

        // Clear the form inputs
        titleInput.value = '';
        directorInput.value = '';
        yearInput.value = '';
    } else {
        alert('Please enter valid information for all fields.');
    }
}

document.addEventListener('DOMContentLoaded', displayMovies);
