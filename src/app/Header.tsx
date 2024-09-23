import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex p-5 justify-between items-center bg-gradient-to-r from-yellow-500 to-purple-600">
      <div>
        <h1 className="text-3xl font-extrabold text-white">
          <Link href={"/"}>魔神の挑戦状</Link>
        </h1>
      </div>
      <div>
        <nav className="flex gap-4">
          <Link
            href={"/members/"}
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            勇者のクイズ
          </Link>
          <Link
            href={"/about/"}
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            魔神の紹介
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
