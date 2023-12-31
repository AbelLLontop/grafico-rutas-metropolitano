import { ConfiguracionTransporte } from "../../../../interfaces/rutas.interface";
import ExpresoCalendar from "./components/ExpresoCalendar";

const DecorationLine = ({stations}:{stations:string[]})=>{
  return (
    <div className="left-[261px] z-[-1] flex w-fit h-full mx-auto gap-4 absolute top-0">
    {stations.map((station, _) => (
      <div className="w-2 h-full 
      border-l-2 border-dashed border-gray-300
      " key={_}></div>
    ))}
  </div>
  )
}

const StationsSchedule = ({
  configuracionTransporte,
}: {
  configuracionTransporte: ConfiguracionTransporte;
}) => {
  const stations = configuracionTransporte.stations;
  const expresos = configuracionTransporte.routes;
  return (
    <div className="h-full  relative">
      <div className="">
        {expresos.map((expreso=>(
          <ExpresoCalendar key={expreso.name} stations={stations} expreso={expreso} />
        )))}
      </div>
      <DecorationLine stations={stations}/>
    </div>
  );
};
export default StationsSchedule;
