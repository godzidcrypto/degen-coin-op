import Image from "next/image";
import { motion } from "framer-motion";
import { factions } from "@/lib/constants";

const Factions = () => {
  return (
    <section
      className="bg-gradient-to-b from-[#3D2975] to-[#1F1842] extendHomeSpacing flex flex-col items-center text-center relative"
      id="factions"
    >
      <div className="w-full h-full relative">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
        <img
          alt="Factions Statue"
          src="/images/purple-fat-cat.png"
          className="w-full min-h-[70vh] object-cover"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#3D2975] to-transparent" />
      </div>
      <div className="pt-12 pb-36 relative">
        <div className="absolute -top-48 xl:-top-24 right-4 xl:right-16">
          <img
            alt="Ball of Yarn"
            src="/images/yarn.png"
            className="w-64 relative z-20"
            loading="lazy"
          />
          <img
            alt="Ball of Yarn"
            src="/images/shadow.png"
            className="w-52 -mt-16 relative z-10"
            loading="lazy"
          />
        </div>
        <div className="grid gap-4 pb-24 px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-bold">
            Fat Cats Factions
          </h1>
          <p className="leading-7 mx-auto font-lato">
            Welcome to the world of Mau, where factions of cats wield powerful
            magic and battle for honor, wealth, and power.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-12 homeSpacing">
          {factions.map((faction, index) => {
            const { name, description, img } = faction;
            return (
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                key={index}
                className="grid sm:flex sm:flex-col lg:grid lg:grid-cols-[1fr_3fr] sm:text-left justify-center sm:justify-normal text-center gap-4"
              >
                <div className="bg-[#3D2975] h-32 sm:h-auto aspect-square border-4 border-[#B660E4] relative overflow-hidden mx-auto sm:mx-0">
                  <Image
                    alt={`${name} Fat Cat`}
                    src={img}
                    className="absolute inset-0 h-full w-full object-cover scale-150"
                    fill
                    sizes="(max-width: 600px) 100vw, 600px"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="uppercase text-[#B660E4] text-xl font-bold">
                    {name}
                  </h3>
                  <p className="font-lato text-justify sm:text-left">
                    {description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Factions;
