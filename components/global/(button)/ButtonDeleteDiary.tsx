import { createActionDeleteDiary } from "@/actions/createActionDeleteDiary";
import React from "react";

type ParamasProps = {
  diary_id?: number;
};

const ButtonDeleteDiary = ({ diary_id }: ParamasProps): React.ReactElement => {
  return (
    <div>
      <button
        className="btn btn-error"
        onClick={() => createActionDeleteDiary({ diary_id })}
      >
        Delete
      </button>
    </div>
  );
};

export default ButtonDeleteDiary;
