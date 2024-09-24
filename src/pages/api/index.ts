import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/utils/supabaseClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data: members, error: membersError } = await supabase
    .from("members")
    .select("*");

  // エラーハンドリング
  if (membersError) {
    return res.status(500).json({
      error: membersError?.message,
    });
  }

  // 取得したデータをまとめて返す
  return res.status(200).json({ members });
}
