import React, { useState } from "react";
import BarChartComponent from "./BarChartComponent";
import RadarChartComponent from "./RadarChartComponent";
import RadialBarComponent from "./RadialBarComponent";
import SheetComponent from "./SheetComponent";
import { BsChatText } from "react-icons/bs";

function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="p-5 grid grid-cols-2 gap-3">
        <div className="min-h-[450px] md:col-span-1 col-span-2 bg-white md:p-8 p-2">
          <RadialBarComponent />
        </div>
        <div className="min-h-[450px] md:col-span-1 col-span-2 bg-white md:p-8 p-2">
          <RadarChartComponent />
        </div>
        <div className="w-full bg-white col-span-2 md:p-8 p-2">
          <BarChartComponent />
        </div>

        <SheetComponent open={open} setOpen={setOpen} />
      </div>
      <div
        className="p-2 bg-gray-300 fixed right-4 bottom-[10%] rounded-full cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <BsChatText className="h-8 w-8 text-[#0B4A7B]" />
      </div>
    </div>
  );
}

export default Dashboard;
