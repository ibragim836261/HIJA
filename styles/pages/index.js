import Head from 'next/head'
import '../styles/globals.css'

export default function Home() {
  const movies = [
    {
      title: "Фильм 1",
      description: "Описание фильма 1",
      poster: "https://via.placeholder.com/150"
    },
    {
      title: "Фильм 2",
      description: "Описание фильма 2",
      poster: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-800 to-white min-h-screen text-white p-4">
      <Head>
        <title>Hija</title>
      </Head>
      <h1 className="text-4xl font-bold mb-6">Hija — Твой онлайн кинотеатр</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {movies.map((movie, index) => (
          <div key={index} className="bg-white text-black rounded-lg shadow-lg p-4">
            <img src={movie.poster} alt={movie.title} className="rounded-lg mb-2"/>
            <h2 className="text-xl font-bold">{movie.title}</h2>
            <p className="text-sm">{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
