import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaRegListAlt, FaCheckCircle } from "react-icons/fa";

export default function Formulaire() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    tel: "",
    formule: "Assistance",
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/inscriptions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setMessage("Inscription enregistrée avec succès !");
        setForm({ nom: "", email: "", tel: "", formule: "Assistance" });

       
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      }
    } catch (err) {
      setMessage(" Erreur lors de l’envoi du formulaire");
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
  };

  return (
    <section className="relative px-6 py-16 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h3 className="text-3xl font-bold text-blue-900">Formulaire d’inscription</h3>
        <p className="text-gray-600 mt-2">
          Inscrivez-vous dès aujourd’hui pour réserver votre place pour le{" "}
          <span className="font-semibold text-[#c59d3f]">Hajj 2026</span>.
        </p>
      </div>

      {/*  succès */}
      {message && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fadeIn">
          <FaCheckCircle className="text-xl" />
          <span>{message}</span>
        </div>
      )}

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl max-w-lg mx-auto space-y-5 border border-gray-200"
      >
        <div className="flex items-center border rounded-lg p-3 focus-within:ring-2 focus-within:ring-[#c59d3f]">
          <FaUser className="text-gray-400 mr-3" />
          <input
            type="text"
            name="nom"
            value={form.nom}
            onChange={handleChange}
            placeholder="Nom complet"
            className="w-full outline-none"
            required
          />
        </div>

        <div className="flex items-center border rounded-lg p-3 focus-within:ring-2 focus-within:ring-[#c59d3f]">
          <FaEnvelope className="text-gray-400 mr-3" />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full outline-none"
            required
          />
        </div>

        <div className="flex items-center border rounded-lg p-3 focus-within:ring-2 focus-within:ring-[#c59d3f]">
          <FaPhone className="text-gray-400 mr-3" />
          <input
            type="text"
            name="tel"
            value={form.tel}
            onChange={handleChange}
            placeholder="Téléphone"
            className="w-full outline-none"
            required
          />
        </div>

        <div className="flex items-center border rounded-lg p-3 bg-gray-50">
          <FaRegListAlt className="text-gray-400 mr-3" />
          <input
            type="text"
            value={form.formule}
            readOnly
            className="w-full outline-none bg-gray-50 text-gray-700"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-[#c59d3f] text-white font-bold text-lg hover:bg-[#b2892f] transition"
        >
           Envoyer mon inscription
        </button>
      </form>
    </section>
  );
}
