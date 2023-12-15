import { Route } from "../../../../../../interfaces/rutas.interface";
import Point from "../Point";

const TimeLineStation = ({stations,expreso}:{stations:string[],expreso:Route}) => {
  const myStations = expreso.stations;
  return (
    <div className="flex gap-[16px] bg-orange-400 p-1 px-2 rounded-full">
      {stations.map((station,_) => (
        <Point key={_} show={myStations.includes(station)} />
      ))}
    </div>
  );
};
export default TimeLineStation;
