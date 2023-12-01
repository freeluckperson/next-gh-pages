import Header from "@/components/layout/Header.js";
import Hero from "@/components/layout/Hero.js";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/SectionHerder";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader subHeader={"Our story"} mainHeader={"About us"} />
        <p className="text-justify my-10" style={{textIndent:'15px'}}>
          Bienvenidos a nuestra pizzería, el lugar donde tus sueños de pizza se
          hacen realidad. Estamos dedicados a brindarte la mejor experiencia
          culinaria, donde cada bocado es una explosión de sabores deliciosos.
          Nuestro equipo de expertos pizzeros se enorgullece de elaborar
          nuestras pizzas con los ingredientes más frescos y de la más alta
          calidad. Desde la masa crujiente y dorada hasta la salsa de tomate
          casera y los quesos derretidos, cada detalle es cuidadosamente
          seleccionado para ofrecerte una pizza perfecta.
        </p>
      </section>
    </>
  );
}
