import React from "react";
import movieService from "@/services/movie-service";
import MovieCard from "@/components/movies/MovieCard";

interface Props {
  searchParams: { page: number };
}

export interface Movie {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
}

const MoviePage = async ({ searchParams: { page } }: Props) => {
  const pageNumber = page || 1;
  const res = await movieService.getMovies(page)
  
  const moviesData: Movie[] = await res.data.results;
  return (
    <main className="min-h-screen justify-between p-6">
      <h1 className="text-lg font-bold mb-6">Latest Movies</h1>
      <ul className="flex flex-row flex-wrap justify-center items-center">
        {moviesData.map((movie) => (
          <MovieCard
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            rating={movie.vote_average}
          />
        ))}
      </ul>
    </main>
  );
};

export default MoviePage;
