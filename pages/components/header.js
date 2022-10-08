
import Image from "next/image";

import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  let easing = [0.6, 0.05, 0.01, 0.99];

  const fadeInUp = {
    hidden: { opacity: 0 },
    initial: {
      y: 60,
      opacity: 1,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.7,
        duration: 1,
        ease: easing,
      },
    },
  };

  return (
    <>
      <div className="mx-auto mt-12 justify-center px-5 pt-4 text-center text-[#ffffff] md:px-6 lg:mt-36 lg:px-8">
        <div className="roboto-regular mb-4 lg:mb-12">
          <motion.h2
            initial="hidden"
            animate="animate"
            exit={{ opacity: 0 }}
            variants={fadeInUp}
            className="text-4xl font-semibold text-white lg:text-7xl"
          >
            Lorem impsum  
            <br />
            <p>Lorem impusm gen</p>
          </motion.h2>
          <div className="mt-3 mb-4 lg:mt-6 lg:mb-0">
            <motion.p
              initial="hidden"
              animate="animate"
              exit={{ opacity: 0 }}
              variants={fadeInUp}
              className="text-xl text-[#868686] lg:text-2xl"
            >
              Sit Amet Facilisis Varius Sapien
            </motion.p>
          </div>
          <motion.div
            initial="hidden"
            animate="animate"
            exit={{ opacity: 0 }}
            variants={fadeInUp}
            className="roboto-medium mx-auto mt-3 flex max-w-xs flex-col space-y-1 lg:mt-9 lg:flex-row lg:space-y-0"
          >

          </motion.div>
        </div>
        <div className="container relative top-1/2 left-1/2 mb-[10rem] h-[70%] w-[95%] translate-y-[30%] translate-x-[-50%] md:mb-[15rem] lg:mb-[37rem] lg:h-1/2 lg:w-2/3">
          <motion.div
            initial="hidden"
            animate="animate"
            exit={{ opacity: 0 }}
            variants={fadeInUp}
            className="overflow-hidden rounded-lg bg-[#111111]"
            style={{
              scale,
            }}
          >
            <motion.div
              style={{
                scaleY: scrollYProgress,
              }}
            >
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="roboto-medium mx-auto mb-24 flex max-w-[100rem] px-8 pt-4 text-[#eeeeee] md:items-center md:justify-between md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="pr-[3rem] md:max-w-xl md:pr-[3rem] lg:max-w-3xl lg:pr-[7rem] xl:pr-[17rem]">
            <h3 className="pb-3 text-2xl lg:pb-6 lg:text-4xl">
              Lorem ipsum dolor sit amet venenatis non quis fringilla est
            </h3>
            <p className="text-md pb-12 text-[#757575] lg:pb-0 lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              hendrerit vulputate odio, quis fringilla est venenatis non. Nunc
              felis libero, auctor vel tellus at, suscipit finibus tortor.
            </p>
          </div>
          <div>
            <Image
              src="/images/placeholder.png"
              alt="placeholder"
              width={1100}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="roboto-medium mx-auto mb-24 mt-12 flex max-w-[100rem] px-8 pt-4 text-[#eeeeee] md:items-center md:justify-between md:px-6 lg:mt-[16rem] lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="block pr-[3rem] md:max-w-xl md:pr-[3rem] lg:hidden lg:max-w-3xl lg:pr-[7rem] xl:pr-[17rem]">
            <h3 className="pb-3 text-2xl lg:pb-6 lg:text-4xl">
              Lorem ipsum dolor sit amet venenatis non quis fringilla est
            </h3>
            <p className="text-md pb-12 text-[#757575] lg:pb-0 lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              hendrerit vulputate odio, quis fringilla est venenatis non. Nunc
              felis libero, auctor vel tellus at, suscipit finibus tortor.
            </p>
          </div>
          <div>
            <Image
              src="/images/placeholder.png"
              alt="placeholder"
              width={1100}
              height={600}
              className="rounded-lg"
            />
          </div>
          <div className="hidden pl-[3rem] md:max-w-xl md:pl-[3rem] lg:block lg:max-w-3xl lg:pl-[7rem] xl:pl-[17rem]">
            <h3 className="pb-3 text-2xl lg:pb-6 lg:text-4xl">
              Lorem ipsum dolor sit amet venenatis non quis fringilla est
            </h3>
            <p className="text-md pb-12 text-[#757575] lg:pb-0 lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              hendrerit vulputate odio, quis fringilla est venenatis non. Nunc
              felis libero, auctor vel tellus at, suscipit finibus tortor.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
