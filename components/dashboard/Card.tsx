import React from "react";

const Card = () => {
  return (
    <div className="w-full bg-gray-100 py-8 px-4 flex flex-col gap-8 rounded-lg">
      <div className="flex justify-center">
        <p>Kunden</p>
      </div>

      <div className="bg-white h-[5rem] flex items-center justify-center rounded-lg">
        <p>10</p>
      </div>
    </div>
  );
};

export default Card;
