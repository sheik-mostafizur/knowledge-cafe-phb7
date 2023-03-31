import React from "react";

const SpentTime = ({spendingTime}) => {
  return (
    <div className="border p-6 bg-blue-50 border-blue-700 rounded md:sticky md:top-0">
      <h2 className="font-bold text-2xl text-blue-800">
        Spent time on read : {spendingTime} min
      </h2>
    </div>
  );
};

export default SpentTime;
