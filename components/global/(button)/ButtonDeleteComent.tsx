"use client";

import { createActionCommentDelete } from "@/actions/createActionCommentDelete";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type ParamsProps = {
  diary_id: any;
  comment_id?: string;
};

const ButtonDeleteComent = ({
  diary_id,
  comment_id,
}: ParamsProps): React.ReactElement => {
  return (
    <div className="btn btn-error">
      <FontAwesomeIcon
        icon={faDeleteLeft}
        size="2x"
        onClick={() => createActionCommentDelete({ diary_id, comment_id })}
      />{" "}
    </div>
  );
};

export default ButtonDeleteComent;
