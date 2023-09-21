import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Careers = () => {
  return (
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
            Our on chain games have been played 20 million times with over 100k+
            unique players. If you have an idea you want to bring to life,
            we&apos;ll care of marketing, liquidity, legal, and smart contract
            security.
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
  );
};

export default Careers;
