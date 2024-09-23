import Link from "next/link";

export default function About() {

  return (
    <div className="w-full bg-blue-50 p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">
        ようこそ！
      </h1>
      <p className="text-lg text-center text-gray-700 mb-6">
        ここはABOUTページです。魔神とお会いするところだ。
      </p>
      <div className="flex flex-col md:flex-row justify-around">
        <div className="bg-white p-4 rounded shadow-md w-full md:w-1/3 m-2">
          <h2 className="text-xl font-semibold text-blue-600"><Link href={'/'}>紹介</Link></h2>
          <p className="text-gray-600">
            このアプリは魔神が独断と偏見で仲良しメンバーを紹介するプラットフォームです。
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow-md w-full md:w-1/3 m-2">
          <h2 className="text-xl font-semibold text-blue-600"><Link href={'/'}>クイズ</Link></h2>
          <p className="text-gray-600">
            クイズから書くメンバーをクリックすることで、クイズに挑めるぞ！全部解いてみよ！
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow-md w-full md:w-1/3 m-2">
          <h2 className="text-xl font-semibold text-blue-600"><Link href={'/'}>紹介</Link></h2>
          <p className="text-gray-600">
            紹介には俺から見た紹介を書いているぞ！
          </p>
        </div>
      </div>
    </div>
  );
};
