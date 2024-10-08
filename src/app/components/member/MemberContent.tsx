"use client";

import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import { Members } from "@/types";
import Image from "next/image";

function MemberContent() {
  // TypeScriptのジェネリクスを使って、membersの状態がMembers型の配列であることを指定、([]):useStateの初期値として空の配列を設定
  const [members, setMembers] = useState<Members[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      // asyncとfetchを使用することで非同期処理を実現している。
      const response = await fetch("/api/members");
      const data = await response.json();
      setMembers(data);
    };
    fetchMembers();
  }, []);

  return (
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
            className="rounded-full mb-2 mx-auto"
            width={128} // 画像の幅
            height={128} // 画像の高さ
          />
          {/* 名前表示 */}
          <h2 className="text-xl md:text-2xl font-semibold text-purple-700 mb-4">
            {member.name}
          </h2>
          {/* クイズに挑戦ボタン */}
          <Link
            href={`/members/${member.id}`}
            className="text-white bg-blue-600 hover:bg-blue-700 rounded md:px-4 px-2 py-2 inline-block text-sm md:text-base font-bold"
          >
            クイズに挑戦
          </Link>
        </div>
      ))}
    </div>
  );
}

export default memo(MemberContent);
