import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-200 to-blue-400 p-6 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-white mb-4">
        魔神の紹介ページへようこそ！
      </h1>
      <p className="text-base md:text-lg font-bold text-center text-gray-100 mb-6">
        ここは魔神の世界を知るための特別な場所だ。
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
      <div className="flex flex-col md:flex-row justify-around gap-4">
        <div className="bg-white p-4 rounded shadow-md w-full md:w-1/3">
          <h2 className="text-xl md:text-2xl font-semibold text-purple-700">最近の調子</h2>
          <p className="text-gray-700 mt-2">
            最近は調子がすこぶるいい！なんてのは嘘だ。技術に関心はあるものの、AIを活用しないと確実には実装できない。ただ、このプラットフォームに関しては自分なりに仮説を立てて、ReactのHookも説明できる範囲で使用したつもりだ！技術よりも大事なことがあるからそちらも頑張るつもりだ！
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow-md w-full md:w-1/3">
          <h2 className="text-xl md:text-2xl font-semibold text-purple-700">魔神の秘話</h2>
          <p className="text-gray-700 mt-2">最初にいちご🍓スタンプを始めたのは俺じゃない。俺のモコタン師匠からだ！それをただ俺は、知名人にスタンプとして送っていたらいつの間にか拡散されたんだ！そんなこんなで毎日スタンプを送ってみんなの反応を見て楽しんでいったらいつの間にか魔人になっていたわけさ！</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md w-full md:w-1/3">
          <h2 className="text-xl md:text-2xl font-semibold text-purple-700">開発目的と技術</h2>
          <p className="text-gray-700 mt-2">技術検証とアウトプット目的で「React」「Next.js」「TaiwindCSS」、「supabase」「Vercel」を選定している。それとsupabaseなら無料でVercel上でDBを使用することができる。本当は1問だけでなく、2問3問と続けて作る予定だったが、期間の都合上カットした。今後時間があればもっとクイズを作りたいし、みんなが自由に投稿できるようにしたい。</p>
        </div>
      </div>
    </div>
  );
}
