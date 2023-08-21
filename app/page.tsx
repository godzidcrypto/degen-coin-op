import Image from "next/image";
import Socials from "../components/Socials";

export default function Home() {
  const factions = [
    {
      name: "Merchant",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19602.png",
    },
    {
      name: "Steampunk",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19589.png",
    },
    {
      name: "Holy",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19610.png",
    },
    {
      name: "Necromancer",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19621.png",
    },
    {
      name: "Witch",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/867.png",
    },
    {
      name: "Witch Hunter",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19608.png",
    },
    {
      name: "Gladiator",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19620.png",
    },
    {
      name: "Jester",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19609.png",
    },
    {
      name: "Knight",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19604.png",
    },
    {
      name: "Desert Nomad",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19614.png",
    },
    {
      name: "Demon",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19596.png",
    },
    {
      name: "Slime",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19617.png",
    },
    {
      name: "Wizard",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19606.png",
    },
    {
      name: "Samurai",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "https://degenfatcats-theta.s3.us-east-2.amazonaws.com/assets-fs/19595.png",
    },
    {
      name: "OG",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
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
          <div className="absolute flex flex-col justify-center homeSpacing gap-6">
            <h1 className="uppercase font-semibold max-w-xl">
              The cost of ambition is high <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                but the reward is even higher
              </span>
            </h1>
            <button className="uppercase font-bold py-2 px-6 border border-dcfRed rounded max-w-max">
              Play Degen Spin
            </button>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="flex flex-col py-8 gap-2 relative z-20 min-h-[30vh] -mt-36">
          <div className="w-full h-full font-lato z-30 relative">
            <p>Our Games</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 items-start gap-4">
              <div className="grid gap-4">
                <div className="aspect-video relative">
                  <Image
                    alt="Degen Coin Flip"
                    src="/images/dcf.png"
                    className="absolute inset-0 h-full w-full object-cover"
                    layout="fill"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-xl">Double Or Nothing</h2>
                  <p className="border-b-2 border-dcfRed max-w-max text-xs font-bold">
                    Find out more
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="aspect-video relative">
                  <Image
                    alt="Degen Coin Dozer"
                    src="/images/dcd.png"
                    className="absolute inset-0 h-full w-full object-cover"
                    layout="fill"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-xl">Drop It Like Its Hot</h2>
                  <p className="border-b-2 border-dcfRed max-w-max text-xs font-bold">
                    Find out more
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="aspect-video relative">
                  <Image
                    alt="Degen Spin"
                    src="/images/ds.png"
                    className="absolute inset-0 h-full w-full object-cover"
                    layout="fill"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-xl">All or Nothing</h2>
                  <p className="border-b-2 border-dcfRed max-w-max text-xs font-bold">
                    Find out more
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="aspect-video relative">
                  <Image
                    alt="Artificial Cat Intelligence"
                    src="/images/gpt.png"
                    className="absolute inset-0 h-full w-full object-cover"
                    layout="fill"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-xl">
                    Artificial Cat Intelligence
                  </h2>
                  <p className="border-b-2 border-dcfRed max-w-max text-xs font-bold">
                    Find out more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dcfRed extendHomeSpacing min-h-[80vh] relative">
        <div className="absolute -left-12 h-full my-auto w-auto top-0 bottom-0 opacity-20 lg:opacity-50 xl:opacity-100">
          <img
            alt="Cat on Cloud 1"
            src="/images/adam-left.png"
            className="h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute right-0 h-[80%] my-auto w-auto top-0 bottom-0 opacity-20 lg:opacity-50 xl:opacity-100">
          <img
            alt="Cat on Cloud 2"
            src="/images/adam-right.png"
            className="h-full object-contain"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-8 justify-center items-center text-center min-h-[80vh] relative z-20 px-0 md:px-8 py-8 md:py-0">
          <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-xl">
            <span className="text-sm">About Us</span>
            <br />
            The Best Solana People Making The Best Games
          </h1>
          <div className="grid md:grid-cols-3 gap-4 md:gap-24">
            <div className="flex flex-col items-center">
              <div className="bg-black text-dcfRed rounded-full p-2 max-w-max">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="8" r="5" fill="currentColor" />
                    <path d="M20 21a8 8 0 1 0-16 0" />
                    <path
                      fill="currentColor"
                      d="M12 13a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8z"
                    />
                  </g>
                </svg>
              </div>
              <div className="font-lato">
                <span className="uppercase font-bold text-3xl">23 Million</span>
                <p className="uppercase font-light text-sm">
                  Monthly Active Users
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-black text-dcfRed rounded-full p-2 max-w-max">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M2.45 6.76h9.59c.12 0 .23.05.32.14l1.52 1.56c.28.29.08.78-.32.78H3.97c-.12 0-.23-.05-.32-.14L2.13 7.54c-.28-.29-.08-.78.32-.78Zm-.32-2.07l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78l-1.51 1.56c-.08.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78Zm11.74 6.61l-1.52 1.56c-.09.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78Z"
                  />
                </svg>
              </div>
              <div className="font-lato">
                <span className="uppercase font-bold text-3xl">10 Million</span>
                <p className="uppercase font-light text-sm">
                  Solana Transactions
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-black text-dcfRed rounded-full p-2 max-w-max">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M592 192H473.26c12.69 29.59 7.12 65.2-17 89.32L320 417.58V464c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V240c0-26.51-21.49-48-48-48zM480 376c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm-46.37-186.7L258.7 14.37c-19.16-19.16-50.23-19.16-69.39 0L14.37 189.3c-19.16 19.16-19.16 50.23 0 69.39L189.3 433.63c19.16 19.16 50.23 19.16 69.39 0L433.63 258.7c19.16-19.17 19.16-50.24 0-69.4zM96 248c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                  />
                </svg>
              </div>
              <div className="font-lato">
                <span className="uppercase font-bold text-3xl">17 Million</span>
                <p className="uppercase font-light text-sm">Games Played</p>
              </div>
            </div>
          </div>
          <button className="uppercase text-black bg-white rounded-full p-4 px-16">
            Build With Us
          </button>
        </div>
      </section>
      <section className="min-h-[70vh] px-6 sm:px-12 md:px-24 lg:px-36 pt-12 md:pt-24 py-24 grid md:grid-cols-2 gap-24 lg:gap-48 extendHomeSpacing relative">
        <div className="flex flex-col justify-between gap-4">
          <div className="grid gap-4">
            <div>
              <h2 className="text-xl uppercase">Degen Coin Flip</h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold max-w-xs">
                Double or Nothing
              </h1>
            </div>
            <p className="leading-7 font-lato">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              id nobis non asperiores deleniti sed eaque maiores provident
              tempore exercitationem saepe mollitia voluptatem, accusamus
              quaerat sapiente quae voluptate fuga! Voluptatibus.
            </p>
          </div>
          <div className="grid gap-4">
            <button className="bg-dcfRed rounded p-4 max-w-max text-black uppercase font-bold text-lg tracking-wider font-lato">
              Play Degen Coin Flip
            </button>
            <Socials
              twitter={"https://twitter.com/degencoinflip"}
              discord={"https://twitter.com/degencoinflip"}
              phantom={"https://twitter.com/degencoinflip"}
            />
          </div>
        </div>
        <div>
          <img
            alt="Degen Coin Flip Preview"
            src="/images/dcf-phone.png"
            className="absolute left-0 bottom-0 md:left-auto md:bottom-auto xl:-bottom-12 h-0 md:h-[70%] xl:h-full object-contain z-30"
            loading="lazy"
          />
        </div>
        <img
          alt="Cat Flipping a Coin"
          src="/images/flip.png"
          className="absolute bottom-0 right-0 h-[20%] lg:h-[30%] object-contain -scale-x-100"
          loading="lazy"
        />
      </section>
      <section className="min-h-[70vh] px-6 sm:px-12 md:px-24 lg:px-36 pt-12 md:pt-24 py-24 grid md:grid-cols-2 gap-24 lg:gap-48 bg-dcfWhite text-black extendHomeSpacing relative">
        <div>
          <img
            alt="Degen Coin Dozer Preview"
            src="/images/dcd-phone.png"
            className="absolute left-0 h-[20%] sm:h-[25%] md:h-[33%] xl:h-[50%] object-contain md:my-auto md:top-0 bottom-0"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-between gap-4 order-first md:order-last">
          <div className="grid gap-4">
            <div>
              <h2 className="text-xl uppercase">Degen Coin Dozer</h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold max-w-xs">
                Drop it like its hot
              </h1>
            </div>
            <p className="leading-7 font-lato">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              id nobis non asperiores deleniti sed eaque maiores provident
              tempore exercitationem saepe mollitia voluptatem, accusamus
              quaerat sapiente quae voluptate fuga! Voluptatibus.
            </p>
          </div>
          <div className="grid gap-4">
            <button className="bg-dcfRed rounded p-4 max-w-max text-black uppercase font-bold text-lg tracking-wider font-lato">
              Play Degen Coin Dozer
            </button>
            <Socials
              twitter={"https://twitter.com/degencoinflip"}
              discord={"https://twitter.com/degencoinflip"}
              phantom={"https://twitter.com/degencoinflip"}
            />
          </div>
        </div>
      </section>
      <section className="min-h-[70vh] px-6 sm:px-12 md:px-24 lg:px-36 pt-12 md:pt-24 py-24 grid md:grid-cols-2 gap-24 lg:gap-48 extendHomeSpacing relative overflow-hidden lg:overflow-visible">
        <div className="absolute w-full h-full">
          <img
            alt="Portal Background"
            src="/images/ds-phone-bg.png"
            className="brightness-50 w-full h-full"
            loading="lazy"
          />
        </div>
        <img
          alt="Ghost Cat"
          src="/images/ghost.png"
          className="w-64 md:w-72 lg:w-80 lg:-scale-x-100 -rotate-[25deg] lg:rotate-[25deg] absolute -right-32 md:-right-36 -bottom-24 top-auto md:top-0 lg:top-auto lg:-left-36 lg:bottom-24"
          loading="lazy"
        />
        <div className="flex flex-col justify-between gap-4 relative z-30">
          <div className="grid gap-4">
            <div>
              <h2 className="text-xl uppercase">Degen Spin</h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold max-w-xs">
                All or Nothing
              </h1>
            </div>
            <p className="leading-7 font-lato">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              id nobis non asperiores deleniti sed eaque maiores provident
              tempore exercitationem saepe mollitia voluptatem, accusamus
              quaerat sapiente quae voluptate fuga! Voluptatibus.
            </p>
          </div>
          <div className="grid gap-4">
            <button className="bg-dcfRed rounded p-4 max-w-max text-black uppercase font-bold text-lg tracking-wider font-lato">
              Play Degen Spin
            </button>
            <Socials
              twitter={"https://twitter.com/degencoinflip"}
              discord={"https://twitter.com/degencoinflip"}
              phantom={"https://twitter.com/degencoinflip"}
            />
          </div>
        </div>
        <div>
          <img
            alt="Degen Spin Preview"
            src="/images/ds-phone.png"
            className="absolute bottom-12 lg:-bottom-12 lg:right-24 xl:right-48 h-0 md:h-[70%] lg:h-full object-contain z-30"
            loading="lazy"
          />
        </div>
      </section>
      <section className="min-h-[70vh] px-6 sm:px-12 md:px-24 lg:px-36 pt-12 md:pt-24 py-24 grid md:grid-cols-2 gap-24 lg:gap-48 bg-dcfWhite text-black extendHomeSpacing relative">
        <div>
          <img
            alt="Cat GPT Preview"
            src="/images/ai-phone.png"
            className="absolute left-0 h-[20%] sm:h-[25%] md:h-[33%] xl:h-[50%] object-contain md:my-auto md:top-0 bottom-0"
            loading="lazy"
          />
        </div>
        <div className="absolute right-0 bottom-0">
          <img
            alt="Cat Hat"
            src="/images/ai-hat.png"
            className="h-24 md:h-full object-contain my-auto top-0 bottom-0"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-between gap-4 order-first md:order-last">
          <div className="grid gap-4">
            <div>
              <h2 className="text-xl uppercase">Degen Cat GPT</h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold max-w-xs">
                Artificial Cat Intelligence
              </h1>
            </div>
            <p className="leading-7 font-lato">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              id nobis non asperiores deleniti sed eaque maiores provident
              tempore exercitationem saepe mollitia voluptatem, accusamus
              quaerat sapiente quae voluptate fuga! Voluptatibus.
            </p>
          </div>
          <div className="grid gap-4">
            <button className="bg-dcfRed rounded p-4 max-w-max text-black uppercase font-bold text-lg tracking-wider font-lato">
              Play Degen Catgpt
            </button>
            <Socials
              twitter={"https://twitter.com/degencoinflip"}
              discord={"https://twitter.com/degencoinflip"}
              phantom={"https://twitter.com/degencoinflip"}
            />
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-[#3D2975] to-[#1F1842] extendHomeSpacing flex flex-col items-center text-center relative">
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
          <img
            alt="Ball of Yarn"
            src="/images/yarn.png"
            className="w-64 absolute -top-48 xl:-top-24 right-4 xl:right-16"
            loading="lazy"
          />
          <div className="grid gap-4 pb-24 px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-bold">
              Fat Cats Factions
            </h1>
            <p className="leading-7 max-w-2xl mx-auto font-lato">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              id nobis non asperiores deleniti sed eaque maiores provident
              tempore exercitationem saepe mollitia voluptatem, accusamus
              quaerat sapiente quae voluptate fuga! Voluptatibus.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-12 homeSpacing">
            {factions.map((faction, index) => {
              const { name, description, img } = faction;
              return (
                <div
                  key={index}
                  className="grid lg:grid-cols-[1fr_2fr] text-left gap-4"
                >
                  <div className="bg-[#3D2975] h-32 aspect-square border-4 border-[#B660E4] relative overflow-hidden">
                    <Image
                      alt={`${name} Fat Cat`}
                      src={img}
                      className="absolute inset-0 h-full w-full object-cover scale-150"
                      layout="fill"
                    />
                  </div>
                  <div className="flex flex-col gap-4 justify-between">
                    <h3 className="uppercase text-[#B660E4] text-xl font-bold">
                      {name}
                    </h3>
                    <p className="font-lato">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-dcfRed extendHomeSpacing pt-24 lg:pt-48 homeSpacing relative">
        <Image
          alt="Cat on Whale"
          src="/images/whale.png"
          className="absolute w-64 -top-40 right-0 lg:right-36 -scale-x-100"
          width={500}
          height={500}
          // layout="fill"
        />
        <div className="grid lg:grid-cols-2 gap-12 z-30 relative">
          <div className="flex flex-col gap-8">
            <h2 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              We make degen games <p className="text-black">join us.</p>
            </h2>
            <p className="font-lato">
              Labore officia voluptate incididunt nostrud nulla Lorem est.
              Fugiat esse sunt ex anim in aliquip do ullamco tempor ullamco sunt
              incididunt fugiat. Elit ullamco sunt sit excepteur cillum. Commodo
              sunt enim officia ad cupidatat magna quis nostrud dolore laborum
              qui qui sit do cillum.
            </p>
            <button className="bg-dcfWhite text-black uppercase font-bold p-4 max-w-max text-xl rounded tracking-widest font-lato">
              Apply Now
            </button>
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
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
        </div>
        <div className="relative h-screen extendHomeSpacing -mt-36">
          <Image
            alt="Clouds"
            src="/images/bottom.png"
            className="absolute inset-0 h-full w-full object-cover"
            layout="fill"
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#263D67] to-transparent" />
        </div>
      </section>
    </div>
  );
}
