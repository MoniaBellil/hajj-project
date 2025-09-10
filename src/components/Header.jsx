export default function Header() {
    return (
      <header className="w-full shadow">
        {/* --- Bandeau rouge --- */}
        <div className="bg-red-700 text-white px-6 py-3 flex justify-between items-center">
          {/* Logo + slogan */}
          <div>
            <h1 className="text-2xl font-extrabold">GO-MAKKAH</h1>
            <p className="text-sm">Quand foi et prestige se rencontrent</p>
          </div>
  
          {/* Téléphone + adresse */}
          <div className="text-right">
            <p className="text-xl font-bold">01 49 87 70 21</p>
            <p className="text-sm">32 avenue Pierre Semard, 94200</p>
          </div>
        </div>
  
        {/* --- Barre blanche avec navigation --- */}
        <div className="bg-white px-6 py-2 flex justify-between items-center border-b">
          {/* Menu navigation */}
          <nav className="flex gap-6 font-medium text-gray-800">
            <a href="#">Accueil</a>
            <a href="#">Omra</a>
            <a href="#">Omra combinée</a>
            <a
              href="#"
              className="border-b-2 border-red-600 pb-1 text-black font-semibold"
            >
              Hajj
            </a>
            <a href="#">Voyages Monde</a>
            <a href="#">Nos services</a>
          </nav>
  
          {/* Espace client */}
          <div className="flex gap-6 text-gray-700 text-sm">
            <a href="#" className="flex items-center gap-2">
              👤 Mon compte
            </a>
            <a href="#" className="flex items-center gap-2">
              ❓ Espace client
            </a>
          </div>
        </div>
      </header>
    );
  }
  