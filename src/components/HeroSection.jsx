
const HeroSection = () => {
  return (
    <div id="hero" className="flex flex-col items-center mt-6 lg:mt-20" >
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        <span className="bg-gradient-to-r from-green-500 to-lime-600 text-transparent bg-clip-text">
          {" "}
          Shrek-Separated Values
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-white max-w-4xl">
        Tired of traditional Comma-separated values(CSVs) and Tab-separated values(TSVs)? Well, worry not, because <span className="text-lime-600">Shrek</span> is here to help
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#pricing"
          className="font-bold bg-gradient-to-r from-green-500 to-lime-600 py-3 px-4 mx-3 rounded-md text-black"
        >
          Start for free
        </a>
      </div>
      
    </div>
  );
};

export default HeroSection;
