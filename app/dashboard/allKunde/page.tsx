import { allKunden } from "@/lib/data";
import { KUNDE } from "@/lib/definitions";
import Link from "next/link";

const allKunde = async () => {
  const myData = await allKunden();

  return (
    <div className="w-full pt-4">
      <div className="mb-4">
        <h2 className="text-2xl">Kunden</h2>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="hidden min-w-full rounded-md text-gray-900 md:table">
          <thead className="rounded-md bg-gray-100 text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                Name
              </th>

              <th scope="col" className="px-3 py-5 font-medium">
                Email
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Total Invoices
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Total Pending
              </th>
              <th scope="col" className="px-4 py-5 font-medium">
                Total Paid
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-gray-900">
            {myData?.map((kunde: KUNDE) => (
              <tr key={kunde.id} className="group">
                <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                  <div className="flex items-center gap-3">
                    <Link href={`/dashboard/allKunde/${kunde.id}`}>
                      <p>{kunde.name}</p>
                    </Link>
                  </div>
                </td>
                <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                  {kunde.email}
                </td>
                <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                  invoices
                </td>
                <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                  pending
                </td>
                <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                  paid
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default allKunde;
