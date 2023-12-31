import useSWR from "swr";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

const fetcher = (urls) => {
  const f = (url) => fetch(url).then((r) => r.json());
  return Promise.all(urls.map((url) => f(url)));
};

const Feed = () => {
  const urls = ["/api/feed/dcf", "/api/feed/ds"];
  const { data, isLoading } = useSWR(urls, fetcher, {
    refreshInterval: 1000,
  });

  if (isLoading) {
    return (
      <section className="min-h-[80vh] px-6 sm:px-12 lg:px-36 pt-12 md:pt-24 py-24 grid gap-24 lg:gap-48 bg-dcfWhite text-black extendHomeSpacing relative">
        <div className="flex flex-col gap-2">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((id) => {
            return (
              <Skeleton
                className={`w-full h-16 ${
                  id % 2 === 0 ? "bg-[#E9A53A]" : "bg-[#EE7983]"
                } rounded flex items-center p-2 gap-4`}
                key={id}
              >
                <div className="rounded-full w-12 h-12 bg-dcfWhite" />
                <Skeleton className="w-[100px] grow h-[20px] rounded-full bg-dcfWhite" />
                <Skeleton className="w-[100px] h-[20px] rounded-full bg-dcfWhite" />
              </Skeleton>
            );
          })}
        </div>
      </section>
    );
  }

  if (data) {
    // Combine Arrays (DCF and DS)
    const feed = [...data[0].feed, ...data[1].feed];

    // Sort Feed Array by createdAt
    feed
      .sort(function (a, b) {
        return a.createdAt > b.createdAt
          ? 1
          : b.createdAt > a.createdAt
          ? -1
          : 0;
      })
      .reverse();

    return (
      <section className="min-h-[80vh] px-6 sm:px-12 lg:px-36 pt-12 md:pt-24 py-24 grid gap-24 lg:gap-48 bg-dcfWhite text-black extendHomeSpacing relative">
        <motion.ul
          layout
          layoutId={"list"}
          transition={{ duration: 0.5 }}
          className="flex flex-col max-w-2xl mx-auto gap-2"
        >
          <AnimatePresence>
            {feed?.splice(0, 15).map((row) => {
              const {
                // general
                nickname,
                profileImageUrl,
                depositTxn,
                amount,
                won,
                createdAt,
                // ds
                rolledItems,
                winAmount,
              } = row;

              // Colors based on game
              const colors = {
                dcf: "bg-[#E9A53A] hover:text-[#E9A53A] border-[#E9A53A]",
                ds: "bg-[#EE7983] hover:text-[#EE7983] border-[#EE7983]",
              };

              // Identify game
              const game = rolledItems ? "ds" : "dcf";

              // Get "time ago" of transaction
              const now = new Date();
              const txTime = new Date(createdAt);
              const timeDifference = now - txTime;

              const seconds = timeDifference / 1000;
              const minutes = seconds / 60;
              const hours = minutes / 60;

              const timeAgo = () => {
                if (seconds < 60) {
                  return `${Math.floor(seconds)} seconds ago`;
                } else if (minutes < 60) {
                  if (Math.floor(minutes) === 1) {
                    return `${Math.floor(minutes)} minute ago`;
                  }
                  return `${Math.floor(minutes)} minutes ago`;
                } else if (hours < 24) {
                  return `${Math.floor(hours)} hours ago`;
                } else {
                  return `${Math.floor(hours / 24)} days ago`;
                }
              };

              const text = {
                dcf: `${nickname} flipped ${amount} and ${
                  won ? "doubled (2x)" : "got rugged"
                }`,
                ds: `${nickname} sacrificed ${amount} and ${
                  won
                    ? `won ${winAmount} (${(winAmount / amount).toFixed(2)}x)`
                    : `lost`
                }`,
              };

              const placeholderImage = "https://i.imgur.com/WtWzHUL.png";
              // Fix broken image links (e.g. discord cdn)
              const onImageError = (e) => {
                e.target.srcset = placeholderImage;
              };

              return (
                <Link
                  href={`https://solscan.io/tx/${depositTxn}`}
                  target="_blank"
                  key={row.id}
                  className="w-full"
                >
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={` text-white text-xs sm:text-base p-4 py-2 flex items-center gap-4 rounded hover:bg-dcfWhite border-2 duration-200 transition group relative ${colors[game]}`}
                  >
                    <Image
                      onError={onImageError}
                      width={50}
                      height={50}
                      src={profileImageUrl || placeholderImage}
                      alt="Profile Image"
                      className={`rounded-full border-2 duration-200 transition ${
                        game === "dcf"
                          ? "group-hover:border-[#E9A53A]"
                          : "group-hover:border-[#EE7983]"
                      }`}
                    />
                    <p className={`${won ? "" : ""}`}>{text[game]}</p>
                    <p className="text-[0.5rem] font-thin bottom-0 right-0 absolute">
                      {timeAgo()}
                    </p>
                  </motion.li>
                </Link>
              );
            })}
          </AnimatePresence>
        </motion.ul>
      </section>
    );
  }
};

export default Feed;
