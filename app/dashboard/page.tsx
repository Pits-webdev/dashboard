import Card from "@/components/dashboard/Card";
import { allKunden, allRechnungen } from "@/lib/data";
import { multiplay } from "@/utils/utils";
import { kundeByIdRechnungen } from "@/lib/data";

const Dashboard = async () => {
  const myData = await allKunden();
  const anzahlKunden = multiplay(myData);

  const allRechnung = await allRechnungen();
  const anzahlRechnungen = multiplay(allRechnung);

  const rechnungen = await kundeByIdRechnungen();
  return (
    <div>
      <h2 className="text-lg my-4 font-semibold">Dashboard</h2>
      <div className="w-full h-fit flex justify-between gap-4 ">
        <Card title="Kunde" data={anzahlKunden} />
        <Card title="Rechnungen" data={anzahlRechnungen} />
        <Card title="bezahlt" data="7" />
        <Card title="ausstehend" data="3" />
      </div>

      {/* jungste einnamen */}
      <div className="flex justify-between gap-16 mt-8">
        <div className="basis-1/2 bg-gray-100 p-4">
          <h2 className="font-semibold">Jüngste Einnahmen</h2>
        </div>

        {/* letzet rechnungen */}
        <div className="basis-1/2 bg-gray-100 h-[500px] flex flex-col gap-8 p-4">
          <h2 className="font-semibold">Letzte Rechnungen</h2>
          <div className="flex flex-col gap-4">
            {rechnungen?.map((rechnung, index) => (
              <div key={index} className="flex items-center gap-4 ">
                <p className="flex-1 text-lg">{rechnung.author.name}</p>
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
      </div>
    </div>
  );
};

export default Dashboard;
