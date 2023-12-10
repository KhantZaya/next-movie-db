import Link from "next/link";
interface Props {
  title: string;
  rating: number;
  poster: string;
  id: number;
}

const MovieCard = (props: Props) => {
  return (
    <Link href={`movies/${props.id}`} as={`/movies/${props.id}`}>
      <div className="w-60 flex justify-center item-center mx-auto flex-col cursor-pointer transition-all duration-300 hover:opacity-70 mb-8">
        <img
          className="object-cover rounded-lg h-[20rem] w-48 mx-auto"
          src={
            props.poster
              ? `https://image.tmdb.org/t/p/w500/${props.poster}`
              : "https://www.proedsolutions.com/wp-content/themes/micron/images/placeholders/placeholder_large_dark.jpg"
          }
          alt={props.title}
        />
        <div className="w-48 text-white px-2 py-2 user-select-none hover:text-violet-500 mx-auto">
          <h4 className="truncate font-semibold">{props.title}</h4>
          <p className="text-gray-500">{props.rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
