import React from "react";
import AboutCard from "./AboutCard";

function AboutContent() {
  return (
    <div className="flex flex-col md:flex-row justify-around gap-4">
      <AboutCard
        title="最近の調子"
        content="最近は調子がすこぶるいい！なんてのは嘘だ。技術に関心はあるものの、まだまだ歯がたたない。だけど、このプラットフォームには自分なりに仮説を立てて、ReactのHookも説明できる範囲で使ったぞ！技術よりも大事なこともあるから、そちらも全力で頑張るつもりだ！"
      />
      <AboutCard
        title="魔神の秘話"
        content="最初にいちご🍓スタンプを始めたのは俺じゃない。俺のモコタン師匠からだ！それを知名人に送りまくったら、いつの間にか話題になってたんだ！そんなこんなで毎日スタンプを送って反応を楽しんでいたら、いつの間にか魔神になっていたわけさ！"
      />
      <AboutCard
        title="開発目的と技術"
        content="技術検証とアウトプット目的で「React」「Next.js」「TailwindCSS」、「Supabase」「Vercel」を選んだぞ！Supabaseなら無料でDBを使えるからお得だ。実は1問だけじゃなく、2問3問とたくさん作りたかったんだけど、期間の都合でカットしたんだ。今後時間があればもっとクイズを作りたいし、みんなが自由に投稿できるようにしたいな！"
      />
    </div>
  );
}

export default AboutContent;
