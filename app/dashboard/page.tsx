import Card from "@/components/dashboard/Card";
import { allKunden } from "@/lib/data";
import { multiplayKunden } from "@/utils/utils";

const Dashboard = async () => {
  const myData = await allKunden();
  const anzahl = multiplayKunden(myData);

  return (
    <div>
      <h2 className="text-lg my-4 font-semibold">Dashboard</h2>
      <div className="w-full h-fit flex justify-between gap-4 ">
        <Card title="Kunde" data={anzahl} />
        <Card title="Rechnungen" data="10" />
        <Card title="bezahlt" data="7" />
        <Card title="ausstehend" data="3" />
      </div>

      <div className="flex justify-between gap-16 mt-8">
        <div className="basis-1/2 bg-gray-100">
          <h2>Jüngste Einnahmen</h2>
        </div>

        <div className="basis-1/2 bg-gray-100">
          <h2>Letzte Rechnungen</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
