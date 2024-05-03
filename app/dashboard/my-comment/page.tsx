import { userData } from "@/utils/clerk";
import { IComments, supabase } from "@/utils/supabase";
import React from "react";

const page = async () => {
  const { email } = await userData();
  const { data } = await supabase
    .from("diary")
    .select("comments")
    .eq("email", email);

  const res = data?.filter((items) => {
    if (items.comments && items.comments.length > 0) {
      return items.comments;
    }
  });

  const result = res?.map((item) => {
    item;
  });
  console.log("🚀 ~ result ~ result:", result);
  return <div>helo</div>;
};

export default page;
