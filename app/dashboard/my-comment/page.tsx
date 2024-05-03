import MyComment from "@/components/global/(diary)/MyComment";
import Wrapper from "@/components/global/Wrapper";

import React from "react";

const page = (): React.ReactElement => {
  return (
    <Wrapper title="My Comment">
      <MyComment />
    </Wrapper>
  );
};

export default page;
