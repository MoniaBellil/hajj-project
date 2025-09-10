export default function Footer() {
    return (
      <footer className="mt-12">
        {/* Bloc bleu avec colonnes */}
        <div className="bg-blue-700 text-white px-10 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Colonne 1 */}
          <div>
            <h4 className="font-bold mb-3">Plan de site</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="underline">Qui sommes nous</a></li>
              <li><a href="#" className="underline">annuaire_des_hotels</a></li>
              <li><a href="#" className="underline">recherche</a></li>
              <li><a href="#" className="underline">Promotions</a></li>
              <li><a href="#" className="underline">Boutique en ligne</a></li>
            </ul>
          </div>
  
          {/* Colonne 2 */}
          <div>
            <h4 className="font-bold mb-3">Liens utiles</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="underline">Qui sommes nous</a></li>
              <li><a href="#" className="underline">annuaire_des_hotels</a></li>
              <li><a href="#" className="underline">recherche</a></li>
              <li><a href="#" className="underline">Promotions</a></li>
              <li><a href="#" className="underline">Boutique en ligne</a></li>
            </ul>
          </div>
  
          {/* Colonne 3 */}
          <div>
            <h4 className="font-bold mb-3">Hajj – Omra</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="underline">Qui sommes nous</a></li>
              <li><a href="#" className="underline">annuaire_des_hotels</a></li>
              <li><a href="#" className="underline">recherche</a></li>
              <li><a href="#" className="underline">Promotions</a></li>
              <li><a href="#" className="underline">Boutique en ligne</a></li>
            </ul>
          </div>
  
          {/* Colonne 4 */}
          <div>
            <h4 className="font-bold mb-3">Informations</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="underline">Qui sommes nous</a></li>
              <li><a href="#" className="underline">annuaire_des_hotels</a></li>
              <li><a href="#" className="underline">recherche</a></li>
              <li><a href="#" className="underline">Promotions</a></li>
              <li><a href="#" className="underline">Boutique en ligne</a></li>
            </ul>
          </div>
  
          {/* Colonne 5 */}
          <div>
            <h4 className="font-bold mb-3">Nos agences</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="underline">Qui sommes nous</a></li>
              <li><a href="#" className="underline">annuaire_des_hotels</a></li>
              <li><a href="#" className="underline">recherche</a></li>
              <li><a href="#" className="underline">Promotions</a></li>
              <li><a href="#" className="underline">Boutique en ligne</a></li>
            </ul>
          </div>
        </div>
  
        {/* Bloc bas avec agences */}
        <div className="bg-gray-100 text-center py-4 text-sm">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <span>GO-MAKKAH France 🇫🇷</span>
            <span>GO-MAKKAH Algérie 🇩🇿</span>
            <span>GO-MAKKAH Maroc 🇲🇦</span>
            <span>GO-MAKKAH Saudi 🇸🇦</span>
            <span>GO-MAKKAH Tunisie 🇹🇳</span>
          </div>
        </div>
      </footer>
    );
  }
  