import { ConfiguracionTransporte } from "../../../../interfaces/rutas.interface";
import ExpresoCalendar from "./components/ExpresoCalendar";

const StationsSchedule = ({
  configuracionTransporte,
}: {
  configuracionTransporte: ConfiguracionTransporte;
}) => {
  const stations = configuracionTransporte.stations;
  const expreso = configuracionTransporte.routes[0];
  return (
    <div className="h-full  relative">
      <div className="">
        <ExpresoCalendar stations={stations} expreso={expreso} />
      </div>

      <div className="left-[261px] z-[-1] flex w-fit h-full mx-auto gap-4 absolute top-0">
        {stations.map((station, _) => (
          <div className="w-2 h-full 
          border-l-2 border-dashed border-gray-300
          " key={_}></div>
        ))}
      </div>
    </div>
  );
};
export default StationsSchedule;
