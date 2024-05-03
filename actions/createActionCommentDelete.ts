"use server";

import { supabase } from "@/utils/supabase";
import { Redirect } from "next";
import { redirect } from "next/navigation";

type ParamsProps = {
  diary_id: string;
  comment_id?: string;
};

export const createActionCommentDelete = async ({
  diary_id,
  comment_id,
}: ParamsProps): Promise<Redirect> => {
  const { data } = await supabase
    .from("diary")
    .select("comments")
    .eq("id", diary_id)
    .single();

  const deleteData = data?.comments.filter(
    (item: ParamsProps) => item.comment_id !== comment_id
  );

  await supabase
    .from("diary")
    .update({ comments: deleteData })
    .eq("id", diary_id);

  redirect(`/diary/${diary_id}`);
};
