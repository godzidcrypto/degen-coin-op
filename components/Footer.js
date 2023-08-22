import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#263D67] min-h-[15vh] py-4 font-lato text-center items-center flex flex-col justify-center font-light homeSpacing">
      <Image
        width={300}
        height={300}
        src="/images/logo-main.png"
        alt="Degen Coin Op Logo"
        className="w-auto scale-100 md:scale-[1.75]"
      />
      <p className="mt-4 mb-1">
        Degen Coin Flip, Degen Coin Dozer, Degen Spin & Degen CatGPT are
        trademarks and/or registered trademarks of DegenCoinOp
      </p>
      <p>2023 DegenCoinOp, all rights reserved.</p>
    </footer>
  );
};

export default Footer;
