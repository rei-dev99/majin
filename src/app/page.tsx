import Image from "next/image";
import TopContent from "./components/top/TopContent";

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-b from-yellow-300 to-purple-400 p-6 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-white mb-4">
        魔神の世界へようこそ！
      </h1>
      <p className="text-base md:text-xl font-bold text-center text-gray-100 mb-6">
        ここは魔神とお会いする特別な場所だ。おっと、魔神があなたを見ているぞ！
      </p>
      <div>
        <Image
          src={"/top.png"}
          alt={"トップページのイメージ画像"}
          className="mb-4 mx-auto"
          width={500}
          height={500}
        />
      </div>
      <p className=" text-base md:text-xl text-center text-gray-100 mb-6">
        このアプリは魔神が独断と偏見で仲良しメンバーをクイズで紹介するプラットフォームだぞ。< br/>魔神の気まぐれ日記さ！
      </p>
      <TopContent />
    </div>
  );
}
