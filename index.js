
const apikey = "bbfbd3744c8bf9d4bf9de18f180b4d6c";

const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search");
const results = document.getElementById("results");


let movies = []

searchButton.addEventListener("click", () => {
    alert("you click meeeeeeeeeeeeee")
})


function fetchPopularMovies() {
    url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`;

    let response = fetch(url);

    response.then(async (data) => {
        let fetchedData = await data.json();

        movies = fetchedData.results;
        displayMovies();
    })
}


function displayMovies() {
    for (let i = 0; i < movies.length; i++) {
        renderMovies(movies[i]);
    }
}


function renderMovies(movie){
    let card = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h2");

    card.classList.add("movie-card");

    img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    title.textContent = movie.title;

    card.appendChild(img);
    card.appendChild(title);

    results.appendChild(card);

}




fetchPopularMovies(); 



