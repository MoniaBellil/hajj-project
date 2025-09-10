import { FaCheckCircle, FaPlusCircle } from "react-icons/fa";

export default function Serenity() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-black-900">
      Pour un hajj encore plus en sérénité !

      </h3>
      <p className="text-2xl font-bold mb-6 text-black-900">
        Nous vous recommandons notre option{" "}
        <span className="font-bold text-blue-900">Hajj sérénité</span> :
      </p>

      <div className="space-y-3 text-gray-800">
        {/* Liste simple avec check jaunes */}
        <p className="flex items-start gap-2">
          <FaCheckCircle className="text-yellow-500 mt-1" />
          Augmenter votre chance de réserver la formule de votre choix
        </p>
        <p className="flex items-start gap-2">
          <FaCheckCircle className="text-yellow-500 mt-1" />
          Ne pas vivre tout le stress de l’utilisation de la plateforme Nusuk,
          nos techniciens s’occupent de tout à votre place.
        </p>
        <p className="flex items-start gap-2">
          <FaCheckCircle className="text-yellow-500 mt-1" />
          Ne rien rater, nous faisons la veille sur Nusuk à votre place (nouveaux
          vols, nouvelle formule, nouveaux prix, etc.)
        </p>

        <p className="flex items-start gap-2">
          <FaCheckCircle className="text-yellow-500 mt-1" />
          Nous créons un compte Nusuk pour vous, vous n’avez rien à faire
        </p>
        <p className="flex items-start gap-2">
          <FaCheckCircle className="text-yellow-500 mt-1" />
          Nous nous occupons de toutes les étapes sur Nusuk en étroite
          coordination avec vous
        </p>
        <p className="flex items-start gap-2">
          <FaCheckCircle className="text-yellow-500 mt-1" />
          Le jour J, laissez-nous gérer la réservation finale
        </p>

        <p className="font-semibold mt-6">
          Ce n’est pas fini : Avec le pack sérénité, vous avez droit à :
        </p>

        <p className="flex items-start gap-2">
          <FaCheckCircle className="text-yellow-500 mt-1" />
          Assistance 24h/24, 7j/7 un conseiller vous répond au téléphone de manière personnalisée
        </p>
        <p className="flex items-start gap-2">
          <FaCheckCircle className="text-yellow-500 mt-1" />
          L’inscription à notre série de réunions Zoom privées :
        </p>

        {/* Liste Zoom avec icônes vertes */}
        <div className="ml-6 space-y-2">
          <p className="flex items-start gap-2">
            <FaPlusCircle className="text-green-500 mt-1" />
            <span className="font-semibold text-green-600">
              Semaine 1 : Hajj 2026 mode d’emploi ?
            </span>
          </p>
          <p className="flex items-start gap-2">
            <FaPlusCircle className="text-green-500 mt-1" />
            <span className="font-semibold text-green-600">
              Semaine 2 : Comment choisir votre formule Hajj
            </span>
          </p>
          <p className="flex items-start gap-2">
            <FaPlusCircle className="text-green-500 mt-1" />
            <span className="font-semibold text-green-600">
              Semaine 3 : Présentation de Nusuk, comment ça fonctionne ?
            </span>
          </p>
          <p className="flex items-start gap-2">
            <FaPlusCircle className="text-green-500 mt-1" />
            <span className="font-semibold text-green-600">
              Semaine 4 : Présentation de nos formules Hajj 2026
            </span>
          </p>
          <p className="flex items-start gap-2">
            <FaPlusCircle className="text-green-500 mt-1" />
            <span className="font-semibold text-green-600">
              Semaine 5 : Questions/Réponses avant réservation finale
            </span>
          </p>
          <p className="flex items-start gap-2">
            <FaPlusCircle className="text-green-500 mt-1" />
            <span className="font-semibold text-green-600">
              Semaine 6 : Préparation à la deuxième phase de réservation sur Nusuk
            </span>
          </p>
        </div>

        {/* Derniers points */}
        <p className="flex items-start gap-2 mt-4">
          <FaCheckCircle className="text-yellow-500 mt-1" />
          Inscription à un stage de 8 séances de formation Hajj en présentiel
          dans nos locaux animés par des cheikh, accompagnateurs, médecins,
          imams, etc.
        </p>
        <p className="flex items-start gap-2">
          <FaCheckCircle className="text-yellow-500 mt-1" />
          Notre Pack cadeau avec la Valise du hajj et tout ce qu’il vous faut
          pour un Hajj en toute sérénité.
        </p>
      </div>
    </section>
  );
}
