import Navbar from "@/components/Navbar";
import React from "react";

type Props = {};

const page = async (props: { params: { storyId: string } }) => {
  const params = await props.params;
  console.log(params.storyId);

  return (
    <>
      <div>Page</div>
    </>
  );
};

export default page;
