const StationText = ({ text }: { text: string }) => {
  return (
    <div className="relative h-[9rem] w-6">
      <span className=" absolute inline-flex h-2 w-2 rounded-full bg-sky-400 opacity-75 bottom-[-16px] z-10 left-0"></span>

      <div className="w-[9rem] text-sky-700  absolute left-0 bottom-[-10px] origin-top-left rotate-[-66deg] leading-4 text-xs">
        {text}
      </div>
    </div>
  );
};

const Stations = ({ stations }: { stations: string[] }) => {
  return (
    <div className="bg-white flex h-[164px] w-fit mx-auto pr-1">
      <div className="relative h-[9rem] w-7">
        <div className="w-fit border-l-4 border-sky-500 bg-blue-950 p-1 px-4 absolute left-0 bottom-[-10px] text-white origin-top-left rotate-[-66deg] leading-4 text-xs font-semibold">
          ESTACIONES
        </div>
      </div>
      {stations.map((station, _) => (
        <StationText key={_} text={station} />
      ))}
    </div>
  );
};
export default Stations;
