import {
  Collection,
  Footer,
  Functionality,
  Navbar,
} from "../components/Navbar";
import cotton4 from "../assets/cotton-4.jpg";

export const About = () => {
  return (
    <>
      <Navbar />
      <Functionality
        text={
          "Our services are high notch product that will give out to our client"
        }
        paragraph={
          "willing to bring out the best outlook of your space and transforming it to the nature of beautify"
        }
        btn={"Learn More"}
        image={cotton4}
      />
      <Collection />
      <Footer />
    </>
  );
};
