import { motion } from "framer-motion";

export default function About() {

  return <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full lg:h-screen mx-auto px-6 flex flex-col justify-center text-gray-900 bg-cover"

    >
      <h1 className="text-4xl font-bold mb-6">About Evergreen</h1>

      <p className="text-lg mb-4 leading-relaxed">
        <strong>Evergreen</strong> is a digital-first platform built to empower businesses, creators, and individuals with sustainable, forward-thinking solutions. We're committed to combining clean design, intuitive technology, and ethical development practices to create lasting digital impact.
      </p>

      <p className="text-lg mb-4 leading-relaxed">
        Born out of the desire to make the web more beautiful and more meaningful, Evergreen stands for clarity, growth, and resilience. Whether you're a startup seeking visibility, a freelancer building your brand, or an enterprise looking to modernize, we're here to support that journey.
      </p>

      <p className="text-lg mb-4 leading-relaxed">
        Our stack includes <strong>React</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and <strong>Framer Motion</strong>—delivering powerful performance and smooth interactions while keeping the experience accessible and elegant.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          To nurture digital growth by building sustainable, design-conscious web experiences that scale gracefully and resonate with users.
        </p>
      </div>
    </motion.section>

}
    
