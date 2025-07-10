import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { services } from "../static-data/services";  

export default function Services() {
    const navigate = useNavigate();


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 px-6 max-w-screen-xl mx-auto mb-20"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-emerald-500 mb-8 mt-15 text-center">
        Our Services
      </h2>

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white cursor-pointer rounded-2xl shadow-md p-6 hover:shadow-lg transition text-center"
            onClick={() => {
                navigate(`/services/${service.id}/details`)
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
