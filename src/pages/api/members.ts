import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/utils/supabaseClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data, error } = await supabase.from("members").select("*");
  if (error) {
    return res.status(500).json({ error: "データの取得に失敗しました" });
  }
  return res.status(200).json(data);
}
