import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

interface FormData {
    name: string,
    email: string,
    message: string
}

const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    message: yup.string().min(10, "Message must be at least 10 characters").required("Message is required")
}).required()

export default function Contact() {

    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({resolver:yupResolver(schema)});

    const onSubmit = (data: FormData) => {
        console.log(data);
        console.log(errors);
        
        alert("Message sent")
        navigate('/')
    }
   


  return (
    <div className="w-full min-h-screen px-6 py-30 bg-white flex flex-col lg:flex-row gap-10 items-start justify-center">
      {/* Google Maps */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2"
      >
        <h2 className="text-3xl font-bold text-emerald-600 mb-4">Find Us</h2>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1912.5596017302958!2d23.7597740127729!3d37.98044168350481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd5642996019%3A0x2374e2ccfd7410e!2sKesarias%2039%2C%20Athina%20115%2027!5e0!3m2!1sbg!2sgr!4v1750871165029!5m2!1sbg!2sgr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2"
      >
        <h2 className="text-3xl font-bold text-emerald-600 mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-50 p-6 rounded-xl shadow-md space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">
              Name
            </label>
            <input
            {...register("name")}
              type="text"
              id="name"
              className="w-full mt-1 p-2 border rounded-md focus:outline-emerald-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
            {...register("email")}
              type="email"
              id="email"
              className="w-full mt-1 p-2 border rounded-md focus:outline-emerald-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
            {...register("message")}
              id="message"
              rows={5}
              className="w-full mt-1 p-2 border rounded-md focus:outline-emerald-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 cursor-pointer text-white font-semibold px-6 py-2 rounded-3xl transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}
