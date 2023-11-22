import React from "react";
import { singleKunde } from "@/lib/data";

const SingleKunde = async ({ params: { id } }: { params: { id: string } }) => {
  const ID = parseInt(id); //parse to number

  const kunde = await singleKunde(ID);

  return (
    <div>
      <h2>{kunde?.name}</h2>

      <div>
        <p>peter</p>
      </div>
    </div>
  );
};

export default SingleKunde;
