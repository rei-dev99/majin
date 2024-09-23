"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Members } from "@/types";
import Image from "next/image";

export default function QuizPage() {
  // useParamsを明示的に型キャスト
  const { id } = useParams() as { id: string }; // ここで型キャストを追加

  const [member, setMember] = useState<Members | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    if (id) {
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

  if (!id) {
    return <p>Loading...</p>;
  }

  if (!member) return <p>Loading member data...</p>;

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === member.answer);
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-purple-800 to-black text-white">
      <h1 className="text-4xl font-extrabold mb-6 text-center">
        {member.name} のクイズ
      </h1>
      <Image
        src={member.picture ? member.picture : "/monster.png"}
        alt={`${member.name} の画像`}
        className="rounded-full mb-4 mx-auto border-4 border-yellow-500 shadow-lg"
        width={128}
        height={128}
      />

      <h2 className="text-2xl font-bold mt-6">問題</h2>
      <p className="text-lg mb-4">{member.question}</p>
      <div className="flex flex-col space-y-4">
        {[member.option1, member.option2, member.option3].map(
          (option, index) => (
            <button
              key={index}
              className="p-4 bg-gray-900 rounded-lg shadow hover:bg-purple-600 transition duration-300 w-full text-left"
              onClick={() => handleAnswer(option)}
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
      <div className="mt-6">
        <h2 className="text-xl font-bold">答え</h2>
        <p className="text-lg">{member.answer}</p>
      </div>
    </div>
  );
}
