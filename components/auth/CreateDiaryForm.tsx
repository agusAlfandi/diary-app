import { createDiaryAction } from "@/actions/createDiaryAction";
import React from "react";

const CreateDiaryForm = (): React.ReactElement => {
  return (
    <form
      action={createDiaryAction}
      className="flex flex-col gap-4 max-w-xl mx-auto"
    >
      <textarea
        placeholder="isi diary kamu..."
        className="h-52 p-4 border rounded-md border-primary text-area"
        name="content"
        required
      />
      <button className="btn btn-primary" type="submit">
        Create Now
      </button>
    </form>
  );
};

export default CreateDiaryForm;
