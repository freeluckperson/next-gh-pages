import Hero from "../components/layout/Hero.js";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeader from "../components/layout/SectionHerder";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader subHeader={"Our story"} mainHeader={"About us"} />
        <p
          className="text-justify mt-4 text-gray-500"
          style={{ textIndent: "15px" }}
        >
          Bienvenidos a nuestra pizzería, el lugar donde tus sueños de pizza se
          hacen realidad. Estamos dedicados a brindarte la mejor experiencia
          culinaria, donde cada bocado es una explosión de sabores deliciosos.
          Nuestro equipo de expertos pizzeros se enorgullece de elaborar
          nuestras pizzas con los ingredientes más frescos y de la más alta
          calidad. Desde la masa crujiente y dorada hasta la salsa de tomate
          casera y los quesos derretidos, cada detalle es cuidadosamente
          seleccionado para ofrecerte una pizza perfecta.
        </p>
        <p
          className="text-justify mt-4 text-gray-500"
          style={{ textIndent: "15px" }}
        >
          Nuestro menú cuenta con una amplia variedad de sabores para satisfacer
          todos los gustos. Desde las clásicas pizzas margarita y pepperoni
          hasta las más creativas y atrevidas combinaciones de ingredientes,
          como la pizza de pollo a la barbacoa con piña y jalapeños. También
          ofrecemos opciones vegetarianas y sin gluten para asegurarnos de que
          todos puedan disfrutar de una deliciosa pizza.
        </p>
        <p
          className="text-justify mt-4 text-gray-500"
          style={{ textIndent: "15px" }}
        >
          Además de nuestras pizzas, también ofrecemos una selección de
          entrantes, ensaladas frescas y postres irresistibles. Acompaña tu
          comida con una cerveza artesanal o uno de nuestros vinos
          cuidadosamente seleccionados para completar tu experiencia
          gastronómica.
        </p>
      </section>
      <section className="text-center">
        <SectionHeader subHeader={"Don't hesitate"} mainHeader={"Contact us"} />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+12458745">
            +124 587 45 45
          </a>
        </div>
      </section>
    </>
  );
}
