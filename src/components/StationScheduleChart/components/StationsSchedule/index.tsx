import { ConfiguracionTransporte } from "../../../../interfaces/rutas.interface";
import ExpresoCalendar from "./components/ExpresoCalendar";

const StationsSchedule = ({configuracionTransporte}:{configuracionTransporte:ConfiguracionTransporte}) => {
  const stations = configuracionTransporte.stations;
  const expreso = configuracionTransporte.routes[0];
  return (
    <div className="bg-orange-100">
     <ExpresoCalendar stations={stations} expreso={expreso}/>
    </div>
  );
};
export default StationsSchedule;
