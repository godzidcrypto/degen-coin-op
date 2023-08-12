export default function Home() {
  const factions = [
    {
      name: "Merchant",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "",
    },
    {
      name: "Merchant",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "",
    },
    {
      name: "Merchant",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "",
    },
    {
      name: "Merchant",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "",
    },
    {
      name: "Merchant",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "",
    },
    {
      name: "Merchant",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "",
    },
    {
      name: "Merchant",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "",
    },
    {
      name: "Merchant",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "",
    },
    {
      name: "Merchant",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "",
    },
    {
      name: "Merchant",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "",
    },
    {
      name: "Merchant",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "",
    },
    {
      name: "Merchant",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "",
    },
    {
      name: "Merchant",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "",
    },
    {
      name: "Merchant",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "",
    },
    {
      name: "Merchant",
      description:
        "Ad occaecat aliqua dolore voluptate consequat anim consectetur ipsum consequat reprehenderit. Non est voluptate id sunt ullamco pariatur excepteur elit excepteur id officia nostrud sit labore anim.",
      img: "",
    },
  ];
  return (
    <main className="px-homeSpacing">
      <section className="flex flex-col justify-between h-[90vh]">
        <div className="flex flex-col justify-center -mx-homeSpacing h-[60vh]">
          <video className="w-full object-cover opacity-40" autoPlay muted loop>
            <source src="/nekkro.mp4" type="video/mp4" />
          </video>
          <div className="absolute flex flex-col justify-center px-homeSpacing gap-6">
            <h1 className="uppercase font-semibold max-w-xl">
              The cost of ambition is high <br />
              <span className="text-6xl">but the reward is even higher</span>
            </h1>
            <button className="uppercase font-bold py-2 px-6 border border-dcfRed rounded max-w-max">
              Play Degen Spin
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 relative z-20 h-[20vh]">
          <div className="absolute inset-x-0 -top-24 h-20 bg-gradient-to-t from-black px-homeSpacing -mx-homeSpacing to-transparent" />
          <div className="absolute w-full h-full -top-24">
            <p>Our Games</p>
            <div className="grid grid-cols-4 items-end gap-4">
              <div className="grid gap-6">
                <div className="bg-gray-500 aspect-video shadow-lg shadow-slate-500"></div>
                <div>
                  <h2>Double Or Nothing</h2>
                  <p className="border-b-2 border-dcfRed max-w-max text-xs font-bold">
                    Find out more
                  </p>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="bg-gray-500 aspect-video shadow-lg shadow-slate-500"></div>
                <div>
                  <h2>Double Or Nothing</h2>
                  <p className="border-b-2 border-dcfRed max-w-max text-xs font-bold">
                    Find out more
                  </p>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="bg-gray-500 aspect-video shadow-lg shadow-slate-500"></div>
                <div>
                  <h2>Double Or Nothing</h2>
                  <p className="border-b-2 border-dcfRed max-w-max text-xs font-bold">
                    Find out more
                  </p>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="bg-gray-500 aspect-video shadow-lg shadow-slate-500"></div>
                <div>
                  <h2>Double Or Nothing</h2>
                  <p className="border-b-2 border-dcfRed max-w-max text-xs font-bold">
                    Find out more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dcfRed -mx-homeSpacing h-screen flex flex-col gap-8 justify-center items-center text-center">
        <h1 className="uppercase text-6xl max-w-xl">
          <span className="text-sm">About Us</span>
          <br />
          The Best Solana People Making The Best Games
        </h1>
        <div className="grid grid-cols-3 gap-36">
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 rounded-full p-2 max-w-max">
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
            <span className="uppercase font-bold text-3xl">23 Million</span>
            <p className="uppercase font-light text-sm">Monthly Active Users</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 rounded-full p-2 max-w-max">
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
            <span className="uppercase font-bold text-3xl">23 Million</span>
            <p className="uppercase font-light text-sm">Monthly Active Users</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 rounded-full p-2 max-w-max">
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
            <span className="uppercase font-bold text-3xl">23 Million</span>
            <p className="uppercase font-light text-sm">Monthly Active Users</p>
          </div>
        </div>
        <button className="uppercase text-black bg-white rounded-full p-4 px-16">
          Build With Us
        </button>
      </section>
      <section className="h-screen px-48 py-24 grid grid-cols-2 -mx-homeSpacing">
        <div className="flex flex-col justify-between gap-4">
          <div className="grid gap-4">
            <div>
              <h2 className="text-xl uppercase">Degen Coin Flip</h2>
              <h1 className="text-6xl uppercase font-bold max-w-xs">
                Double or Nothing
              </h1>
            </div>
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              id nobis non asperiores deleniti sed eaque maiores provident
              tempore exercitationem saepe mollitia voluptatem, accusamus
              quaerat sapiente quae voluptate fuga! Voluptatibus.
            </p>
          </div>
          <div className="grid gap-4">
            <button className="bg-dcfRed rounded p-4 max-w-max text-black uppercase font-bold text-lg tracking-wider">
              Play Degen Coin Flip
            </button>
            <div className="flex gap-4">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.03509 12.9431C3.24245 14.9227 4.10472 16.8468 5.62188 18.364C7.13904 19.8811 9.0631 20.7434 11.0428 20.9508L3.03509 12.9431Z"
                  fill="currentColor"
                />
                <path
                  d="M3 11.4938L12.4921 20.9858C13.2976 20.9407 14.0981 20.7879 14.8704 20.5273L3.4585 9.11548C3.19793 9.88771 3.0451 10.6883 3 11.4938Z"
                  fill="currentColor"
                />
                <path
                  d="M3.86722 8.10999L15.8758 20.1186C16.4988 19.8201 17.0946 19.4458 17.6493 18.9956L4.99021 6.33659C4.54006 6.89125 4.16573 7.487 3.86722 8.10999Z"
                  fill="currentColor"
                />
                <path
                  d="M5.66301 5.59517C9.18091 2.12137 14.8488 2.135 18.3498 5.63604C21.8508 9.13708 21.8645 14.8049 18.3907 18.3228L5.66301 5.59517Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.03509 12.9431C3.24245 14.9227 4.10472 16.8468 5.62188 18.364C7.13904 19.8811 9.0631 20.7434 11.0428 20.9508L3.03509 12.9431Z"
                  fill="currentColor"
                />
                <path
                  d="M3 11.4938L12.4921 20.9858C13.2976 20.9407 14.0981 20.7879 14.8704 20.5273L3.4585 9.11548C3.19793 9.88771 3.0451 10.6883 3 11.4938Z"
                  fill="currentColor"
                />
                <path
                  d="M3.86722 8.10999L15.8758 20.1186C16.4988 19.8201 17.0946 19.4458 17.6493 18.9956L4.99021 6.33659C4.54006 6.89125 4.16573 7.487 3.86722 8.10999Z"
                  fill="currentColor"
                />
                <path
                  d="M5.66301 5.59517C9.18091 2.12137 14.8488 2.135 18.3498 5.63604C21.8508 9.13708 21.8645 14.8049 18.3907 18.3228L5.66301 5.59517Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.03509 12.9431C3.24245 14.9227 4.10472 16.8468 5.62188 18.364C7.13904 19.8811 9.0631 20.7434 11.0428 20.9508L3.03509 12.9431Z"
                  fill="currentColor"
                />
                <path
                  d="M3 11.4938L12.4921 20.9858C13.2976 20.9407 14.0981 20.7879 14.8704 20.5273L3.4585 9.11548C3.19793 9.88771 3.0451 10.6883 3 11.4938Z"
                  fill="currentColor"
                />
                <path
                  d="M3.86722 8.10999L15.8758 20.1186C16.4988 19.8201 17.0946 19.4458 17.6493 18.9956L4.99021 6.33659C4.54006 6.89125 4.16573 7.487 3.86722 8.10999Z"
                  fill="currentColor"
                />
                <path
                  d="M5.66301 5.59517C9.18091 2.12137 14.8488 2.135 18.3498 5.63604C21.8508 9.13708 21.8645 14.8049 18.3907 18.3228L5.66301 5.59517Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen px-48 py-24 grid grid-cols-2 bg-dcfWhite text-black -mx-homeSpacing">
        <div></div>
        <div className="flex flex-col justify-between gap-4 order-last">
          <div className="grid gap-4">
            <div>
              <h2 className="text-xl uppercase">Degen Coin Dozer</h2>
              <h1 className="text-6xl uppercase font-bold max-w-xs">
                Drop it like its hot
              </h1>
            </div>
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              id nobis non asperiores deleniti sed eaque maiores provident
              tempore exercitationem saepe mollitia voluptatem, accusamus
              quaerat sapiente quae voluptate fuga! Voluptatibus.
            </p>
          </div>
          <div className="grid gap-4">
            <button className="bg-dcfRed rounded p-4 max-w-max text-black uppercase font-bold text-lg tracking-wider">
              Play Degen Coin Dozer
            </button>
            <div className="flex gap-4">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.03509 12.9431C3.24245 14.9227 4.10472 16.8468 5.62188 18.364C7.13904 19.8811 9.0631 20.7434 11.0428 20.9508L3.03509 12.9431Z"
                  fill="currentColor"
                />
                <path
                  d="M3 11.4938L12.4921 20.9858C13.2976 20.9407 14.0981 20.7879 14.8704 20.5273L3.4585 9.11548C3.19793 9.88771 3.0451 10.6883 3 11.4938Z"
                  fill="currentColor"
                />
                <path
                  d="M3.86722 8.10999L15.8758 20.1186C16.4988 19.8201 17.0946 19.4458 17.6493 18.9956L4.99021 6.33659C4.54006 6.89125 4.16573 7.487 3.86722 8.10999Z"
                  fill="currentColor"
                />
                <path
                  d="M5.66301 5.59517C9.18091 2.12137 14.8488 2.135 18.3498 5.63604C21.8508 9.13708 21.8645 14.8049 18.3907 18.3228L5.66301 5.59517Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.03509 12.9431C3.24245 14.9227 4.10472 16.8468 5.62188 18.364C7.13904 19.8811 9.0631 20.7434 11.0428 20.9508L3.03509 12.9431Z"
                  fill="currentColor"
                />
                <path
                  d="M3 11.4938L12.4921 20.9858C13.2976 20.9407 14.0981 20.7879 14.8704 20.5273L3.4585 9.11548C3.19793 9.88771 3.0451 10.6883 3 11.4938Z"
                  fill="currentColor"
                />
                <path
                  d="M3.86722 8.10999L15.8758 20.1186C16.4988 19.8201 17.0946 19.4458 17.6493 18.9956L4.99021 6.33659C4.54006 6.89125 4.16573 7.487 3.86722 8.10999Z"
                  fill="currentColor"
                />
                <path
                  d="M5.66301 5.59517C9.18091 2.12137 14.8488 2.135 18.3498 5.63604C21.8508 9.13708 21.8645 14.8049 18.3907 18.3228L5.66301 5.59517Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.03509 12.9431C3.24245 14.9227 4.10472 16.8468 5.62188 18.364C7.13904 19.8811 9.0631 20.7434 11.0428 20.9508L3.03509 12.9431Z"
                  fill="currentColor"
                />
                <path
                  d="M3 11.4938L12.4921 20.9858C13.2976 20.9407 14.0981 20.7879 14.8704 20.5273L3.4585 9.11548C3.19793 9.88771 3.0451 10.6883 3 11.4938Z"
                  fill="currentColor"
                />
                <path
                  d="M3.86722 8.10999L15.8758 20.1186C16.4988 19.8201 17.0946 19.4458 17.6493 18.9956L4.99021 6.33659C4.54006 6.89125 4.16573 7.487 3.86722 8.10999Z"
                  fill="currentColor"
                />
                <path
                  d="M5.66301 5.59517C9.18091 2.12137 14.8488 2.135 18.3498 5.63604C21.8508 9.13708 21.8645 14.8049 18.3907 18.3228L5.66301 5.59517Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen px-48 py-24 grid grid-cols-2 -mx-homeSpacing">
        <div className="flex flex-col justify-between gap-4">
          <div className="grid gap-4">
            <div>
              <h2 className="text-xl uppercase">Degen Spin</h2>
              <h1 className="text-6xl uppercase font-bold max-w-xs">
                All or Nothing
              </h1>
            </div>
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              id nobis non asperiores deleniti sed eaque maiores provident
              tempore exercitationem saepe mollitia voluptatem, accusamus
              quaerat sapiente quae voluptate fuga! Voluptatibus.
            </p>
          </div>
          <div className="grid gap-4">
            <button className="bg-dcfRed rounded p-4 max-w-max text-black uppercase font-bold text-lg tracking-wider">
              Play Degen Spin
            </button>
            <div className="flex gap-4">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.03509 12.9431C3.24245 14.9227 4.10472 16.8468 5.62188 18.364C7.13904 19.8811 9.0631 20.7434 11.0428 20.9508L3.03509 12.9431Z"
                  fill="currentColor"
                />
                <path
                  d="M3 11.4938L12.4921 20.9858C13.2976 20.9407 14.0981 20.7879 14.8704 20.5273L3.4585 9.11548C3.19793 9.88771 3.0451 10.6883 3 11.4938Z"
                  fill="currentColor"
                />
                <path
                  d="M3.86722 8.10999L15.8758 20.1186C16.4988 19.8201 17.0946 19.4458 17.6493 18.9956L4.99021 6.33659C4.54006 6.89125 4.16573 7.487 3.86722 8.10999Z"
                  fill="currentColor"
                />
                <path
                  d="M5.66301 5.59517C9.18091 2.12137 14.8488 2.135 18.3498 5.63604C21.8508 9.13708 21.8645 14.8049 18.3907 18.3228L5.66301 5.59517Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.03509 12.9431C3.24245 14.9227 4.10472 16.8468 5.62188 18.364C7.13904 19.8811 9.0631 20.7434 11.0428 20.9508L3.03509 12.9431Z"
                  fill="currentColor"
                />
                <path
                  d="M3 11.4938L12.4921 20.9858C13.2976 20.9407 14.0981 20.7879 14.8704 20.5273L3.4585 9.11548C3.19793 9.88771 3.0451 10.6883 3 11.4938Z"
                  fill="currentColor"
                />
                <path
                  d="M3.86722 8.10999L15.8758 20.1186C16.4988 19.8201 17.0946 19.4458 17.6493 18.9956L4.99021 6.33659C4.54006 6.89125 4.16573 7.487 3.86722 8.10999Z"
                  fill="currentColor"
                />
                <path
                  d="M5.66301 5.59517C9.18091 2.12137 14.8488 2.135 18.3498 5.63604C21.8508 9.13708 21.8645 14.8049 18.3907 18.3228L5.66301 5.59517Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.03509 12.9431C3.24245 14.9227 4.10472 16.8468 5.62188 18.364C7.13904 19.8811 9.0631 20.7434 11.0428 20.9508L3.03509 12.9431Z"
                  fill="currentColor"
                />
                <path
                  d="M3 11.4938L12.4921 20.9858C13.2976 20.9407 14.0981 20.7879 14.8704 20.5273L3.4585 9.11548C3.19793 9.88771 3.0451 10.6883 3 11.4938Z"
                  fill="currentColor"
                />
                <path
                  d="M3.86722 8.10999L15.8758 20.1186C16.4988 19.8201 17.0946 19.4458 17.6493 18.9956L4.99021 6.33659C4.54006 6.89125 4.16573 7.487 3.86722 8.10999Z"
                  fill="currentColor"
                />
                <path
                  d="M5.66301 5.59517C9.18091 2.12137 14.8488 2.135 18.3498 5.63604C21.8508 9.13708 21.8645 14.8049 18.3907 18.3228L5.66301 5.59517Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen px-48 py-24 grid grid-cols-2 bg-dcfWhite text-black -mx-homeSpacing">
        <div></div>
        <div className="flex flex-col justify-between gap-4 order-last">
          <div className="grid gap-4">
            <div>
              <h2 className="text-xl uppercase">Degen Cat GPT</h2>
              <h1 className="text-6xl uppercase font-bold max-w-xs">
                Artificial Cat Intelligence
              </h1>
            </div>
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              id nobis non asperiores deleniti sed eaque maiores provident
              tempore exercitationem saepe mollitia voluptatem, accusamus
              quaerat sapiente quae voluptate fuga! Voluptatibus.
            </p>
          </div>
          <div className="grid gap-4">
            <button className="bg-dcfRed rounded p-4 max-w-max text-black uppercase font-bold text-lg tracking-wider">
              Play Degen Catgpt
            </button>
            <div className="flex gap-4">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.03509 12.9431C3.24245 14.9227 4.10472 16.8468 5.62188 18.364C7.13904 19.8811 9.0631 20.7434 11.0428 20.9508L3.03509 12.9431Z"
                  fill="currentColor"
                />
                <path
                  d="M3 11.4938L12.4921 20.9858C13.2976 20.9407 14.0981 20.7879 14.8704 20.5273L3.4585 9.11548C3.19793 9.88771 3.0451 10.6883 3 11.4938Z"
                  fill="currentColor"
                />
                <path
                  d="M3.86722 8.10999L15.8758 20.1186C16.4988 19.8201 17.0946 19.4458 17.6493 18.9956L4.99021 6.33659C4.54006 6.89125 4.16573 7.487 3.86722 8.10999Z"
                  fill="currentColor"
                />
                <path
                  d="M5.66301 5.59517C9.18091 2.12137 14.8488 2.135 18.3498 5.63604C21.8508 9.13708 21.8645 14.8049 18.3907 18.3228L5.66301 5.59517Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.03509 12.9431C3.24245 14.9227 4.10472 16.8468 5.62188 18.364C7.13904 19.8811 9.0631 20.7434 11.0428 20.9508L3.03509 12.9431Z"
                  fill="currentColor"
                />
                <path
                  d="M3 11.4938L12.4921 20.9858C13.2976 20.9407 14.0981 20.7879 14.8704 20.5273L3.4585 9.11548C3.19793 9.88771 3.0451 10.6883 3 11.4938Z"
                  fill="currentColor"
                />
                <path
                  d="M3.86722 8.10999L15.8758 20.1186C16.4988 19.8201 17.0946 19.4458 17.6493 18.9956L4.99021 6.33659C4.54006 6.89125 4.16573 7.487 3.86722 8.10999Z"
                  fill="currentColor"
                />
                <path
                  d="M5.66301 5.59517C9.18091 2.12137 14.8488 2.135 18.3498 5.63604C21.8508 9.13708 21.8645 14.8049 18.3907 18.3228L5.66301 5.59517Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.03509 12.9431C3.24245 14.9227 4.10472 16.8468 5.62188 18.364C7.13904 19.8811 9.0631 20.7434 11.0428 20.9508L3.03509 12.9431Z"
                  fill="currentColor"
                />
                <path
                  d="M3 11.4938L12.4921 20.9858C13.2976 20.9407 14.0981 20.7879 14.8704 20.5273L3.4585 9.11548C3.19793 9.88771 3.0451 10.6883 3 11.4938Z"
                  fill="currentColor"
                />
                <path
                  d="M3.86722 8.10999L15.8758 20.1186C16.4988 19.8201 17.0946 19.4458 17.6493 18.9956L4.99021 6.33659C4.54006 6.89125 4.16573 7.487 3.86722 8.10999Z"
                  fill="currentColor"
                />
                <path
                  d="M5.66301 5.59517C9.18091 2.12137 14.8488 2.135 18.3498 5.63604C21.8508 9.13708 21.8645 14.8049 18.3907 18.3228L5.66301 5.59517Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-[#3D2975] to-[#1F1842] -mx-homeSpacing flex flex-col items-center text-center py-48">
        <div className="grid gap-4 pb-24">
          <h1 className="text-7xl uppercase font-bold">Fat Cats Factions</h1>
          <p className="leading-7 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi id
            nobis non asperiores deleniti sed eaque maiores provident tempore
            exercitationem saepe mollitia voluptatem, accusamus quaerat sapiente
            quae voluptate fuga! Voluptatibus.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12 px-homeSpacing">
          {factions.map((faction, index) => {
            const { name, description, img } = faction;
            return (
              <div
                key={index}
                className="grid grid-cols-[1fr_2fr] text-left gap-4"
              >
                <div className="bg-[#3D2975] aspect-square border-4 border-[#B660E4]"></div>
                <div className="flex flex-col gap-4 justify-between">
                  <h3 className="uppercase text-[#B660E4] text-lg font-bold">
                    {name}
                  </h3>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-dcfRed -mx-homeSpacing py-24 px-homeSpacing">
        <div className="grid grid-cols-2 gap-24">
          <div className="flex flex-col gap-8">
            <h2 className="uppercase text-6xl font-bold text-white">
              We make degen games <span className="text-black">join us.</span>
            </h2>
            <p>
              Labore officia voluptate incididunt nostrud nulla Lorem est.
              Fugiat esse sunt ex anim in aliquip do ullamco tempor ullamco sunt
              incididunt fugiat. Elit ullamco sunt sit excepteur cillum. Commodo
              sunt enim officia ad cupidatat magna quis nostrud dolore laborum
              qui qui sit do cillum.
            </p>
            <button className="bg-dcfWhite text-black uppercase font-bold p-4 max-w-max text-xl rounded tracking-widest">
              Apply Now
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
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
              <h3 className="text-3xl font-bold">Front End Developer</h3>
              <p className="font-light text-sm">
                Sit deserunt voluptate incididunt elit consequat qui proident
                consequat esse enim. Pariatur veniam excepteur sint exercitation
                occaecat duis magna ipsum laborum elit in ad et mollit. Qui
                consectetur fugiat deserunt anim enim Lorem laboris aute do id
                eiusmod incididunt incididunt cupidatat.
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
              <h3 className="text-3xl font-bold">Front End Developer</h3>
              <p className="font-light text-sm">
                Sit deserunt voluptate incididunt elit consequat qui proident
                consequat esse enim. Pariatur veniam excepteur sint exercitation
                occaecat duis magna ipsum laborum elit in ad et mollit. Qui
                consectetur fugiat deserunt anim enim Lorem laboris aute do id
                eiusmod incididunt incididunt cupidatat.
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
              <h3 className="text-3xl font-bold">Front End Developer</h3>
              <p className="font-light text-sm">
                Sit deserunt voluptate incididunt elit consequat qui proident
                consequat esse enim. Pariatur veniam excepteur sint exercitation
                occaecat duis magna ipsum laborum elit in ad et mollit. Qui
                consectetur fugiat deserunt anim enim Lorem laboris aute do id
                eiusmod incididunt incididunt cupidatat.
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
              <h3 className="text-3xl font-bold">Front End Developer</h3>
              <p className="font-light text-sm">
                Sit deserunt voluptate incididunt elit consequat qui proident
                consequat esse enim. Pariatur veniam excepteur sint exercitation
                occaecat duis magna ipsum laborum elit in ad et mollit. Qui
                consectetur fugiat deserunt anim enim Lorem laboris aute do id
                eiusmod incididunt incididunt cupidatat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
