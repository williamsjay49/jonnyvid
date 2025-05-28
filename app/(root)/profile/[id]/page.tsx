import React from "react";
import Header from "@/components/Header";
const page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        subHeader="Creator"
        title="Michael Magg"
        userImg="/assets/images/dummy.jpg"
      />
      <div className="text-2xl font-geistKarla">USER ID: {id}</div>
    </div>
  );
};

export default page;
