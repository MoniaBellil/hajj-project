import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const questions = [
  { q: "Qu’est-ce que le Hajj ?", a: "C’est le grand pèlerinage à La Mecque." },
  { q: "Quand a lieu le Hajj ?", a: "Chaque année, pendant le mois de Dhul-Hijjah." },
  { q: "Qui est obligé de faire le Hajj ?", a: "Tout musulman adulte en capacité physique et financière." },
  { q: "Quelles sont les principales étapes du Hajj ?", a: "Ihram, Tawaf, Sa’i, Arafat, Mina, etc." },
  { q: "Quelle est la différence entre le Hajj et la ‘Umra ?", a: "La ‘Umra peut se faire toute l’année, le Hajj uniquement en Dhul-Hijjah." },
  { q: "Quels sont les bienfaits du Hajj ?", a: "Un pardon des péchés et une purification spirituelle." },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 text-sm font-medium text-gray-800"
      >
        {question}
        <FaChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180 text-yellow-600" : "text-gray-400"
          }`}
        />
      </button>
      {open && <div className="px-4 pb-3 text-sm text-gray-600">{answer}</div>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      {/* Titre + sous-texte */}
      <h3 className="text-2xl font-bold text-gray-900">
        Tout savoir sur notre service Hajj
      </h3>
      <p className="text-gray-600 mt-1 mb-8">
        Pour plus d’informations consulter notre{" "}
        <a href="#" className="text-yellow-600 font-medium">
          page d’aide.
        </a>
      </p>

      {/* Grille en 2 colonnes */}
      <div className="grid md:grid-cols-2 gap-6">
        {questions.map((item, i) => (
          <FAQItem key={i} question={item.q} answer={item.a} />
        ))}
      </div>
    </section>
  );
}
