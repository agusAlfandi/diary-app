import React from "react";
import { userData } from "@/utils/clerk";
import { IComments, supabase } from "@/utils/supabase";
import Image from "next/image";

const MyComment = async (): Promise<React.ReactElement> => {
  const { email } = await userData();
  const { data } = await supabase.from("diary").select("comments");
  const myComment: Array<IComments> = [];

  data?.map((items) => {
    if (items.comments && items.comments.length > 0) {
      let res = items.comments.filter((item: any) => item.email === email);
      myComment.push(res);
    }
  });

  const result = myComment
    ?.map((a) => a)
    .flat()
    .filter((b) => b.email === email);

  return (
    <div className="container flex flex-col gap-4">
      {result?.map((item: IComments, index: any) => {
        return (
          <div key={index} className="card card-body card-bordered bg-base-300">
            <div className="flex flex-row items-center">
              <Image
                src={item.avatar as string}
                alt={item.avatar as string}
                height={50}
                width={50}
                className="rounded-full"
              />
              <p className="ml-4">
                {item.username} || {item.email}
              </p>
            </div>
            <p className="overflow-y-auto text-md mt-3">{item.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MyComment;
