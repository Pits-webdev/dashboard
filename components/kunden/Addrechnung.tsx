//@ts-nocheck
"use client";

import { addRechnung } from "@/lib/actions";
import { useState } from "react";

const AddRechnung = ({ kundenId }) => {
  const [KundenId, setKundenId] = useState(kundenId);
  const [isBezahlt, setIsBezahlte] = useState("");

  const handleKundenId = (event: Event) => {
    setKundenId(event.target.KundenID);
  };
  const handleCheckbox = () => {
    if (isBezahlt === "0") {
      setIsBezahlte("1");
    } else {
      setIsBezahlte("0");
    }
  };

  return (
    <>
      <form
        className="flex flex-wrap items-center  gap-16"
        action={addRechnung}
      >
        <p className="text-sm text-white bg-blue-400 w-fit p-1">
          Neue Rechnung
        </p>
        <div className="flex-1 items-center gap-4 hidden">
          <label className="text-lg" htmlFor="id">
            id:
          </label>
          <input
            className="border p-1"
            type="text"
            id="id"
            name="id"
            placeholder="id"
            value={KundenId}
            onChange={handleKundenId}
          />
        </div>

        <div className="flex-1 flex items-center gap-4">
          <label className="text-lg" htmlFor="preis">
            Preis:
          </label>
          <input
            className="border p-1"
            type="text"
            id="preis"
            name="preis"
            placeholder="enter preis"
            required
          />
        </div>

        <div className="flex-1 flex gap-4">
          <label htmlFor="bezahlt:">bezahlt</label>
          <input
            className="accent-teal-400 w-5 h-5"
            type="checkbox"
            id="bezahlt"
            name="bezahlt"
            onChange={handleCheckbox}
          />
        </div>

        <div className="flex-1 flex justify-center">
          <button className="bg-teal-500 text-white p-2 rounded-xl cursor-pointer">
            hinzufügen
          </button>
        </div>
      </form>
    </>
  );
};

export default AddRechnung;
