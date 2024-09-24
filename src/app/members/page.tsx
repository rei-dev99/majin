"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Members } from "@/types";

export default function MembersPage() {
  // TypeScriptのジェネリクスを使って、membersの状態がMembers型の配列であることを指定、([]):useStateの初期値として空の配列を設定
  const [members, setMembers] = useState<Members[]>([]);

  useEffect(() => {
    const fetchMembers = async () => { // asyncとfetchを使用することで非同期処理を実現している。
      const response = await fetch("/api/members");
      const data = await response.json();
      setMembers(data)
    }
    fetchMembers();
  },[])

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-purple-200 to-purple-400">
      <h1 className="text-4xl font-bold text-center text-white mb-6">
        勇者たちのクイズを選んでください
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white p-4 rounded shadow text-center"
          >
            {/* 画像表示 */}
            <Image
              src={member.picture ? member.picture : "/monster.png"} // 画像がnullの場合デフォルト画像を表示
              alt={`${member.name} の画像`}
              className="rounded-full mb-4 mx-auto"
              width={128} // 画像の幅
              height={128} // 画像の高さ
            />
            {/* 名前表示 */}
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">
              {member.name}
            </h2>
            {/* クイズに挑戦ボタン */}
            <Link
              href={`/members/${member.id}`}
              className="text-white bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 inline-block"
            >
              クイズに挑戦
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
