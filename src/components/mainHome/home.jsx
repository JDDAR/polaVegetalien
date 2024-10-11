import "../../styles/components/home/_home.scss";
import CarouselHome from "../carousels/carouselHome";

const Home = () => {
  return (
    <>
      <CarouselHome />
      <section className="container">
        <div className="homeContainer"></div>
      </section>
    </>
  );
};

export default Home;
