import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-b from-yellow-300 to-purple-400 p-6 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-white mb-4">
        魔神の世界へようこそ！
      </h1>
      <p className="text-xl text-center text-gray-100 mb-6">
        ここは魔神とお会いする特別な場所だ。
      </p>
      <div className="flex flex-col md:flex-row justify-around">
        <div className="bg-white p-4 rounded shadow-md w-full md:w-1/3 m-2">
          <h2 className="text-2xl font-semibold text-purple-700">
            <Link href={"/about/"}>魔神の紹介</Link>
          </h2>
          <p className="text-gray-700">
            このアプリは魔神が独断と偏見で仲良しメンバーを紹介するプラットフォームだぞ。
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow-md w-full md:w-1/3 m-2">
          <h2 className="text-2xl font-semibold text-purple-700">
            <Link href={"/members/"}>勇者のクイズ</Link>
          </h2>
          <p className="text-gray-700">
            クイズから書くメンバーをクリックすることで、クイズに挑めるぞ！全部解いてみよ！
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow-md w-full md:w-1/3 m-2">
          <h2 className="text-2xl font-semibold text-purple-700">
            <Link href={"/about/"}>魔神の紹介</Link>
          </h2>
          <p className="text-gray-700">
            紹介には俺から見た紹介を書いているぞ！
          </p>
        </div>
      </div>
    </div>
  );
}
