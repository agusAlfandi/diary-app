import Wrapper from "@/components/global/Wrapper";
import React from "react";

const loading = () => {
  return (
    <Wrapper title="Loading...">
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    </Wrapper>
  );
};

export default loading;
