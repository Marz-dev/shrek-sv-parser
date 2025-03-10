import { Ban, CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div id="pricing" className="mt-20">
      <div className="flex m-6 w-full items-center justify-center bg-black">
    <span className="absolute mx-auto flex border w-fit bg-gradient-to-r blur-xl from-lime-300 via-lime-600 to-amber-100 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
    Pricing
  </span>
    <h1
        className="relative top-0 w-fit h-auto justify-center flex bg-gradient-to-r items-center text-lime-200 bg-clip-text text-6xl font-extrabold text-center select-auto">
        Pricing
    </h1>
</div>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div id="priceDiv" key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-lime-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-green-500 to-lime-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 className="text-lime-600" />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <ul>
              {option.notIncluded.map((notIncluded, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <Ban className="text-red-600" />
                    <span className="ml-2">{notIncluded}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/shreksvparser.zip" download="Shreksv-Parser"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-green-900 border border-green-900 rounded-lg transition duration-200"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
