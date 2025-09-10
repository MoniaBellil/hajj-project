import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

// Composant FAQ
function FAQItem({ question, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#c59d3f] rounded-md mb-4 bg-white shadow-sm">
      {/* Question */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 text-base font-semibold text-gray-800"
      >
        {question}
        <FaChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180 text-[#c59d3f]" : "text-gray-500"
          }`}
        />
      </button>

      {/* Réponse */}
      {open && (
        <div className="px-5 py-4 text-sm text-gray-700 border-t border-gray-200 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Context() {
  return (
    <>
      {/* --- Bloc Contexte & Support --- */}
      <section className="px-6 py-12 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Colonne texte */}
        <div className="md:col-span-2 bg-white p-8 rounded-lg shadow border">
          <h3 className="text-2xl font-bold mb-6 text-blue-700">
            Le contexte du Hajj aujourd’hui
          </h3>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Depuis plusieurs années, l’Arabie Saoudite a mis en place un système centralisé de
            gestion du Hajj appelé <span className="font-semibold">Nusuk</span>.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Toutes les inscriptions et tous les packages Hajj passent par ce portail officiel.
            Les agences saoudiennes agréées y proposent leurs offres, souvent en partenariat
            avec des agences françaises de confiance comme{" "}
            <span className="font-semibold">GO-MAKKAH</span>.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Notre rôle est de vous aider à naviguer dans{" "}
            <span className="font-semibold">ce système complexe</span>, à choisir le pack qui
            correspond le mieux à vos attentes, et à{" "}
            <span className="font-semibold">sécuriser</span> votre inscription dans les
            meilleures conditions.
          </p>
        </div>

        {/* Colonne Support */}
        <aside className="bg-[#c59d3f] text-white p-6 rounded-lg shadow flex flex-col justify-between">
          <div>
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
              <span className="bg-white/20 p-2 rounded-full">💬</span>
              Support téléphonique
            </h4>
            <p className="text-sm">GO-MAKKAH vous offre hotline support NUSUK</p>
          </div>

          <hr className="my-4 border-white/30" />

          <div>
            <p className="text-2xl font-extrabold">01 49 87 70 21</p>
            <p className="text-sm mt-2">Ligne ouverte 24h/24</p>
            <p className="text-sm">Avec la langue Arabe et Français</p>
          </div>
        </aside>
      </section>

      {/* --- Bloc FAQ --- */}
     {/* --- Bloc FAQ --- */}
<section className="px-6 py-8 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
  <div className="md:col-span-2">
    <h3 className="text-2xl font-bold mb-6 text-blue-700">
      Problèmes rencontrés et solutions
    </h3>

    <p className="text-gray-700 mb-4 leading-relaxed">
      En tant qu’agence de voyage française spécialisée dans l’accompagnement au Hajj,
      nous avons constaté plusieurs obstacles techniques et humains récurrents depuis la
      mise en place de la plateforme Nusuk. Nos constats reposent sur des retours concrets
      de clients ainsi que sur les observations partagées au sein des réseaux professionnels.
    </p>

    {/* Bloc 1 */}
    <h4 className="font-semibold text-yellow-700 mb-2">
      Volume important de comptes... mais conversion imparfaite
    </h4>
    <p className="text-gray-700 leading-relaxed mb-4">
      Nous avons entendu que près de 100 000 comptes ont été créés en France sur la
      plateforme Nusuk durant la période d’ouverture des inscriptions. Ce chiffre reste à
      être confirmé officiellement, mais il illustre une forte mobilisation initiale.
    </p>
    <p className="text-gray-700 leading-relaxed mb-4">
      Toutefois, en 2023, seuls 7 000 à 8 000 pèlerins français ont effectivement pu accomplir
      le Hajj — selon les statistiques recueillies.
    </p>
    <p className="text-gray-700 leading-relaxed mb-6">
      En conséquence : un grand nombre d’inscriptions restent non finalisées, qu’il s’agisse
      d’erreurs techniques, de validation stoppée ou de paiement non abouti.
    </p>

    {/* Bloc 2 */}
    <h4 className="font-semibold text-yellow-700 mb-2">
      Difficultés techniques rencontrées
    </h4>
    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
      <li>Connexion interrompue au moment du paiement ou de la validation du forfait.</li>
      <li>Forfait visible comme disponible, qui devient soudainement inaccessible au final.</li>
      <li>
        Dépôt dans l’e-wallet effectué, sans validation immédiate ni retour clair, générant une
        incertitude dommageable.
      </li>
    </ul>

    {/* Bloc 3 */}
    <h4 className="font-semibold text-yellow-700 mb-2">
      Stress généralisé et absence de soutien francophone
    </h4>
    <p className="text-gray-700 leading-relaxed mb-4">
      Certains candidats ont dû recommencer tout le processus à plusieurs reprises.
      D’autres ont vu leur réservation validée… puis annulée sans explication.
    </p>
    <p className="text-gray-700 leading-relaxed mb-6">
      L’absence ou la lenteur d’un support en français a fait perdre un temps précieux à
      plusieurs d’entre eux.
    </p>

    {/* Bloc Conclusion */}
    <p className="text-gray-700 leading-relaxed">
      Ces observations traduisent une réalité : le passage de l’inscription à l’accès effectif
      au Hajj reste trop aléatoire, même pour des candidats préparés. Cela justifie pleinement
      la valeur ajoutée de votre agence — une présence rassurante, opérationnelle et parfaitement
      alignée sur les attentes des pèlerins français.
    </p>
  </div>

  {/* FAQ Sidebar inchangée */}
  <div>
    <FAQItem question="Compte Nusuk bloqué à la création ?">
      <p className="mb-2 font-bold">Introduction</p>
      <p className="mb-4">
        Chaque année, de nombreux pèlerins rencontrent des difficultés dès la première étape :
        la création du compte sur la plateforme Nusuk.
      </p>

      <p className="mb-2 font-bold">Causes fréquentes :</p>
      <ul className="list-disc list-inside ml-4 mb-4">
        <li>Informations personnelles mal saisies</li>
        <li>Email ou numéro de téléphone non validés</li>
        <li>Tentatives multiples entraînant un blocage automatique</li>
      </ul>

      <p className="mb-2 font-bold">Solutions possibles :</p>
      <ol className="list-decimal list-inside ml-4 mb-4">
        <li>Vérifiez que vos données correspondent exactement au passeport</li>
        <li>Utilisez un numéro de téléphone valide</li>
      </ol>

      <a href="#" className="text-yellow-600 text-sm font-semibold">
        Afficher la suite ?
      </a>
    </FAQItem>

    <FAQItem question="Carte bancaire refusée par Nusuk ?">
      <p>
        Vérifiez que votre carte est activée pour les paiements internationaux en ligne et
        qu’elle n’a pas de plafond trop bas.
      </p>
    </FAQItem>

    <FAQItem question="Forfait confirmé puis annulé sur Nusuk ?">
      <p>
        Cela peut se produire si la validation finale échoue côté autorités saoudiennes. 
        Contactez notre support immédiatement pour assistance.
      </p>
    </FAQItem>
  </div>
</section>

    </>
  );
}
