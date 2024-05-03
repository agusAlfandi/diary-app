"use server";

import { userData } from "@/utils/clerk";
import { IComments, supabase } from "@/utils/supabase";
import { randomUUID } from "crypto";
import { Redirect } from "next";
import { redirect } from "next/navigation";

export const createCommentAction = async (
  formData: FormData
): Promise<Redirect> => {
  const content = formData.get("content") as string;
  const diary_id = formData.get("diary_id");
  const comment_id = randomUUID();
  const { avatar, email, username } = await userData();

  const data: IComments = { comment_id, avatar, email, username, content };
  const getComments = await supabase
    .from("diary")
    .select("comments")
    .eq("id", diary_id)
    .single();

  //! Memeriksa data komen sebelumnya

  const getExistingComments: Array<IComments> =
    getComments.data?.comments || [];

  //! Tambah komen baru ke object komen sebelumnya yang ada di database

  const updatedComments = [...getExistingComments, data];

  await supabase
    .from("diary")
    .update({ comments: updatedComments })
    .eq("id", diary_id);

  redirect(`/diary/${diary_id}`);
};
