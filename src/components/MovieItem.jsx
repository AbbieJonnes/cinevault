export default function MovieItem({ movie, onDelete }) {
    return (
      <div className="flex items-center justify-between bg-gray-900 border border-gray-700 hover:border-yellow-500 rounded-lg p-4 transition-colors duration-200">
        <div>
          <h3 className="text-base font-semibold text-white">{movie.title}</h3>
          <p className="text-sm text-gray-400 mt-1">
            {movie.genre} · {movie.year} · ⭐ {movie.rating}
          </p>
        </div>
        <button
          onClick={() => onDelete(movie.id)}
          className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-md cursor-pointer transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    );
  }
  