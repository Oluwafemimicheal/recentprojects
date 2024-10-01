import HeroImage from "/assets/images/andre-benz-cXU6tNxhub0-unsplash.jpg";
const Hero = () => {
  return (
    <div className="w-10/12 h-[60vh] bg-gray-200 overflow-hidden">
      <figure>
        <img src={HeroImage}/>
        <figcaption>Hero image</figcaption>
      </figure>
    </div>
  );
};

export default Hero;
