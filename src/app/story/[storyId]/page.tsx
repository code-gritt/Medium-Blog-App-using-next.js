import Navbar from "@/components/Navbar";
import React from "react";

type Props = {};

const page = ({ params }: { params: { storyId: string } }) => {
  console.log(params.storyId);

  return (
    <>
      <div>Page</div>
    </>
  );
};

export default page;
