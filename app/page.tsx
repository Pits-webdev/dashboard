import { alldData } from "@/lib/data";

export default async function Home() {
  const data = await alldData();

  return (
    <div className="px-4">
      <h1 className="text-center">home</h1>
      <p className="text-center">Starte XAMPP</p>
    </div>
  );
}
