import Socials from "../../Socials";
import { motion } from "framer-motion";
import Link from "next/link";
import { DCF_URL, DFC_DISCORD_URL, DCF_TWITTER_URL } from "@/lib/constants";

const DCF = () => {
  return (
    <section className="min-h-[70vh] px-6 sm:px-12 lg:px-36 pt-12 md:pt-24 py-24 grid md:grid-cols-2 gap-24 lg:gap-48 extendHomeSpacing relative">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-col justify-between gap-4"
      >
        <div className="grid gap-4">
          <div>
            <h2 className="text-xl uppercase">Degen Coin Flip</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold max-w-xs">
              Double or Nothing
            </h1>
          </div>
          <p className="leading-7 font-lato">
            The iconic game that took Solana by storm, spawning hundreds of
            copycats across chains. A decentralized coin flip game where users
            play on chain via a smart contract with 50/50 odds. Every game is
            logged and verifiable on chain. One of the top 5 dapps since
            Solana&apos;s inception.
          </p>
        </div>
        <div className="grid gap-4">
          <Link
            href={DCF_URL}
            target="_blank"
            className="bg-dcfRed rounded p-4 max-w-max text-black uppercase font-bold text-lg tracking-wider font-lato button-hover-effect"
          >
            <p>Play Degen Coin Flip</p>
          </Link>
          <Socials
            twitter={DCF_TWITTER_URL}
            discord={DFC_DISCORD_URL}
            phantom={DCF_URL}
          />
        </div>
      </motion.div>
      <div>
        <motion.img
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          alt="Degen Coin Flip Preview"
          src="/images/dcf-phone.png"
          className="absolute left-0 bottom-0 md:left-auto md:bottom-auto xl:-bottom-12 h-0 md:h-[70%] xl:h-full object-contain z-30"
          loading="lazy"
        />
      </div>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        alt="Cat Flipping a Coin"
        src="/images/flip.png"
        className="absolute bottom-0 right-0 h-[20%] lg:h-[30%] object-contain -scale-x-100"
        loading="lazy"
      />
    </section>
  );
};

export default DCF;
