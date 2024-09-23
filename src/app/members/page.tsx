"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Members } from "@/types";

export default function MembersPage() {
  const [members, setMembers] = useState<Members[]>([]);

  useEffect(() => {
    async function fetchMembers() {
      const response = await fetch("/api/members");
      const data = await response.json();
      setMembers(data);
    }
    fetchMembers();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">
        メンバーのクイズを選んでください
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
            <h2 className="text-xl font-semibold mb-4">{member.name}</h2>
            {/* クイズに挑戦ボタン */}
            <Link
              href={`/members/${member.id}`}
              className="text-white bg-blue-500 hover:bg-blue-600 rounded px-4 py-2 inline-block"
            >
              クイズに挑戦
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
