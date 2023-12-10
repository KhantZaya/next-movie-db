import { apiClient } from "./api-client";

class MovieService {
    getMovies (page : number) {
        const request = apiClient.get(`discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`)
        return request
    }
    getMovieInfo (id : number) {
        return apiClient.get(`movie/${id}`)
    }
    getFilteredMovies (searchQuery:string, page:number) {
        return apiClient.get(
            `/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${page}`
          );
    }
}

export default new MovieService();