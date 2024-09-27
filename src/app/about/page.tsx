import Image from "next/image";
import AboutContent from "../components/about/AboutContent";

export default function About() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-200 to-blue-400 p-6 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-white mb-4">
        魔神の紹介ページへようこそ！
        <br />
        ここで魔神の秘密を暴露しちゃうぞ！
      </h1>
      <p className="text-base md:text-lg font-bold text-center text-gray-100 mb-6">
        ここは魔神の世界を知るための特別な場所だ。君も魔神に染まるかもね！
      </p>
      <div>
        <Image
          src={"/about.png"}
          alt={"aboutページのイメージ画像"}
          className="mb-4 mx-auto"
          width={500}
          height={500}
        />
      </div>
      <AboutContent />
    </div>
  );
}
