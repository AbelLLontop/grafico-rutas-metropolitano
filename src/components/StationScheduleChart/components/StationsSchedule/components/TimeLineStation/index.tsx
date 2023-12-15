import { Route } from "../../../../../../interfaces/rutas.interface";
import Point from "../Point";

const TimeLineStation = ({stations,expreso}:{stations:string[],expreso:Route}) => {
  const myStations = expreso.stations;
  return (
    <div className="flex gap-[16px] bg-blue-600 px-[2px] py-[2px] rounded-full">
      {stations.map((station,_) => (
        <Point key={_} show={myStations.includes(station)} />
      ))}
    </div>
  );
};
export default TimeLineStation;
