"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Members } from "@/types";

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
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">{member.name} のクイズ</h1>
      <p className="text-lg mb-4">{member.question}</p>
      <div className="grid grid-cols-1 gap-4">
        {[member.option1, member.option2, member.option3].map(
          (option, index) => (
            <button
              key={index}
              className="p-2 bg-white rounded shadow hover:bg-blue-200"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          )
        )}
      </div>
      {selectedAnswer && <p>選択された回答: {selectedAnswer}</p>}
      {isCorrect !== null && (
        <p
          className={`mt-4 text-lg ${
            isCorrect ? "text-green-500" : "text-red-500"
          }`}
        >
          {isCorrect ? "正解！" : "不正解..."}
        </p>
      )}
    </div>
  );
}
