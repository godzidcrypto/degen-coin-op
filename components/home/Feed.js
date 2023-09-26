import useSWR from "swr";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Feed = () => {
  const { data, isLoading } = useSWR("/api/feed", fetcher, {
    refreshInterval: 1000,
  });

  return (
    <section className="min-h-[80vh] px-6 sm:px-12 lg:px-36 pt-12 md:pt-24 py-24 grid gap-24 lg:gap-48 bg-dcfWhite text-black extendHomeSpacing relative">
      <motion.ul
        layout
        layoutId={"list"}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2"
      >
        <AnimatePresence>
          {data?.feed.payload.map((row, index) => {
            const { nickname, profileImageUrl, depositTxn, amount, won } = row;
            return (
              <Link
                href={`https://solscan.io/tx/${depositTxn}`}
                target="_blank"
                key={row.id}
              >
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#E9A53A] text-white p-2 flex items-center gap-4 rounded hover:bg-dcfWhite hover:text-[#E9A53A] border border-[#E9A53A] duration-200 transition group"
                >
                  <Image
                    width={50}
                    height={50}
                    src={profileImageUrl || "/images/flip.png"}
                    alt="Degen Coin Op Logo"
                    className="rounded-full border group-hover:border-[#E9A53A]"
                  />
                  <p>
                    {index + 1}. {nickname} flipped {amount} and{" "}
                    {won ? "doubled" : "got rugged"}
                  </p>
                </motion.li>
              </Link>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
};

export default Feed;
