import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";

const initialMovies = [
  { id: 1, title: "Interstellar", genre: "Sci-Fi", year: 2014, rating: 8.7 },
  { id: 2, title: "The Godfather", genre: "Crime", year: 1972, rating: 9.2 },
  { id: 3, title: "Parasite", genre: "Thriller", year: 2019, rating: 8.5 },
  { id: 4, title: "Spirited Away", genre: "Animation", year: 2001, rating: 8.6 },
  { id: 5, title: "The Dark Knight", genre: "Action", year: 2008, rating: 9.0 },
];

export default function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");

  function handleDelete(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  function handleAdd() {
    if (!title || !genre || !year || !rating) {
      alert("Please fill in all fields.");
      return;
    }

    const newMovie = {
      id: Date.now(),
      title,
      genre,
      year: Number(year),
      rating: Number(rating),
    };

    setMovies([...movies, newMovie]);
    setTitle("");
    setGenre("");
    setYear("");
    setRating("");
  }

  const inputClass =
    "bg-gray-900 border border-gray-700 focus:border-yellow-500 focus:outline-none rounded-md px-3 py-2 text-sm text-white placeholder-gray-500 transition-colors duration-200";

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">

      <Header />

      <main className="flex-1 px-4 pb-10">
        <div className="max-w-xl mx-auto">

          <p className="text-gray-500 text-sm mb-4">
            🎞️ <span className="text-yellow-400 font-semibold">{movies.length}</span> movies in your collection
          </p>

          <MovieList movies={movies} onDelete={handleDelete} />

          {/* Add Movie Form */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-yellow-400 mb-1">Add a Movie</h2>

            <input className={inputClass} placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input className={inputClass} placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
            <input className={inputClass} placeholder="Year" type="number" value={year} onChange={(e) => setYear(e.target.value)} />
            <input className={inputClass} placeholder="Rating (e.g. 8.5)" type="number" step="0.1" value={rating} onChange={(e) => setRating(e.target.value)} />

            <button
              onClick={handleAdd}
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-bold py-2 rounded-md mt-1 cursor-pointer transition-colors duration-200"
            >
              Add Movie
            </button>
          </div>

        </div>
      </main>

      <Footer />

    </div>
  );
}
