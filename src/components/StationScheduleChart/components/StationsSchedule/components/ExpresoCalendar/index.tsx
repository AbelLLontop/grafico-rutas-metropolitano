import { Route } from "../../../../../../interfaces/rutas.interface";
import TimeLineStation from "../TimeLineStation";
//import svg
const IconArrow = ({ direction }: { direction: boolean }) => {
  const SvgContent = () => (
    <svg
      width="20px"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>arrow-right-square</title>
      <desc>Created with Sketch Beta.</desc>
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Icon-Set-Filled"
          transform="translate(-466.000000, -985.000000)"
          fill="#000000"
        >
          <path
            d="M489.535,1001.879 L483.879,1007.54 C483.488,1007.93 482.855,1007.93 482.465,1007.54 C482.074,1007.14 482.074,1006.51 482.465,1006.12 L486.586,1002 L476,1002 C475.447,1002 475,1001.552 475,1001 C475,1000.447 475.447,1000 476,1000 L486.586,1000 L482.465,995.879 C482.074,995.488 482.074,994.854 482.465,994.465 C482.855,994.074 483.488,994.074 483.879,994.465 L489.535,1000.121 C489.775,1000.361 489.85,1000.689 489.795,1001 C489.85,1001.311 489.775,1001.639 489.535,1001.879 L489.535,1001.879 Z M494,985 L470,985 C467.791,985 466,986.791 466,989 L466,1013 C466,1015.21 467.791,1017 470,1017 L494,1017 C496.209,1017 498,1015.21 498,1013 L498,989 C498,986.791 496.209,985 494,985 L494,985 Z"
            id="arrow-right-square"
          ></path>
        </g>
      </g>
    </svg>
  );
  if (direction) {
    return (
      <div className="text-sm scale-x-[-1]">
        <SvgContent />
      </div>
    );
  }
  return (
    <div className="text-sm">
      <SvgContent />
    </div>
  );
};

const ExpresoCalendar = ({
  stations,
  expreso,
}: {
  stations: string[];
  expreso: Route;
}) => {
  const Title = ({ name, subName }: { name: string; subName: string }) => (
    <div className="text-center font-bold gap-1 items-center">
      {name}
      <div className=" mx-auto flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-xs text-white font-bold shrink-0">
        {subName}
      </div>
    </div>
  );
  const ScheduleLeft = ({ schedule }: { schedule: string[] }) => (
    <div className="w-full grid grid-cols-[1fr,20px]">
      <div>
        {schedule.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <div className="h-full flex items-center ">
        <IconArrow direction={false} />
      </div>
    </div>
  );
  const ScheduleRight = ({ schedule }: { schedule: string[] }) => (
    <div className="w-full grid grid-cols-[32px,1fr]">
      <div className="h-full flex items-center ">
        <IconArrow direction={true} />
      </div>
      <div>
        {schedule.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );

  const ExpresoCalendarItem = ({ expreso }: { expreso: Route }) => {
    return (
      <>
        <Title name={expreso.name} subName={expreso.subName} />
        <ScheduleLeft schedule={expreso.schedule.NS} />
        <TimeLineStation stations={stations} expreso={expreso} />
        <ScheduleRight schedule={expreso.schedule.SN} />

        <div></div>
        <ScheduleLeft schedule={expreso.schedule.NS} />
        <TimeLineStation stations={stations} expreso={expreso} />
        <div></div>

        
        <div></div>
        <div></div>
        <TimeLineStation stations={stations} expreso={expreso} />
        <ScheduleRight schedule={expreso.schedule.SN} />
      </>
    );
  };

  return (
    <div>
      <div className="grid grid-cols-[50px,190px,1fr,240px] text-xs  items-center gap-2 text-sx border border-red-100 py-1">
        <ExpresoCalendarItem expreso={expreso} />
      </div>
    </div>
  );
};
export default ExpresoCalendar;
