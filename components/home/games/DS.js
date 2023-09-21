import Socials from "../../Socials";
import { motion } from "framer-motion";

const DS = () => {
  return (
    <section className="min-h-[70vh] px-6 sm:px-12 lg:px-36 pt-12 md:pt-24 py-24 grid md:grid-cols-2 gap-24 lg:gap-48 extendHomeSpacing relative overflow-hidden lg:overflow-visible">
      <div className="absolute w-full h-full">
        <img
          alt="Portal Background"
          src="/images/ds-phone-bg.png"
          className="brightness-50 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        alt="Ghost Cat"
        src="/images/ghost.png"
        className="w-64 md:w-72 lg:w-80 lg:-scale-x-100 -rotate-[25deg] lg:rotate-[25deg] absolute -right-12 md:-right-36 -bottom-28 top-auto md:top-0 lg:top-auto lg:-left-36 lg:bottom-24"
      />
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-col justify-between gap-4 relative z-30"
      >
        <div className="grid gap-4">
          <div>
            <h2 className="text-xl uppercase">Degen Spin</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold max-w-xs">
              All or Nothing
            </h1>
          </div>
          <p className="leading-7 font-lato">
            Contact ancient spirits and reveal your fate. The winds of Nekkro
            beckon you to a mysterious shrine and an energy-cackling orb. Will
            the spirits accept your offering and return in kind? Land on
            matching runes and colors to gain fate&apos;s favor and win up to
            300X
          </p>
        </div>
        <div className="grid gap-4">
          <button className="bg-dcfRed rounded p-4 max-w-max text-black uppercase font-bold text-lg tracking-wider font-lato button-hover-effect">
            <p>Play Degen Spin</p>
          </button>
          <Socials
            twitter={"https://twitter.com/degencoinflip"}
            discord={"https://twitter.com/degencoinflip"}
            phantom={"https://twitter.com/degencoinflip"}
          />
        </div>
      </motion.div>
      <div>
        <motion.img
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          alt="Degen Spin Preview"
          src="/images/ds-phone.png"
          className="absolute bottom-12 lg:-bottom-12 lg:right-0 xl:right-48 h-0 md:h-[70%] lg:h-full object-contain z-30"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default DS;
