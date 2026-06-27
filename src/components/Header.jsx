export default function Header() {
    return (
      <header className="bg-gray-950 border-b border-yellow-600 py-6 px-4 mb-10">
        <div className="max-w-xl mx-auto text-center">
  
          {/* Film strip top */}
          <div className="flex justify-center gap-2 mb-3">
            {Array(7).fill(0).map((_, i) => (
              <div key={i} className="w-5 h-3 bg-yellow-500 rounded-sm opacity-70" />
            ))}
          </div>
  
          <h1 className="text-4xl font-extrabold text-yellow-400 tracking-widest uppercase">
            CineVault
          </h1>
          <p className="text-gray-400 text-sm mt-2 tracking-wide">
            Your personal movie library — curated by you
          </p>
  
          {/* Film strip bottom */}
          <div className="flex justify-center gap-2 mt-3">
            {Array(7).fill(0).map((_, i) => (
              <div key={i} className="w-5 h-3 bg-yellow-500 rounded-sm opacity-70" />
            ))}
          </div>
  
        </div>
      </header>
    );
  }
  