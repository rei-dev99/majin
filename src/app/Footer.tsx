import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="p-4 bg-gradient-to-r from-yellow-500 to-purple-600">
      <div className="text-center text-white text-sm md:text-base flex justify-center items-center">
        <span className="mr-2">©2024 魔神の王国 - reicode</span>
        <Image
          src={"/rei.png"}
          alt={"reiの画像"}
          className=""
          width={25}
          height={25}
        />
      </div>
    </footer>
  );
}

export default Footer;
