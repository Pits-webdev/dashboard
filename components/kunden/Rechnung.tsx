//@ts-nocheck
import { firmaRechnung } from "@/lib/data";

const Rechnung = async ({ kundenId, kundenName }) => {
  const rechnungen = await firmaRechnung(kundenId);

  return (
    <div className="w-full h-full">
      <span className="block my-8 w-full h-[1px] bg-black/20" />

      <div className="flex flex-col gap-4">
        {rechnungen?.map((rechnung, index) => (
          <div key={index} className="flex items-center gap-4 ">
            <p className="flex-1 text-lg">{kundenName}</p>
            <p className="flex-1 text-lg">Preis: {rechnung.preis}$</p>
            {rechnung.bezahlt ? (
              <p className="flex-1 max-w-max text-white bg-teal-600 px-2 py-1 rounded-lg">
                bezahlt
              </p>
            ) : (
              <p className="flex-1 max-w-max text-white bg-red-600  p-1 rounded-lg">
                nicht bezahlt
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rechnung;
