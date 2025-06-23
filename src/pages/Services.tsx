import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const services = [
    {
      id: "1",
      serviceTitle: "Lawn Mowing",
      backgroundImg: "/images/lawnmower-service.jpg",
      serviceDescription: "Professional lawn mowing to keep your yard neat and healthy year-round.",
      priceRange: "$25 - $50"
    },
    {
      id: "2",
      serviceTitle: "Weed Control",
      backgroundImg: "/images/weed-control.jpg",
      serviceDescription: "Eliminate weeds efficiently and prevent them from coming back.",
      priceRange: "$30 - $60"
    },
    {
      id: "3",
      serviceTitle: "Fertilization",
      backgroundImg: "/images/fertilization.jpg",
      serviceDescription: "Boost your garden's growth with tailored fertilization treatments.",
      priceRange: "$40 - $80"
    },
    {
      id: "4",
      serviceTitle: "Pest Management",
      backgroundImg: "/images/pest-managment.webp",
      serviceDescription: "Safe and effective pest control to protect your landscape.",
      priceRange: "$50 - $90"
    },
    {
      id: "5",
      serviceTitle: "Soil Aeration",
      backgroundImg: "/images/aeration.jpg",
      serviceDescription: "Improve root growth and soil health with our aeration service.",
      priceRange: "$35 - $70"
    },
    {
      id: "6",
      serviceTitle: "Garden Design",
      backgroundImg: "/images/design.jpg",
      serviceDescription: "Transform your outdoor space with personalized garden designs.",
      priceRange: "$100 - $300"
    },
    {
      id: "7",
      serviceTitle: "Hedge Trimming",
      backgroundImg: "/images/hedge-trimming.webp",
      serviceDescription: "Keep your hedges clean, even, and beautifully maintained.",
      priceRange: "$30 - $75"
    },
    {
      id: "8",
      serviceTitle: "Leaf Removal",
      backgroundImg: "/images/leaf-removal.jpeg",
      serviceDescription: "Seasonal leaf cleanup to keep your property looking fresh.",
      priceRange: "$20 - $60"
    },
    {
      id: "9",
      serviceTitle: "Tree Pruning",
      backgroundImg: "/images/pruning.webp",
      serviceDescription: "Expert tree trimming to ensure plant health and safety.",
      priceRange: "$50 - $120"
    },
    {
      id: "10",
      serviceTitle: "Mulching",
      backgroundImg: "/images/mulching.jpeg",
      serviceDescription: "Mulching services to help your soil retain moisture and nutrients.",
      priceRange: "$25 - $65"
    },
    {
      id: "11",
      serviceTitle: "Irrigation Systems",
      backgroundImg: "/images/irrigation-systems.jpeg",
      serviceDescription: "Installation and maintenance of efficient irrigation systems.",
      priceRange: "$200 - $1000"
    },
    {
      id: "12",
      serviceTitle: "Seasonal Cleanup",
      backgroundImg: "/images/seasonal-cleanup.avif",
      serviceDescription: "Comprehensive cleanup services to prepare your garden for each season.",
      priceRange: "$80 - $150"
    },
    {
      id: "13",
      serviceTitle: "Landscape Lighting",
      backgroundImg: "/images/landscape-lighting.webp",
      serviceDescription: "Highlight your landscape with modern and efficient lighting solutions.",
      priceRange: "$150 - $500"
    },
    {
      id: "14",
      serviceTitle: "Composting",
      backgroundImg: "/images/composting.webp",
      serviceDescription: "Eco-friendly composting solutions to enrich your garden soil.",
      priceRange: "$25 - $55"
    }
  ];

  interface Details {
    id: string,
        backgroundImg: string,
        serviceTitle: string,
        serviceDescription: string,
        priceRange: string;
  }

  interface DetailsHandler {
    detailsHandler: (details: Details) => void
  }

export default function Services({detailsHandler}: DetailsHandler) {
    const navigate = useNavigate();


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-10 px-6 max-w-screen-xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-emerald-500 mb-8 text-center">
        Our Services
      </h2>

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white cursor-pointer rounded-2xl shadow-md p-6 hover:shadow-lg transition text-center"
            onClick={() => {
                navigate(`/services/${service.id}/details`)
                detailsHandler(service)
            }}
          >
            <img src={service.backgroundImg} alt={service.serviceTitle} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.serviceTitle}
            </h3>
            <p className="text-sm text-gray-500">
              Learn more about our {service.serviceTitle.toLowerCase()} solutions and how they can improve your outdoor space.
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
