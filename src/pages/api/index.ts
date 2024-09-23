import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/utils/supabaseClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data: members, error: membersError } = await supabase
    .from("members")
    .select("*");
  const { data: users, error: usersError } = await supabase
    .from("users")
    .select("*");

  // エラーハンドリング
  if (membersError || usersError) {
    return res.status(500).json({
      error: membersError?.message || usersError?.message,
    });
  }

  // 取得したデータをまとめて返す
  return res.status(200).json({ members, users });
}
