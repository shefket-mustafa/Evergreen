import { motion } from "framer-motion";
import { treatments } from "../static-data/treatments";

export default function Treatments() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 px-6 max-w-screen-xl mx-auto"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-emerald-600 mt-20 mb-20 text-center">
        Our Treatment Methods
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {treatments.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={t.image}
              alt={t.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {t.title}
            </h3>
            <p className="text-sm text-gray-600">{t.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
