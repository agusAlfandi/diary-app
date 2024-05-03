"use server";

import { redirect } from "next/navigation";
import { userData } from "@/utils/clerk";
import { IDiary, supabase } from "@/utils/supabase";
import { Redirect } from "next";
// Require diary table
// user: Email, usename?, awatar
// Diary: content, comments?

export const createDiaryAction = async (
  formData: FormData
): Promise<Redirect> => {
  const content = formData.get("content") as string;
  const { avatar, email, username } = await userData();

  // if (!content || !email || !username || !avatar) return;

  const data: IDiary = { content, email, username, avatar };

  await supabase.from("diary").insert(data);

  redirect("/dashboard/my-diary");
};
