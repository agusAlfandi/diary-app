"use client";

import { createCommentAction } from "@/actions/createCommentAction";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React, { RefObject, useRef } from "react";

type ParamsProps = {
  diary_id: number;
};

const CreateCommentForm = ({ diary_id }: ParamsProps) => {
  const formRef: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);
  const { isSignedIn } = useAuth();

  const fromReset = (): void => {
    setTimeout(() => {
      formRef.current?.reset();
    }, 1000);
  };

  return (
    <div className="pb-5">
      {isSignedIn ? (
        <form
          action={createCommentAction}
          className="flex flex-col gap-4 mx-auto w-full"
          onSubmit={fromReset}
          ref={formRef}
        >
          <textarea
            placeholder="Tuliskan komentarmu disini..."
            className="h-52 p-4 border rounded-md border-primary text-area"
            name="content"
            required
          />
          <input type="hidden" value={diary_id} name="diary_id" />
          <button
            className="btn btn-primary max-w-sm mx-auto w-full"
            type="submit"
          >
            Comment Now
          </button>
        </form>
      ) : (
        <Link className="btn btn-ghost text-base" href="/sign-in">
          Sign In bila ingin berkomentar
        </Link>
      )}
    </div>
  );
};

export default CreateCommentForm;
