import { Route } from "../../../../../../interfaces/rutas.interface";
import TimeLineStation from "../TimeLineStation";

const ExpresoCalendar = ({stations,expreso}:{stations:string[],expreso:Route}) => {

  return (
    <div className="grid grid-cols-[80px,160px,1fr,240px] bg-sky-600 items-center gap-2">
      <div className="flex items-center text-xs">
        Expreso
        <div className=" flex items-center justify-center w-8 h-8 rounded-full bg-orange-400 text-xl text-white font-bold shrink-0">
          1
        </div>
      </div>
      <div className="text-xs w-full">
        <div>lun - vie 05:15 a.m. - 10-30pm</div>
        <div>lun - vie 05:15 a.m. - 10-30pm</div>
        <div>lun - vie 05:15 a.m. - 10-30pm</div>
      </div>
      <div>
        <TimeLineStation stations={stations} expreso={expreso}/>
      </div>
      <div>Otro Derecha</div>
    </div>
  );
};
export default ExpresoCalendar;
