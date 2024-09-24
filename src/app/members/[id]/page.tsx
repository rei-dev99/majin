"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

import { Members } from "@/types";
import Link from "next/link";

export default function QuizPage() {
  // useParamsを明示的に型キャスト
  const { id } = useParams() as { id: string }; // ここで型キャストを追加
  //   const router = useRouter(); // 次へ行くためのルーディング
  const [member, setMember] = useState<Members | null>(null); // memberの状態を管理。初期値はnullで、後でAPIから取得したデータが入る予定
  const [selectedAnswer, setSelectedAnswer] = useState(""); // ユーザーが選択した答えを管理するための状態
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null); //答えが正しいかどうかを管理する状態で、初期値はnull
  const [showNext, setShowNext] = useState(false); //次へボタンを表示、初期は非表示のためfalse

  useEffect(() => {
    if (id) {
      // idが存在する場合のみ、非同期処理(api処理関連)
      const fetchMember = async () => {
        try {
          const response = await fetch(`/api/members/${id}`);
          if (!response.ok) {
            throw new Error("Member data could not be fetched");
          }
          const data = await response.json();
          setMember(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchMember();
    }
  }, [id]);

  if (!id)
    return (
      <div className="min-h-screen p-6 bg-gradient-to-br from-purple-800 to-black text-white text-2xl md:text-4xl font-extrabold text-center">
        Loading...
      </div>
    );
  if (!member)
    return (
      <div className="min-h-screen p-6 bg-gradient-to-br from-purple-800 to-black text-white text-2xl md:text-4xl font-extrabold text-center">
        Loading member data...
      </div>
    );

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = answer === member.answer;
    setIsCorrect(correct);
    if (correct) {
      setShowNext(true); // 正解の場合に次へボタンを表示
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-purple-800 to-black text-white">
      <div className="max-w-full md:max-w-screen-sm mx-auto">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-6 text-center">
          {member.name}のクイズ
        </h1>
        <Image
          src={member.picture ? member.picture : "/monster.png"}
          alt={`${member.name} の画像`}
          className="rounded-full mb-4 mx-auto border-4 border-yellow-500 shadow-lg"
          width={128}
          height={128}
        />

        <h2 className="text-xl md:text-2xl font-bold mt-6">問題</h2>
        <p className="text-lg mb-4 mt-2">{member.question}</p>
        <div className="flex flex-col space-y-4">
          {[member.option1, member.option2, member.option3].map(
            (option, index) => (
              <button
                key={index}
                className="p-4 bg-gray-900 rounded-lg shadow hover:bg-purple-600 transition duration-300 w-full text-left"
                onClick={() => handleAnswer(option)}
                disabled={isCorrect !== null} // 答えを選んだ後は無効化
              >
                {option}
              </button>
            )
          )}
        </div>
        {selectedAnswer && (
          <p className="mt-4">
            選択された回答:{" "}
            <span className="font-semibold">{selectedAnswer}</span>
          </p>
        )}
        {isCorrect !== null && (
          <p
            className={`mt-4 text-lg ${
              isCorrect ? "text-green-400" : "text-red-400"
            }`}
          >
            {isCorrect ? "正解！" : "不正解..."}
          </p>
        )}

        {/* 不正解の場合のメッセージを表示 */}
        {isCorrect === false && (
          <div className="mt-6">
            <h2 className="text-xl font-bold">残念！不正解だ</h2>
            <p className="text-lg">もう一度リロードして考えてみよう！</p>
            <div className="mt-4">
              <button
                onClick={() => window.location.reload()}
                className="p-2 bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600 transition duration-300"
              >
                もう一度答える
              </button>
            </div>
          </div>
        )}

        {/* showNext が true の場合に次へボタンと解説を表示 */}
        {showNext && (
          <div className="mt-6">
            <h2 className="text-xl font-bold">答えと解説</h2>
            <p className="text-lg mt-4">正解は: 「{member.answer}」</p>
            <p className="text-lg">{member.description}</p>
            <div className="mt-4 text-right">
              <a
                href={`https://twitter.com/intent/tweet?url=https://majin-r821.vercel.app/&text=${encodeURIComponent(
                  `魔神の挑戦状「${member.name}」のクイズをクリアしたぞ！\n#魔神クエスト\n`
                )}`}
                title="Xで共有する"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600 transition duration-300"
              >
                Xで共有する
              </a>
            </div>
            <div className="text-center mt-6">
              <Link
                href={"/members"}
                className="p-3 bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600 transition duration-300"
              >
                クイズ一覧へ戻る
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
