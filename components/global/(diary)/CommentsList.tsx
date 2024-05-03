import { IComments, supabase } from "@/utils/supabase";
import Image from "next/image";
import React from "react";
import ButtonDeleteComent from "../(button)/ButtonDeleteComent";
import { userData } from "@/utils/clerk";

type ParamsProps = {
  diary_id: number;
};

const CommentsList = async ({
  diary_id,
}: ParamsProps): Promise<React.ReactElement> => {
  const { email } = await userData();

  const { data, error } = await supabase
    .from("diary")
    .select("comments")
    .eq("id", diary_id)
    .single();

  if (error) return <p>Please reload the page...</p>;

  if (!data.comments?.length) return <p>Belum ada comment...</p>;

  return (
    <div className="flex flex-col gap-4">
      <div className="divider" />

      {data?.comments.map((comment: IComments) => {
        return (
          <div
            className="ml-4 card card-body card-bordered p-4 bg-base-300 flex flex-row justify-between"
            key={comment.comment_id}
          >
            <div>
              <Image
                src={comment.avatar as string}
                alt={comment.avatar as string}
                width={50}
                height={50}
                className="rounded-full bg-primary p-1 mb-3"
              />
              <p>{comment.content}</p>
              <p>
                {comment.username} || {comment.email}
              </p>
            </div>
            {comment.email === email ? (
              <div className="flex items-center">
                <ButtonDeleteComent
                  diary_id={diary_id}
                  comment_id={comment.comment_id}
                />
              </div>
            ) : null}
          </div>
        );
      })}
      <div className="divider" />
    </div>
  );
};

export default CommentsList;
