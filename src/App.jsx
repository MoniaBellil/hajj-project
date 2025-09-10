import Header from "./components/Header";
import Hero from "./components/Hero";
import Context from "./components/Context";
import Problems from "./components/Problems";
import Steps from "./components/Steps";
import Infos from "./components/Infos";
import Packages from "./components/Packages";
import WhyChoose from "./components/WhyChoose";
import Serenity from "./components/Serenity";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

import Accompagnement from "./components/accompagnement";

import Formulaire from "./components/Formulaire";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Context />
      
      <Steps />
      <Accompagnement />
     
      <Packages />
      <WhyChoose />
      <Serenity />
  <Formulaire />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
