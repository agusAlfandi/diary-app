import CreateDiaryForm from "@/components/auth/CreateDiaryForm";
import Wrapper from "@/components/global/Wrapper";
import React from "react";

const page = (): React.ReactElement => {
  return (
    <Wrapper>
      <CreateDiaryForm />
    </Wrapper>
  );
};

export default page;
