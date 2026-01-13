import { motion } from "framer-motion"
import heroImage from "../assets/hero/info_combo.jpeg"

export default function Hero() {
  return (
    <section className="w-screen bg-white pt-0 sm:pt-0">
      {/* pt-16 / pt-20 = navbar height spacing */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          w-full
          flex
          justify-center
          items-center
          bg-white
        "
      >
        <img
          src={heroImage}
          alt="Gramin Gold Essence – Banana Powder & Spices"
          className="
            w-full
            max-w-[1400px]
            h-auto
            object-contain
          "
        />
      </motion.div>
    </section>
  )
}