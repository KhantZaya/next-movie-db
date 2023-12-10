import movieService from "@/services/movie-service";
import BackButton from "@/components/movies/BackButton";

interface Props {
  params: { id: number };
}

interface MovieDetail {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  status: string;
  runtime: number;
  genres: { id: number; name: string }[];
  poster_path: string;
  backdrop_path: string;
}

const MovieDetailPage = async ({ params: { id } }: Props) => {
  const res = await movieService.getMovieInfo(id)
  const movieData: MovieDetail = await res.data;

  return (
    <div>
      <div
        className="hero h-96 flex relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movieData.backdrop_path})`,
        }}
      >
        <BackButton />
        <div className="hero-content text-start text-white">
          <div className="max-w-3xl bg-black bg-opacity-40 p-6 rounded-md">
            <h1 className="mb-5 text-5xl font-bold">{movieData.title}</h1>
            <p className="mb-5 truncate">{movieData.overview}</p>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto mt-0 bg-black bg-opacity-70 p-6 rounded-md text-white">
        {/* Badge for Content Section */}
        <div className="badge mb-5 text-2xl font-semibold rounded-md p-4">
          Movie Details
        </div>

        {/* <h1 className="mb-5 text-5xl font-bold">{movieData.title}</h1> */}
        <p className="mb-3 text-lg">{movieData.overview}</p>
        <div className="flex items-center mb-3">
          {/* Badges for Movie Status and Runtime */}
          <div className="badge bg-blue-500 text-white mr-2 p-2 rounded-md">
            {movieData.status}
          </div>
          <div className="badge bg-green-500 text-white p-2 rounded-md">
            {`${movieData.runtime} min`}
          </div>
        </div>
        <div className="flex space-x-2 mb-5">
          {/* Badges for Genres */}
          {movieData.genres.map((genre) => (
            <div
              key={genre.id}
              className="badge bg-indigo-500 text-white p-2 rounded-md"
            >
              {genre.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
