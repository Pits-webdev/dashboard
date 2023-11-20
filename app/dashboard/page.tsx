import Card from "@/components/dashboard/Card";

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-lg my-4 font-semibold">Dashboard</h2>
      <div className="w-full h-fit flex justify-between gap-4 ">
        <Card />
        <Card />
        <Card />
        <Card />
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
