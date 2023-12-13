import { Movie } from "../../(main)/page";
import MovieCard from "@/components/movies/MovieCard";
import SearchBox from "../../../../components/movies/SearchBox";
import SearchPagination from "../../../../components/movies/SearchPagination";
import movieService from "@/services/movie-service";

interface Props {
  searchParams: { query: string; page: number };
}
const search = async ({
  searchParams: { query: searchQuery, page },
}: Props) => {
  let movieList;
  const searchPage = page || 1;

  if (searchQuery) {
    const res = await movieService.getFilteredMovies(searchQuery, searchPage);
    const searchMovies: Movie[] = await res.data.results;
    movieList = searchMovies.map((movie) => (
      <MovieCard
        key={movie.title}
        id={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        rating={movie.vote_average}
      />
    ));
  }

  return (
    <>
      <ul className="flex flex-row flex-wrap justify-center items-center">
        {searchQuery && movieList}
      </ul>
      {searchQuery && <SearchPagination searchQuery={searchQuery} />}
    </>
  );
};

export default search;
