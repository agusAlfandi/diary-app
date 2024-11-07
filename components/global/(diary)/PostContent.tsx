"use client";

import React from "react";
import Image from "next/image";
import { IDiary } from "@/utils/supabase";
import Link from "next/link";
import ButtonDeleteDiary from "../(button)/ButtonDeleteDiary";
import { usePathname } from "next/navigation";

const PostContent = ({
  diary_id,
  avatar,
  content,
  email,
  username,
}: IDiary): React.ReactElement => {
  const pathName = usePathname();

  return (
    <div
      className="card card-body card-bordered shadow-lg bg-neutral-700
    duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-xl hover:bg-base-300 h-64 flex sm:h-72 md:h-80 lg:h-60 w-auto"
    >
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <Image
          className="rounded-full bg-primary p-2"
          src={avatar as string}
          alt={avatar as string}
          width={50}
          height={50}
        />
        <p className="font-semibold">
          {username} | {email}
        </p>
      </div>
      <p className="overflow-y-auto text-md">{content}</p>
      <div className="flex md:flex-row justify-between">
        {pathName === "/dashboard/my-diary" ? (
          <ButtonDeleteDiary diary_id={diary_id} />
        ) : null}
        <Link href={`/diary/${diary_id}`}>
          <button className="btn btn-primary ml-3">Comment</button>
        </Link>
      </div>
    </div>
  );
};

export default PostContent;
