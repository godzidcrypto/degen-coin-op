import Image from "next/image";
import { motion } from "framer-motion";

const Factions = () => {
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
  );
};

export default Factions;
