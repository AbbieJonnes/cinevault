import MovieItem from "./MovieItem";

export default function MovieList({ movies, onDelete }) {
  if (movies.length === 0) {
    return (
      <p className="text-center text-gray-500 py-10">
        No movies yet. Add one below!
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3 mb-8">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} onDelete={onDelete} />
      ))}
    </div>
  );
}
