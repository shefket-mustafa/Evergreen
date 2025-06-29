import { Link, useParams } from "react-router";
import { services } from "../static-data/services";

export interface Props {
  id: string;
  backgroundImg: string;
  serviceTitle: string;
  serviceDescription: string;
  priceRange: string;
}

export default function ServiceItemDetails() {

  const {id} = useParams<{id: string}>();

  const service = services.find(s => s.id === id);

  console.log(service);

  if (!service) {
    return <div className="text-center lg:h-screen text-red-500 flex justify-center items-center">Service not found.</div>;
  }


  return (
    <div className="w-full h-screen pt-24 flex flex-col items-center md:flex-row px-10 py-12 bg-white">
      {/* Left: Background image */}
      <div
        className="w-full md:w-1/2  h-96 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${service.backgroundImg})` }}
      />

      {/* Right: Info and pricing */}
      <div className="md:w-1/2 flex flex-col justify-center px-8 mt-8 md:mt-0">
        <h2 className="text-4xl font-bold text-emerald-600 mb-4">
          {service.serviceTitle}
        </h2>
        <p className="text-gray-600 mb-6">{service.serviceDescription}</p>

        <div className="text-black text-lg font-semibold mb-4">
          Starting From: <span className="text-emerald-500">{service.priceRange}</span>
        </div>

        <Link
          to="/contact"
          className="w-fit bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-3xl text-sm font-semibold transition-all duration-200"
        >
          Ask for a Quote
        </Link>
      </div>
    </div>
  );
}
