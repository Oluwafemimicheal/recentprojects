import {
  Collection,
  Dream,
  Experience,
  Experience2,
  Footer,
  Functionality,
  Hero,
  Navbar,
  Passion,
} from "../components/Navbar";

import cotton3 from "../assets/cotton-3.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Collection />
      <Experience />
      <Functionality
        text={"Sourcing high-quality furniture that fits your needs and budget"}
        paragraph={
          "Ensuring proper placement for harmony and balance within the space."
        }
        image={cotton3}
        btn={"Shop Now"}
      />
      <Passion />
      <Experience2 />
      <Dream />
      <Footer />
    </>
  );
};
export default Home;
