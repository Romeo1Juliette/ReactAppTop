let APIkey='434442da20d69d9cadeb1f88f83ac2c5';

const GetMovies=(query,page)=>{
    return fetch("http://api.themoviedb.org/3/search/movie?api_key="+APIkey+"&query="+query+"&page="+page);
}

const GetImage=(path)=>{
    return "https://image.tmdb.org/t/p/w300"+path;
}

const Tmdbm={Movies:GetMovies,Image:GetImage}
export default Tmdbm
