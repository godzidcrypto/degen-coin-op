"use client";

import Image from "next/image";
import Socials from "../components/Socials";
import Link from "next/link";
import AboutUs from "../components/AboutUs";
import { motion } from "framer-motion";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  const factions = [
    {
      name: "Merchant",
      description:
        "The Merchants Guild is a vast corporation that supplies adventurers with all their needs for the right price. They are known for their vast hoard of treasures and artifacts and are also brokers of valuable information.  Headquarters resides under Purraria - biggest kingdom in Mau - ruled by King Robert",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19602.png",
    },
    {
      name: "Steampunk",
      description:
        "Sovereigns of the sky who sail the clouds on magnificent steamships in search of treasures and energy. They are known for their cutting-edge technology and their relentless pursuit of progress and exploration.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19589.png",
    },
    {
      name: "Holy",
      description:
        "Wrapped in mystery, these cats harness the power of both light and dark magic to aid those in need. They are humble in their mission to help those in need, but their true motivations are unknown. They worship The Church of Her.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19610.png",
    },
    {
      name: "Necromancer",
      description:
        "Necromancers communicate with  spirits, utilizing their energy to restore life to their allies or to reanimate their enemies. They are known for their mysterious connection to the spirits and their mastery of the deceased.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19621.png",
    },
    {
      name: "Witch",
      description:
        "Witches possess the knowledge of an ancient tome, allowing them to manipulate gravity and bend the world to their will. They are worldly travelers, known for their grand attire and awe-inspiring power.  -Raising Cities/Kingdoms from nothing",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/867.png",
    },
    {
      name: "Witch Hunter",
      description:
        "The Witch Hunters are feared by all, as they stalk the night in search of their prey or salvation. Their mission is to rebirth their wilds and harmonize the circle of life in Gulvin's Forest.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19608.png",
    },
    {
      name: "Gladiator",
      description:
        "Born from absolute survival, Gladiators are a time-forged tribe of fierce warriors who have trained for generations to become the best in combat. They fight with claws and fangs, and their armor symbolizes their successes in The Arena.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19620.png",
    },
    {
      name: "Jester",
      description:
        "The Laughing Lords are focused on keeping their bags full of gold and hosting monumental parties across Mau. Jesters are known for their love of excess and indulgence, using their charm, wit, and agility to get ahead.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19609.png",
    },
    {
      name: "Knight",
      description:
        "Brave and daring swordcats who rush towards adventure with the glint of sun on their sword. They follow their heart through quests and peril, and are celebrated by the Royal Cat Guard for their bravery and success.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19604.png",
    },
    {
      name: "Desert Nomad",
      description:
        "Roaming the wastelands of their buried civilization, Desert Nomads are a blend of fierce fighters, tactful traders, and unique builders. They have come together in unity to rule the desert and host the Arena with the Merchants along with their Anciet Spire City turned to a Grand Bazaar",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19614.png",
    },
    {
      name: "Demon",
      description:
        "Terrible creatures of darkness and chaos that dwell in the dark depths of the oceans of Mau. They are feared by all who know of them and are known for their powerful tentacles and mastery of dark magic.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19596.png",
    },
    {
      name: "Slime",
      description: "???",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19617.png",
    },
    {
      name: "Wizard",
      description:
        "Masters of the elements who unleash raw energy in chaotic bursts. Fueled by scorching vengeance, their abilities are explosive and often leave craters in their wake. - Their leader stole a page from the Ancient Tome from Witches, that's where they learn their unstable powers.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19606.png",
    },
    {
      name: "Samurai",
      description:
        "The fall of Emperor Kaido has led to the creation of a new era of Samurai. They are the city-guard and a covert elite unit, always ready for action with their sharp blades. They are at peace in battle, using their precision and skill to defeat their foes. They are the protectors of Hanma and have a reputation for their katana mastery.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19595.png",
    },
    {
      name: "OG",
      description:
        "Anchored in the annals of Mau's history, the OG Fat Cats, known as the DFC Pantheon, are a celestial 555 who once stood as pillars of strength and unity. These enigmatic cats, revered by many, tread where others dare not and have transcended the very skies that others merely gaze upon.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/355.png",
    },
  ];

  return (
    <div className="homeSpacing">
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
              href={`https://degenspin.com/`}
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
                  href={"https://degencoinflip.com"}
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
                              The iconic game that took Solana by storm,
                              spawning hundreds of copycats across chains. A
                              decentralized coin flip game where users play on
                              chain via a smart contract with 50/50 odds. Every
                              game is logged and verifiable on chain. One of the
                              top 5 dapps since Solana&apos;s inception.
                            </p>
                            <button className="bg-dcfRed rounded p-4 max-w-max text-black uppercase font-bold text-lg tracking-wider font-lato button-hover-effect">
                              <p>Play Degen Coin Flip</p>
                            </button>
                            <Socials
                              twitter={"https://twitter.com/degencoinflip"}
                              discord={"https://twitter.com/degencoinflip"}
                              phantom={"https://twitter.com/degencoinflip"}
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
                  href={"https://degencoindozer.com"}
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
                              from a classic while pushing the technical
                              boundries of on-hain multiplayer games.
                            </p>
                            <button className="bg-dcfRed rounded p-4 max-w-max text-black uppercase font-bold text-lg tracking-wider font-lato button-hover-effect">
                              <p>Play Degen Coin Dozer</p>
                            </button>
                            <Socials
                              twitter={"https://twitter.com/degencoinflip"}
                              discord={"https://twitter.com/degencoinflip"}
                              phantom={"https://twitter.com/degencoinflip"}
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
                  href={"https://degenspin.com/"}
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
                              and an energy-cackling orb. Will the spirits
                              accept your offering and return in kind? Land on
                              matching runes and colors to gain fate&apos;s
                              favor and win up to 300X
                            </p>
                            <button className="bg-dcfRed rounded p-4 max-w-max text-black uppercase font-bold text-lg tracking-wider font-lato button-hover-effect">
                              <p>Spin To Win</p>
                            </button>
                            <Socials
                              twitter={"https://twitter.com/degencoinflip"}
                              discord={"https://twitter.com/degencoinflip"}
                              phantom={"https://twitter.com/degencoinflip"}
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
                              Jester tasked with acquiring a rare Jewel, or
                              become a Knight in the woods protecting the
                              defenseless. Create your story Choose your
                              adventure.
                            </p>
                            <button className="bg-dcfRed rounded p-4 max-w-max text-black uppercase font-bold text-lg tracking-wider font-lato button-hover-effect">
                              <p>Polishing Up</p>
                            </button>
                            <Socials
                              twitter={"https://twitter.com/degencoinflip"}
                              discord={"https://twitter.com/degencoinflip"}
                              phantom={"https://twitter.com/degencoinflip"}
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
      <AboutUs />
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
            <button className="bg-dcfRed rounded p-4 max-w-max text-black uppercase font-bold text-lg tracking-wider font-lato button-hover-effect">
              <p>Play Degen Coin Flip</p>
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
              Coin Op&apos;s 2nd installment of on chain gaming draws
              inspiration from a classic while pushing the technical boundries
              of on-hain multiplayer games.
            </p>
          </div>
          <div className="grid gap-4">
            <button className="bg-dcfRed rounded p-4 max-w-max text-black uppercase font-bold text-lg tracking-wider font-lato button-hover-effect">
              <p>Play Degen Coin Dozer</p>
            </button>
            <Socials
              twitter={"https://twitter.com/degencoinflip"}
              discord={"https://twitter.com/degencoinflip"}
              phantom={"https://twitter.com/degencoinflip"}
            />
          </div>
        </motion.div>
      </section>
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
              Solana’s very first AI powered text based game. Complete quests
              with your own input. Play as a Jester tasked with acquiring a rare
              Jewel, or become a Knight in the woods protecting the defenseless.
              Create your story Choose your adventure.
            </p>
          </div>
          <div className="grid gap-4">
            <button className="bg-dcfRed rounded p-4 max-w-max text-black uppercase font-bold text-lg tracking-wider font-lato button-hover-effect">
              <p>Play Degen Catgpt</p>
            </button>
            <Socials
              twitter={"https://twitter.com/degencoinflip"}
              discord={"https://twitter.com/degencoinflip"}
              phantom={"https://twitter.com/degencoinflip"}
            />
          </div>
        </motion.div>
      </section>
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
                  className="grid sm:flex sm:flex-col lg:grid lg:grid-cols-[1fr_3fr] text-left gap-4"
                >
                  <div className="bg-[#3D2975] h-32 sm:h-auto aspect-square border-4 border-[#B660E4] relative overflow-hidden">
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
                    <p className="font-lato">{description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section
        className="bg-dcfRed extendHomeSpacing pt-24 lg:pt-48 homeSpacing relative"
        id="careers"
      >
        <Image
          alt="Cat on Whale"
          src="/images/whale.png"
          className="absolute w-64 -top-40 right-0 lg:right-36 -scale-x-100"
          width={500}
          height={500}
        />
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-[1fr_2fr] xl:grid-cols-2 gap-12 z-30 relative"
        >
          <div className="flex flex-col gap-8">
            <Image
              width={200}
              height={200}
              src="/images/logo-main.png"
              alt="Degen Coin Op Logo"
            />
            <h2 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              You focus on building fun games and we&apos;ll take care of the
              rest.
            </h2>
            <p className="font-lato">
              If you&apos;re interested in building fun degen games, talk to us!
              Our on chain games have been played 20 million times with over
              100k+ unique players. If you have an idea you want to bring to
              life, we&apos;ll care of marketing, liquidity, legal, and smart
              contract security.
            </p>
            <Link
              href={`https://forms.gle/inVwK6B7a2zY2E2t5`}
              target="_blank"
              className="bg-dcfWhite text-black uppercase font-bold p-4 max-w-max text-xl rounded tracking-widest font-lato relative button-hover-effect"
            >
              <p>Apply Now</p>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-4 rounded bg-dcfWhite text-black p-8">
              <div className="bg-dcfRed rounded-full p-2 max-w-max text-white">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold font-lato">
                Front End Developer
              </h3>
              <p className="font-light text-sm font-lato">
                Sit deserunt voluptate incididunt elit consequat qui proident
                consequat esse enim. Pariatur veniam excepteur sint exercitation
                occaecat duis magna ipsum laborum elit in ad et mollit.
              </p>
            </div>
            <div className="grid gap-4 rounded bg-dcfWhite text-black p-8 opacity-40">
              <div className="bg-dcfRed rounded-full p-2 max-w-max text-white">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold font-lato">
                Front End Developer
              </h3>
              <p className="font-light text-sm font-lato">
                Sit deserunt voluptate incididunt elit consequat qui proident
                consequat esse enim. Pariatur veniam excepteur sint exercitation
                occaecat duis magna ipsum laborum elit in ad et mollit.
              </p>
            </div>
            <div className="grid gap-4 rounded bg-dcfWhite text-black p-8 opacity-40">
              <div className="bg-dcfRed rounded-full p-2 max-w-max text-white">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold font-lato">
                Front End Developer
              </h3>
              <p className="font-light text-sm font-lato">
                Sit deserunt voluptate incididunt elit consequat qui proident
                consequat esse enim. Pariatur veniam excepteur sint exercitation
                occaecat duis magna ipsum laborum elit in ad et mollit.
              </p>
            </div>
            <div className="grid gap-4 rounded bg-dcfWhite text-black p-8 opacity-40">
              <div className="bg-dcfRed rounded-full p-2 max-w-max text-white">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold font-lato">
                Front End Developer
              </h3>
              <p className="font-light text-sm font-lato">
                Sit deserunt voluptate incididunt elit consequat qui proident
                consequat esse enim. Pariatur veniam excepteur sint exercitation
                occaecat duis magna ipsum laborum elit in ad et mollit.
              </p>
            </div>
          </div>
        </motion.div>
        <div className="relative h-screen extendHomeSpacing -mt-36">
          <Image
            alt="Clouds"
            src="/images/bottom.png"
            className="absolute inset-0 h-full w-full object-cover"
            fill
            sizes="(max-width: 600px) 100vw, 600px"
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#263D67] to-transparent" />
        </div>
      </section>
    </div>
  );
}
