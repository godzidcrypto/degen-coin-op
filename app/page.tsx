export default function Home() {
  return (
    <main className="p-8">
      <section>
        <div className="grid gap-2">
          <h1 className="uppercase font-semibold">
            The cost of ambition is high <br />
            <span className="text-2xl">but the reward is even higher</span>
          </h1>
          <button className="py-2 px-6 border border-red-500 rounded-lg max-w-max">
            Play Degen Spin
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <div className="bg-gray-500 aspect-video"></div>
            <h2>Double Or Nothing</h2>
            <p className="border-b-2 border-red-500 max-w-max text-xs font-bold">
              Find out more
            </p>
          </div>
          <div>
            <div className="bg-gray-500 aspect-video"></div>
            <h2>Double Or Nothing</h2>
            <p className="border-b-2 border-red-500 max-w-max text-xs font-bold">
              Find out more
            </p>
          </div>
          <div>
            <div className="bg-gray-500 aspect-video"></div>
            <h2>Double Or Nothing</h2>
            <p className="border-b-2 border-red-500 max-w-max text-xs font-bold">
              Find out more
            </p>
          </div>
          <div>
            <div className="bg-gray-500 aspect-video"></div>
            <h2>Double Or Nothing</h2>
            <p className="border-b-2 border-red-500 max-w-max text-xs font-bold">
              Find out more
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
