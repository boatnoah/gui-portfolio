import { useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedBtn from "./AnimatedBtn";

interface Props {
  title: string;
  infoSections?: { title?: string; content?: string; link?: string }[];
}

const BentoBox = ({ title, infoSections }: Props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const boxVariants = {
    hidden: { opacity: 0, y: 500 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20, delay: 1 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 10, delay: 1.75 },
    },
  };

  const contentVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 10, delay: 2 },
    },
  };

  return (
    <motion.div
      className="bg-discord-quaternary text-white container text-left w-[670px] rounded-xl p-5 shadow-2xl m-10"
      variants={boxVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={textVariants} className="text-3xl font-bold">
        {title}
      </motion.h1>

      {infoSections &&
        infoSections.map(({ title: sectionTitle, content, link }, index) => (
          <motion.div variants={contentVariant} className="p-3" key={index}>
            {sectionTitle && (
              <h2 className="text-lg font-bold">{sectionTitle}</h2>
            )}
            {link ? (
              <AnimatedBtn link={link} title={infoSections.title} />
            ) : (
              <p className="whitespace-pre-wrap">{content}</p>
            )}
          </motion.div>
        ))}
    </motion.div>
  );
};

export default BentoBox;
