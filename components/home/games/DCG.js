import Socials from "../../Socials";
import { motion } from "framer-motion";
import Link from "next/link";
import { DFC_TWITTER_URL, DFC_DISCORD_URL } from "@/lib/constants";

const DCG = () => {
  return (
    <section className="min-h-[70vh] px-6 sm:px-12 lg:px-36 pt-12 md:pt-24 py-24 grid md:grid-cols-2 gap-24 lg:gap-48 bg-dcfWhite text-black extendHomeSpacing relative">
      <div></div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute left-0 h-[50%] md:my-auto md:top-0 bottom-0 w-full"
      >
        <div className="md:relative">
          <img
            alt="Cat GPT Preview"
            src="/images/ai-phone.png"
            className="object-contain w-60 md:w-[60%] bottom-0 absolute md:relative"
            loading="lazy"
          />
        </div>
      </motion.div>
      <div className="absolute right-0 bottom-0">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          alt="Cat Hat"
          src="/images/ai-hat.png"
          className="h-24 md:h-full object-contain my-auto top-0 bottom-0"
          loading="lazy"
        />
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
            <h2 className="text-xl uppercase">Degen Cat GPT</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold max-w-xs">
              Artificial Cat Intelligence
            </h1>
          </div>
          <p className="leading-7 font-lato">
            Solana’s very first AI powered text based game. Complete quests with
            your own input. Play as a Jester tasked with acquiring a rare Jewel,
            or become a Knight in the woods protecting the defenseless. Create
            your story Choose your adventure.
          </p>
        </div>
        <div className="grid gap-4">
          <Link
            href={"#"}
            target="_blank"
            className="bg-dcfRed rounded p-4 max-w-max text-black uppercase font-bold text-lg tracking-wider font-lato button-hover-effect"
          >
            <p>Polishing Up</p>
          </Link>
          <Socials
            twitter={DFC_TWITTER_URL}
            discord={DFC_DISCORD_URL}
            phantom={"#"}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default DCG;
