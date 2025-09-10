export default function Infos() {
    return (
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-blue-900">
          Tout savoir sur nos formules Hajj Go-Makkah
        </h3>
  
        <div className="bg-white rounded shadow overflow-hidden">
          {/* Formule VIP */}
          <div className="border-l-4 border-[#c59d3f] px-6 py-4">
            <h4 className="text-[#c59d3f] font-semibold mb-2">
              Notre formule Hajj VIP
            </h4>
            <p className="text-gray-800 leading-relaxed">
              Profitez d’un <span className="font-bold">hébergement 5★ à Abraj Al Beit</span> ou
              Jabal Omar, avec <span className="font-bold">transferts en TGV</span> pour un confort
              optimal. Votre séjour inclut aussi un campement à Minâ{" "}
              <span className="font-bold">(Al Kabch)</span>, pour vivre pleinement les rites du Hajj
              dans les meilleures conditions.
            </p>
          </div>
          <hr className="border-gray-200" />
  
          {/* Formule CONFORT */}
          <div className="border-l-4 border-[#c59d3f] px-6 py-4">
            <h4 className="text-[#c59d3f] font-semibold mb-2">
              Notre formule Hajj CONFORT
            </h4>
            <p className="text-gray-800 leading-relaxed">
              Séjournez dans des <span className="font-bold">hôtels 5★ à Jabal Omar</span>, profitez
              de <span className="font-bold">transferts en TGV</span> rapides et confortables, et
              vivez les rites du Hajj avec un campement à Minâ, dans la zone{" "}
              <span className="font-bold">d’Al Kabch ou Mouayssem</span>, pour une expérience
              spirituelle inoubliable.
            </p>
          </div>
          <hr className="border-gray-200" />
  
          {/* Formule ÉCONOMIQUE */}
          <div className="border-l-4 border-[#c59d3f] px-6 py-4">
            <h4 className="text-[#c59d3f] font-semibold mb-2">
              Notre formule Hajj ÉCONOMIQUE
            </h4>
            <p className="text-gray-800 leading-relaxed">
              Séjour en <span className="font-bold">hôtels 4 ou 5★ situés à seulement 1–2 km du Haram</span>,
              avec <span className="font-bold">transferts en TGV ou en bus pour plus de confort</span>. Le programme
              inclut également un campement à Minâ, dans la zone{" "}
              <span className="font-bold">d’Al Mouayssem</span>, afin de vivre pleinement les rites du Hajj.
            </p>
          </div>
        </div>
      </section>
    );
  }
  