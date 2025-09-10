import { FaGraduationCap, FaChalkboardTeacher, FaWhatsapp, FaQuestionCircle, FaUserMd } from "react-icons/fa";

export default function Accompagnement() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto bg-white">
      {/* Titre */}
      <h3 className="text-2xl font-bold mb-4 text-blue-800">
        L’accompagnement GO Makkah : bien plus qu’une simple inscription
      </h3>

      {/* Intro */}
      <p className="text-gray-700 mb-2">
        Chez GO Makkah, nous croyons que le Hajj doit se préparer avec autant de rigueur spirituelle que logistique.
      </p>
      <p className="text-gray-700 mb-12">
        C’est pourquoi nous mettons à votre disposition, gratuitement :
      </p>

      {/* Première ligne */}
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        <div className="flex items-start gap-3">
          <FaGraduationCap className="text-[#c59d3f] text-2xl mt-1" />
          <div>
            <h4 className="font-semibold text-[#c59d3f]">Des formations pratiques</h4>
            <p className="text-gray-600 text-sm">(en ligne et parfois en présentiel)</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FaChalkboardTeacher className="text-[#c59d3f] text-2xl mt-1" />
          <div>
            <h4 className="font-semibold text-[#c59d3f]">Des webinars et réunions</h4>
            <p className="text-gray-600 text-sm">pour suivre l’actualité du Hajj</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FaWhatsapp className="text-[#c59d3f] text-2xl mt-1" />
          <div>
            <h4 className="font-semibold text-[#c59d3f]">Un groupe Whatsapp</h4>
            <p className="text-gray-600 text-sm">pour rester en contact permanent avec notre équipe</p>
          </div>
        </div>
      </div>

      {/* Ligne de séparation */}
      <hr className="my-8 border-gray-200" />

      {/* Deuxième ligne */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex items-start gap-3">
          <FaQuestionCircle className="text-[#c59d3f] text-2xl mt-1" />
          <div>
            <h4 className="font-semibold text-[#c59d3f]">Réponses personnalisées</h4>
            <p className="text-gray-600 text-sm">à toutes vos questions par télé / whatsapp</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FaUserMd className="text-[#c59d3f] text-2xl mt-1" />
          <div>
            <h4 className=" items-start font-semibold text-[#c59d3f]">Accompagnement religieux et médical</h4>
            <p className="text-gray-600 text-sm">séminaires avec imams, médecins et experts du Hajj</p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <p className="text-gray-700 mt-12">
        Cet accompagnement est inclus pour tous nos inscrits, quelle que soit l’option choisie.
      </p>
    </section>
  );
}
