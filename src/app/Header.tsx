import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex p-5 justify-between items-center border-b-2 bg-yellow-200">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          <Link href={"/"}>54期紹介クイズ</Link>
        </h1>
      </div>
      <div>
        <nav className="flex gap-4">
          <Link
            href={"/members/"}
            className="text-gray-700 hover:text-gray-900"
          >
            クイズ
          </Link>
          <Link
            href={"/about/"}
            className="text-gray-700 hover:text-gray-900"
          >
            紹介
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
