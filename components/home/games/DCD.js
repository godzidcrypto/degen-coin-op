import Socials from "../../Socials";
import { motion } from "framer-motion";
import Link from "next/link";
import { DCD_URL, DFC_TWITTER_URL, DFC_DISCORD_URL } from "@/lib/constants";

const DCD = () => {
  return (
    <section className="min-h-[70vh] px-6 sm:px-12 lg:px-36 pt-12 md:pt-24 py-24 grid md:grid-cols-2 gap-24 lg:gap-48 bg-dcfWhite text-black extendHomeSpacing relative">
      <div></div>
      <div className="absolute left-0 h-[50%] md:my-auto md:top-0 bottom-0 w-full">
        <div className="md:relative">
          <motion.img
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            alt="Degen Coin Dozer Preview"
            src="/images/dcd-phone.png"
            className="object-contain w-60 md:w-[60%] bottom-0 absolute md:relative"
            loading="lazy"
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            alt="Purple DCD Cat"
            src="/images/purple-dcd-cat.png"
            className="absolute md:left-0 md:-top-16 lg:-top-24 -bottom-[1.7rem] right-0 z-30 w-40 md:w-64 lg:w-auto"
            loading="lazy"
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-col justify-between gap-4 order-first md:order-last z-20"
      >
        <div className="grid gap-4">
          <div>
            <h2 className="text-xl uppercase">Degen Coin Dozer</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold max-w-xs">
              Drop it like its hot
            </h1>
          </div>
          <p className="leading-7 font-lato">
            Test your timing in this Solana arcade experience. Drop and push
            your coin onto a platform and shower yourself with riches. Degen
            Coin Op&apos;s 2nd installment of on chain gaming draws inspiration
            from a classic while pushing the technical boundries of on-hain
            multiplayer games.
          </p>
        </div>
        <div className="grid gap-4">
          <Link
            href={DCD_URL}
            target="_blank"
            className="bg-dcfRed rounded p-4 max-w-max text-black uppercase font-bold text-lg tracking-wider font-lato button-hover-effect"
          >
            <p>Play Degen Coin Dozer</p>
          </Link>
          <Socials
            twitter={DFC_TWITTER_URL}
            discord={DFC_DISCORD_URL}
            phantom={DCD_URL}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default DCD;
