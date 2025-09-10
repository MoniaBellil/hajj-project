import bgImage from "../assets/cvr.png";

export default function Hero() {
  return (
    <section
      className="relative w-full bg-cover bg-center h-[250px] flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="ml-12">
        <h2 className="text-4xl font-extrabold">
          <span className="text-yellow-600">Hajj 2026</span>{" "}
          avec <span className="text-red-700">GO-MAKKAH</span>
        </h2>
        <p className="mt-2 text-xl font-bold text-black">
          Comprendre, choisir et réussir votre pèlerinage ..
        </p>
      </div>
    </section>
  );
}
