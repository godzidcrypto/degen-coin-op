import Link from "next/link";
import Image from "next/image";
import Socials from "../Socials";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DCF_URL,
  DCD_URL,
  DS_URL,
  DFC_DISCORD_URL,
  DCF_TWITTER_URL,
  DFC_TWITTER_URL,
  NEKKRO_DISCORD_URL,
  NEKKRO_TWITTER_URL,
} from "@/lib/constants";
import { DCF } from "./games";

const Hero = () => {
  return (
    <section className="flex flex-col justify-between min-h-[90vh]">
      <div className="flex flex-col justify-center extendHomeSpacing h-[60vh] relative">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
          autoPlay
          muted
          loop
          poster="/images/poster.png"
        >
          <source src="/nekkro.mp4" type="video/mp4" />
        </video>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="absolute flex flex-col justify-center homeSpacing gap-6"
        >
          <h1 className="uppercase font-semibold max-w-[40rem]">
            The cost of ambition is high <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              but the reward is even higher
            </span>
          </h1>
          <Link
            href={DS_URL}
            className="uppercase font-bold py-2 px-6 border border-dcfRed rounded max-w-max button-hover-effect"
          >
            <p>Play Degen Spin</p>
          </Link>
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent" />
      </div>
      <div className="flex flex-col py-8 gap-2 relative z-20 min-h-[30vh] -mt-6 sm:-mt-12 md:-mt-24 lg:-mt-36">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="w-full h-full font-lato z-30 relative"
          id="games"
        >
          <p>Our Games</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 items-start gap-4">
            <div className="grid gap-4">
              <Link
                href={DCF_URL}
                target="_blank"
                className="aspect-video relative hover:scale-[1.15] hover:z-30 transition duration-300"
              >
                <Image
                  alt="Degen Coin Flip"
                  src="/images/dcf.png"
                  className="absolute inset-0 h-full w-full object-cover"
                  fill
                  sizes="(max-width: 600px) 100vw, 600px"
                />
                <div className="bg-[rgba(0,0,0,.7)] h-full w-full opacity-0 hover:opacity-100 z-30 absolute transition duration-300 ease-in-out flex justify-center items-center">
                  <p className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
                    Double Your Sol Instantly
                  </p>
                </div>
              </Link>
              <div>
                <h2 className="font-bold text-xl">Double Or Nothing</h2>
                <Dialog>
                  <DialogTrigger className="border-b-2 border-dcfRed max-w-max text-xs font-bold">
                    Find out more
                  </DialogTrigger>
                  <DialogContent className="bg-dcfWhite text-black">
                    <DialogHeader>
                      <DialogDescription className="grid md:grid-cols-2 gap-8 py-4">
                        <div className="relative h-[40vh]">
                          <video
                            className="absolute top-0 left-0 w-full h-full object-cover rounded"
                            autoPlay
                            muted
                            loop
                            poster="/images/poster.png"
                          >
                            <source src="/nekkro.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="flex flex-col gap-4">
                          <h2 className="font-black text-3xl">
                            Degen Coin Flip: Double or Nothing
                          </h2>
                          <p className="text-justify">
                            The iconic game that took Solana by storm, spawning
                            hundreds of copycats across chains. A decentralized
                            coin flip game where users play on chain via a smart
                            contract with 50/50 odds. Every game is logged and
                            verifiable on chain. One of the top 5 dapps since
                            Solana&apos;s inception.
                          </p>
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
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="grid gap-4">
              <Link
                href={DCD_URL}
                target="_blank"
                className="aspect-video relative hover:scale-[1.125] hover:z-30 transition duration-300"
              >
                <Image
                  alt="Degen Coin Dozer"
                  src="/images/dcd.png"
                  className="absolute inset-0 h-full w-full object-cover"
                  fill
                  sizes="(max-width: 600px) 100vw, 600px"
                  loading="lazy"
                />
                <div className="bg-[rgba(0,0,0,.7)] h-full w-full opacity-0 hover:opacity-100 z-30 absolute transition duration-300 ease-in-out flex justify-center items-center">
                  <p className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
                    Play with Friends
                  </p>
                </div>
              </Link>
              <div>
                <h2 className="font-bold text-xl">Drop It Like Its Hot</h2>
                <Dialog>
                  <DialogTrigger className="border-b-2 border-dcfRed max-w-max text-xs font-bold">
                    Find out more
                  </DialogTrigger>
                  <DialogContent className="bg-dcfWhite text-black">
                    <DialogHeader>
                      <DialogDescription className="grid md:grid-cols-2 gap-8 py-4 text-justify">
                        <div className="relative h-[30vh] md:h-[40vh]">
                          <video
                            className="absolute top-0 left-0 w-full h-full object-cover rounded"
                            autoPlay
                            muted
                            loop
                            poster="/images/poster.png"
                          >
                            <source src="/nekkro.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="flex flex-col gap-4">
                          <h2 className="font-black text-xl md:text-3xl">
                            Degen Coin Dozer: Drop It Like Its Hot
                          </h2>
                          <p>
                            Test your timing in this Solana arcade experience.
                            Drop and push your coin onto a platform and shower
                            yourself with riches. Degen Coin Op&apos;s 2nd
                            installment of on chain gaming draws inspiration
                            from a classic while pushing the technical boundries
                            of on-hain multiplayer games.
                          </p>
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
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="grid gap-4">
              <Link
                href={DS_URL}
                target="_blank"
                className="aspect-video relative hover:scale-[1.15] hover:z-30 transition duration-300"
              >
                <Image
                  alt="Degen Spin"
                  src="/images/ds.png"
                  className="absolute inset-0 h-full w-full object-cover"
                  fill
                  sizes="(max-width: 600px) 100vw, 600px"
                  loading="lazy"
                />
                <div className="bg-[rgba(0,0,0,.7)] h-full w-full opacity-0 hover:opacity-100 z-30 absolute transition duration-300 ease-in-out flex justify-center items-center">
                  <p className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
                    Win up to 300x
                  </p>
                </div>
              </Link>
              <div>
                <h2 className="font-bold text-xl">All or Nothing</h2>
                <Dialog>
                  <DialogTrigger className="border-b-2 border-dcfRed max-w-max text-xs font-bold">
                    Find out more
                  </DialogTrigger>
                  <DialogContent className="bg-dcfWhite text-black">
                    <DialogHeader>
                      <DialogDescription className="grid md:grid-cols-2 gap-8 py-4 text-justify">
                        <div className="relative h-[30vh] md:h-[40vh]">
                          <video
                            className="absolute top-0 left-0 w-full h-full object-cover rounded"
                            autoPlay
                            muted
                            loop
                            poster="/images/poster.png"
                          >
                            <source src="/nekkro.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="flex flex-col gap-4">
                          <h2 className="font-black text-xl md:text-3xl">
                            Degen Spin: All or Nothing
                          </h2>
                          <p>
                            Contact ancient spirits and reveal your fate. The
                            winds of Nekkro beckon you to a mysterious shrine
                            and an energy-cackling orb. Will the spirits accept
                            your offering and return in kind? Land on matching
                            runes and colors to gain fate&apos;s favor and win
                            up to 300X
                          </p>
                          <Link
                            href={DS_URL}
                            target="_blank"
                            className="bg-dcfRed rounded p-4 max-w-max text-black uppercase font-bold text-lg tracking-wider font-lato button-hover-effect"
                          >
                            <p>Spin To Win</p>
                          </Link>
                          <Socials
                            twitter={NEKKRO_TWITTER_URL}
                            discord={NEKKRO_DISCORD_URL}
                            phantom={DS_URL}
                          />
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="grid gap-4">
              <Link
                href={"#"}
                target="_blank"
                className="aspect-video relative hover:scale-[1.15] hover:z-30 transition duration-300"
              >
                <Image
                  alt="Artificial Cat Intelligence"
                  src="/images/gpt.png"
                  className="absolute inset-0 h-full w-full object-cover"
                  fill
                  sizes="(max-width: 600px) 100vw, 600px"
                  loading="lazy"
                />
                <div className="bg-[rgba(0,0,0,.7)] h-full w-full opacity-0 hover:opacity-100 z-30 absolute transition duration-300 ease-in-out flex justify-center items-center">
                  <p className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
                    Coming Soon
                  </p>
                </div>
              </Link>
              <div>
                <h2 className="font-bold text-xl">
                  Artificial Cat Intelligence
                </h2>
                <Dialog>
                  <DialogTrigger className="border-b-2 border-dcfRed max-w-max text-xs font-bold">
                    Find out more
                  </DialogTrigger>
                  <DialogContent className="bg-dcfWhite text-black">
                    <DialogHeader>
                      <DialogDescription className="grid md:grid-cols-2 gap-8 py-4 text-justify">
                        <div className="relative h-[30vh] md:h-[40vh]">
                          <video
                            className="absolute top-0 left-0 w-full h-full object-cover rounded"
                            autoPlay
                            muted
                            loop
                            poster="/images/poster.png"
                          >
                            <source src="/nekkro.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="flex flex-col gap-4">
                          <h2 className="font-black text-xl md:text-3xl">
                            Degen Cat GPT
                          </h2>
                          <p>
                            Solana’s very first AI powered text based game.
                            Complete quests with your own input. Play as a
                            Jester tasked with acquiring a rare Jewel, or become
                            a Knight in the woods protecting the defenseless.
                            Create your story Choose your adventure.
                          </p>
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
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
