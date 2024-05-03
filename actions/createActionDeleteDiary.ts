"use server";

import { redirect } from "next/navigation";
import { supabase } from "../utils/supabase";
import { Redirect } from "next";

type ParamsProps = {
  diary_id?: number;
};

export const createActionDeleteDiary = async ({
  diary_id,
}: ParamsProps): Promise<Redirect | void> => {
  const { error } = await supabase.from("diary").delete().eq("id", diary_id);

  if (error) return console.log(error);

  redirect("/dashboard/my-diary");
};
