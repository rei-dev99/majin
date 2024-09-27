import React from "react";
import TopCard from "./TopCard";

function TopContent() {
  return (
    <div className="flex flex-col md:flex-row justify-around gap-4">
      <TopCard
        title="勇者のクイズ"
        content="クイズから各メンバーをクリックすることで、クイズに挑めるぞ！全部解いてみよ！失敗しても魔神は怒らない…たぶん。"
      />
      <TopCard
        title="魔神の紹介"
        content="紹介には俺について適当な紹介を超書いているぞ！嘘だ。そんな時間はないため、頭をフル回転させて書いている。欲しい情報があったら、魔神に直接聞いてみるのもありだな！"
      />
    </div>
  );
}

export default TopContent;
