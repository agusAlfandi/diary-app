import PostContent from "@/components/global/(diary)/PostContent";
import Wrapper from "@/components/global/Wrapper";
import { userData } from "@/utils/clerk";
import { supabase } from "@/utils/supabase";
import React from "react";

const page = async (): Promise<React.ReactElement> => {
  const { email } = await userData();
  const { data, error } = await supabase
    .from("diary")
    .select()
    .order("created_at", { ascending: false })
    .eq("email", email);

  if (error) return <p>Please reloaded the page...</p>;
  if (data.length === 0)
    return (
      <p className="flex justify-center items-center text-2xl">
        Belum ada diary saat ini...
      </p>
    );

  return (
    <>
      <Wrapper title="My Diary">
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {data.map((diary) => {
            return (
              <PostContent
                key={diary.id}
                diary_id={diary.id}
                avatar={diary.avatar}
                content={diary.content}
                email={diary.email}
                username={diary.username}
              />
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default page;
