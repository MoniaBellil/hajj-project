const steps = [
    {
      title: "Choisir l’agence et le type de pack",
      desc: "(VIP, confort ou économique).",
    },
    {
      title: "Créer un compte Nusuk",
      desc: "soit vous-même avec notre assistance gratuite, soit nous le faisons pour vous avec notre pack Sérénité.",
    },
    {
      title: "Découvrir les offres",
      desc: "officielles annoncées par les autorités saoudiennes.",
    },
    {
      title: "Sélectionner votre pack Hajj",
      desc: "nous vous aidons à comparer, décortiquer et vérifier chaque détail.",
    },
    {
      title: "Alimenter votre portefeuille client",
      desc: "le paiement est bloqué sur Nusuk jusqu’à validation.",
    },
    {
      title: "Confirmer l’inscription dès l’ouverture",
      desc: "une étape cruciale où la rapidité fait toute la différence.",
    },
  ];
  
  export default function Steps() {
    return (
      <section className="px-6 py-12 bg-white max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-blue-800">
          Comment ça se passe concrètement ?
        </h3>
        <p className="mb-10 text-gray-600">
          La procédure se déroule en plusieurs étapes :
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-6 shadow border-t-4 border-[#c59d3f] text-center"
            >
              {/* Cercle doré avec numéro */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#c59d3f] text-white font-bold text-lg mx-auto mb-4">
                {i + 1}
              </div>
  
              {/* Titre */}
              <h4 className="font-semibold text-gray-800 mb-2">{s.title}</h4>
  
              {/* Description */}
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  