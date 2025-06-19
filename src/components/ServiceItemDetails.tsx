

interface Props {
    id: string,
    backgroundImg: string,
    serviceTitle: string,
    serviceDescription: string,
    priceRange: string

}

export default function ServiceItemDetails({ backgroundImg, serviceDescription, serviceTitle,priceRange }: Props) {
  

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row px-10 py-12 bg-white">
      
      {/* Left: Background image */}
      <div
        className="md:w-1/2 h-96 md:h-auto bg-cover bg-center rounded-xl"
        style={{ backgroundImage: backgroundImg }}
      />

      {/* Right: Info and pricing */}
      <div className="md:w-1/2 flex flex-col justify-center px-8 mt-8 md:mt-0">
        <h2 className="text-4xl font-bold text-emerald-600 mb-4">{serviceTitle}</h2>
        <p className="text-gray-600 mb-6">{serviceDescription}</p>

        <div className="text-black text-lg font-semibold mb-4">
          Starting From: <span className="text-emerald-500">{priceRange}</span>
        </div>

        <a
          href="#/contact"
          className="w-fit bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-3xl text-sm font-semibold transition-all duration-200"
        >
          Ask for a Quote
        </a>
      </div>
    </div>
  );
}
