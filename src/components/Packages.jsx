export default function Packages() {
    return (
      <section className="px-6 py-12 max-w-6xl mx-auto bg-white">
        <h3 className="text-2xl font-bold mb-10 text-blue-800">
          Deux formules adaptées à vos besoins
        </h3>

     
  
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* --- Carte Assistance --- */}
          <div className="relative border border-blue-400 rounded-lg overflow-hidden">
            {/* Ruban */}
            <div className="absolute top-0 left-0">
              <div className="bg-green-600 text-white text-xs font-bold px-3 py-2 relative inline-block">
                Pack Gratuit
                <span className="absolute -bottom-2 left-0 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-green-700"></span>
              </div>
            </div>
  
            {/* Header */}
            <div className="p-6 pt-12">
              <h4 className="text-xl font-bold">
                <span className="text-blue-700">Hajj Assistance</span>{" "}
                <span className="text-black">GO-Makkah</span>
              </h4>
            </div>
  
            {/* Bandeau */}
            <div className="bg-green-600 text-white text-center text-sm font-semibold py-2">
              7% de nos client ont le choisis
            </div>
  
            {/* Contenu */}
            <ul className="divide-y divide-gray-200 text-gray-700 text-sm p-6 space-y-2">
              <li>Nous vous inscrivons sur notre groupe whatsup d’information & assistance</li>
              <li>Nous vous envoyons nos formules Hajj 2026</li>
              <li>Vous créez par vous-même votre compte Nusuk</li>
              <li>Vous réservez une de nos formules</li>
              <li>Vous nous envoyez votre passeport et la formule confirmée</li>
            </ul>
  
            {/* Bouton */}
            <div className="bg-blue-600 text-white text-center py-3 font-semibold cursor-pointer">
              Inscrivez-vous vite !

             
            </div>
          </div>
  
          {/* --- Carte Sérénité --- */}
          <div className="relative border border-yellow-400 rounded-lg overflow-hidden">
            {/* Ruban */}
            <div className="absolute top-0 left-0">
              <div className="bg-yellow-500 text-white text-xs font-bold px-3 py-2 relative inline-block">
                250 EUR
                <span className="absolute -bottom-2 left-0 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-yellow-600"></span>
              </div>
            </div>
  
            {/* Header */}
            <div className="p-6 pt-12">
              <h4 className="text-xl font-bold">
                <span className="text-yellow-600">Hajj Sérénité</span>{" "}
                <span className="text-black">GO-Makkah</span>
              </h4>
            </div>
  
            {/* Bandeau */}
            <div className="bg-yellow-500 text-white text-center text-sm font-semibold py-2">
              80% de nos client ont le choisis
            </div>
  
            {/* Contenu */}
            <ul className="divide-y divide-gray-200 text-gray-700 text-sm p-6 space-y-2">
              <li>Nous vous inscrivons sur notre groupe whatsup d’information & assistance</li>
              <li>Nous créons et gérons pour vous votre compte NUSUK</li>
              <li>Nous payons votre hajj pour vous si vous le demandez. Vous payez votre hajj chez nous</li>
              <li>Nous vous envoyons nos formules Hajj 2026</li>
              <li>Nous gérons la réservation de votre hajj jusqu’au bout</li>
              <li>Et vous partez au hajj avec nos équipes accompagnateurs très expérimentés</li>
            </ul>
  
            {/* Bouton */}
            <div className="bg-yellow-600 text-white text-center py-3 font-semibold cursor-pointer">
              Inscrivez-vous vite !
            </div>
          </div>
        </div>
      </section>
    );
  }
  