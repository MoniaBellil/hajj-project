import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";


const reasons = [
  { img: img1, text: "Une expérience de plus de 10 ans dans l’organisation de voyages spirituels." },
  { img: img2, text: "Des partenariats solides et fiables avec des agences saoudiennes agréées." },
  { img: img3, text: "Un taux de réussite exceptionnel pour les inscriptions Hajj." },
  { img: img4, text: "Accompagnement humain et spirituel avant, pendant et après le Hajj." },
  { img: img5, text: "La garantie d’un suivi premium et personnalisé." },
];

  export default function WhyChoose() {
    return (
      <section className="px-6 py-12 max-w-6xl mx-auto bg-white">

        <h3 className="text-2xl font-bold mb-10 text-blue-800">
          Pourquoi choisir GO Makkah ?
        </h3>
  
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="relative rounded-lg overflow-hidden shadow">
              {/* Image */}
              <img
                src={r.img}
                alt=""
                className="w-full h-64 object-cover"
              />
  
              {/* Overlay texte */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                <p className="text-white text-sm font-medium">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  