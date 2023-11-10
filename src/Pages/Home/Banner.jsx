import { motion } from "framer-motion";

const Banner = () => {
  const bannerVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.3, // Stagger the children animations
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="hero min-h-screen"
      style={{
        backgroundImage: 'url(https://i.ibb.co/mS6yHhL/andrew-neel-cckf4-Ts-HAuw-unsplash.jpg)',
      }}
      initial="hidden"
      animate="visible"
      variants={bannerVariants}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <motion.div
        className="hero-content h-full w-full bg-gradient-to-r from-[#37aca8bb] to-[rgba(82,164,197,0.13)] text-center text-neutral-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="md:w-2/3 text-white">
          <motion.h1
            className="mb-5 text-5xl md:text-6xl font-bold"
            variants={childVariants}
          >
            Welcome To InKly.co
          </motion.h1>
          <motion.p
            className="mb-5 text-xl md:text-2xl"
            variants={childVariants}
          >
            We promote positive culture through inspiring articles on health,
            design, and web. Perfect for magazine, newsletter, professional and
            personal blog publishing.
          </motion.p>
          <motion.button
            className="btn btn-accent text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={childVariants}
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
