import { alldData } from "@/lib/data";

export default async function Home() {
  const data = await alldData();

  return (
    <div>
      <h1>home</h1>
    </div>
  );
}
