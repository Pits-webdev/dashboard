import React from "react";
import { singleKunde } from "@/lib/data";
import Rechnung from "@/components/kunden/Rechnung";
import AddRechnung from "@/components/kunden/Addrechnung";

const SingleKunde = async ({ params: { id } }: { params: { id: string } }) => {
  const ID = parseInt(id); //parse to number

  const kunde = await singleKunde(ID);

  return (
    <div className="py-4">
      <h2 className="text-xl font-semibold">{kunde?.name}</h2>

      <div className="mt-4 flex flex-col gap-4">
        <AddRechnung kundenId={id} />

        <Rechnung kundenId={id} kundenName={kunde?.name} />
      </div>
    </div>
  );
};

export default SingleKunde;
