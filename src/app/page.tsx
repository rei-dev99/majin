import Image from "next/image";
import Link from "next/link";

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
        このアプリは魔神が独断と偏見で仲良しメンバーをクイズで紹介するプラットフォームだぞ。魔神の気まぐれ日記さ！
      </p>
      <div className="flex flex-col md:flex-row justify-around gap-4">
        <div className="bg-white p-4 rounded shadow-md w-full md:w-1/2">
          <h2 className="text-xl md:text-2xl font-semibold text-purple-700">
            <Link href={"/members/"}>勇者のクイズ</Link>
          </h2>
          <p className="text-gray-700">
            クイズから各メンバーをクリックすることで、クイズに挑めるぞ！全部解いてみよ！失敗しても魔神は怒らない…たぶん。
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow-md w-full md:w-1/2">
          <h2 className="text-xl md:text-2xl font-semibold text-purple-700">
            <Link href={"/about/"}>魔神の紹介</Link>
          </h2>
          <p className="text-gray-700">
            紹介には俺について適当な紹介を超書いているぞ！嘘だ。そんな時間はないため、頭をフル回転させて書いている。欲しい情報があったら、魔神に直接聞いてみるのもありだな！
          </p>
        </div>
      </div>
    </div>
  );
}
