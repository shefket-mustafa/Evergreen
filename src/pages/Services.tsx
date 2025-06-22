import { motion } from "framer-motion";
import ServicesItem from "../components/ServicesItem";

export default function Services() {
  const ServiceItems = [
    {
      id: "0",
      backgroundImg: "url('/images/lawnmower-service.jpg')",
      serviceTitle: "Scarification",
      serviceDescription: "Revive Your Lawn - Deep Clean for Thicker Grass",
    },
    {
      id: "1",
      backgroundImg: "url('/images/seeding.jpg')",
      serviceTitle: "Seeding",
      serviceDescription: "Fill Bare Spots - Grow a Denser, Softer Lawn",
    },
    {
      id: "2",
      backgroundImg: "url('/images/turf-laying.jpeg')",
      serviceTitle: "Turf Laying",
      serviceDescription:
        "Instant Lawn Transformation - Fresh Rolls of Premium Turf",
    },
    {
      id: "3",
      backgroundImg: "url('/images/aeration.jpg')",
      serviceTitle: "Aeration",
      serviceDescription:
        "Improve Soil Health - Let Your Lawn Breathe and Thrive",
    },
    {
      id: "4",
      backgroundImg: "url('/images/fertilization.jpg')",
      serviceTitle: "Fertilization",
      serviceDescription:
        "Boost Lawn Nutrition - Targeted Feeding for Stronger Growth",
    },
  ];

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="w-full h-screen flex py-8  flex-col "
      >
        {/* left container  */}
        <div className="flex ">
          <div
            className="relative w-1/2 bg-cover h-96 rounded-3xl mx-8"
            style={{ backgroundImage: "url('/images/services-4.jpg')" }}
          >
            <div className="absolute flex flex-col gap-3 bottom-5 left-10 text-black">
              <p className="bg-white/70 px-4 py-2 rounded-4xl">
                ✅ A thicker, Greener Lawn in Weeks
              </p>
              <p className="bg-white/70 px-4 py-2 rounded-4xl">
                ✅ No More Weeds - Guaranteed
              </p>
              <p className="bg-white/70 px-4 py-2 rounded-4xl">
                ✅ Savey You Time & Money Long-Term
              </p>
            </div>
          </div>

          {/* right container */}
          <div className="w-1/2 flex flex-col gap-5">
            <p className="text-6xl font-bold">
              Where Pasion for Greenery Meets Professional Care
            </p>
            <p className="text-gray-500">
              EverGreen Lawn & Weed delivers professional, specialized lawn care
              services across Bulgaria. Our experienced team combines in-depth
              turf knowledge with high-quality systemic herbicides to strenghen
              your grass, enhancing its health, color and resilience. We excel
              at moss control - not just removing it but correcting the
              underlying conditions to prevent its return. Using professional
              scarification and aeration techniques we ensure a long-term
              improvements to your lanw's vitality.
            </p>

            <p className="text-gray-500">
              Our approach is efficient, effective and safe for families and
              pets. Plus with our expertise and commercial-grade equipment you
              will save time and money compared to DIY methods. Trust EverGreen
              Lawn & Weed for a healthier, greener lawn that lasts.
            </p>
          </div>
        </div>ß

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="text-2xl pl-8 font-bold">Explore Our Services</p>
          <p className="text-lgx pl-8 text-gray-500">
            Professional Solutions for a Healthier, Thicker, Weed-Free Lawn
          </p>

          <div className="flex justify-between p-5 items-center">
            {ServiceItems.map((service) => (
              <div>
                {" "}
                <ServicesItem key={service.id} service={service} />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
