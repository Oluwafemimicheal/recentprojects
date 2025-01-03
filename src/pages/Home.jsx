import {
  Collection,
  Experience,
  Experience2,
  Footer,
  Functionality,
  Hero,
  Navbar,
  Passion,
} from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Collection />
      <Experience />
      <Functionality />
      <Passion />
      <Experience2 />
      <Footer />
    </>
  );
};
export default Home;
