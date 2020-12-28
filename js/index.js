const APIURL = "https://api.themoviedb.org/3/movie/550?api_key=1faea5fb67d6de5facfc32bdb6ce8c7c";
// const IMGPATH = "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
const IMGPATH = "https://image.tmdb.org/t/p/w500";

const SEARCHAPI = "https://api.themoviedb.org/3/search/company?api_key=1faea5fb67d6de5facfc32bdb6ce8c7c&page=1";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");


// getMovies(APIURL);

// async function getMovies(url) {
//     const resp = await fetch(url);
//     const respData = await resp.json();

//     console.log(respData);

//     showMovies(respData.results);
// }

// function showMovies(movies) {
//     // clear main
//     main.innerHTML = "";

//     movies.forEach((movie) => {
//         const { poster_path, title, vote_average, overview } = movie;

//         const movieEl = document.createElement("div");
//         movieEl.classList.add("movie");

//         movieEl.innerHTML = `
//             <img
//                 src="${IMGPATH + poster_path}"
//                 alt="${title}"
//             />
//             <div class="movie-info">
//                 <h3>${title}</h3>
//                 <span class="${getClassByRate(
//                     vote_average
//                 )}">${vote_average}</span>
//             </div>
//             <div class="overview">
//                 <h3>Overview:</h3>
//                 ${overview}
//             </div>
//         `;

//         main.appendChild(movieEl);
//     });
// }

// function getClassByRate(vote) {
//     if (vote >= 8) {
//         return "green";
//     } else if (vote >= 5) {
//         return "orange";
//     } else {
//         return "red";
//     }
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const searchTerm = search.value;

//     if (searchTerm) {
//         getMovies(SEARCHAPI + searchTerm);

//         search.value = "";
//     }
// });


//inicializamos obtener peliculas

const getMovies = async (url) => {
    const resp = await fetch(url)
    .then(function(response){
        console.log("response = ", response);
        return response.json();
    })
    .then(function(data){
        console.log("data= ", data);
    })
    // const respData = await resp.json()
    // console.log(respData);
    showMovies();
    
}

getMovies(APIURL);

const showMovies = (movies) => {
    main.innerHTML = "";
    
    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview } = movie;
        
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        
        movieElement.innerHTML = /*html*/`
        <img src="${IMGPATH + poster_path}" alt="${title}"/>
        
        <div class="movie-info">
        <h3>${title}</h3>
            
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
                <h3>Overview:</h3>
                ${overview}
            </div>
            `;
            main.appendChild(movieElement);
        })
}

const getClassByRate = (vote) => {
    if( vote >= 8 ){
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }    
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = search.nodeValue;
    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);
        search.value = "";
    }
});


