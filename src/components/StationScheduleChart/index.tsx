import { ConfiguracionTransporte } from "../../interfaces/rutas.interface";
import Stations from "./components/Stations";
import StationsSchedule from "./components/StationsSchedule";
import styles from "./styles.module.css";

const initialData:ConfiguracionTransporte = {
  stations: [
    "Naranjal",
    "Izaguirre",
    "Pacífico",
    "Independencia",
    "Los Jazmines",
    "Tomás Valle",
    "El Milagro",
    "Honorio Delgado",
    "UNI",
    "Parque del Trabajo",
    "Caquetá",
    "Ramón Castilla",
    "Tacna",
    "Jirón de la Unión",
    "Colmena",
    "Dos de Mayo",
    "Quilca",
    "España",
    "Estación Central",
    "Estadio Nacional",
    "México",
    "Canadá",
    "Javier Prado",
    "Canaval y Moreyra",
    "Aramburú",
    "Domingo Orué",
    "Angamos",
    "Ricardo Palma",
    "Benavides",
    "28 de Julio",
    "Plaza de Flores",
    "Balta",
    "Bulevar",
    "Estadio Unión",
    "Escuela Militar",
    "Terán",
    "Rosario de Villa",
    "Matellini",
  ],
  routes: [
    {
      name: "Expreso",
      subName: "1",
      type: "NS-SN",
      schedule: {
        NS: ["lun - vie 05:00 a.m. - 09:00 a.m."],
        SN: ["lun - vie 05:30 a.m. - 09:30 a.m."],
      },
      stations: [
        "Estación Central",
        "Estadio Nacional",
        "Javier Prado",
        "Canaval y Moreyra",
        "Angamos",
        "28 de Julio",
        "Balta",
        "Bulevar",
        "Estadio Unión",
        "Escuela Militar",
        "Terán",
        "Matellini",
      ],
    },
    {
      name: "Super Expreso Norte",
      subName: "SXN",
      type: "NS-SN",
      schedule: {
        NS: ["lun - vie 05:00 a.m. - 09:00 a.m."],
        SN: ["lun - vie 05:30 a.m. - 09:30 a.m."],
      },
      stations: [
        "Estación Central",
        "Estadio Nacional",
        "Javier Prado",
        "Canaval y Moreyra",
        "Angamos",
        "28 de Julio",
        "Balta",
        "Bulevar",
        "Estadio Unión",
        "Escuela Militar",
        "Terán",
        "Matellini",
      ],
    },
 
  ],
};

const StationScheduleChart = () => {
  return (
    <div className={styles.container}>
      <Stations stations={initialData.stations} />
      <StationsSchedule configuracionTransporte={initialData} />
    </div>
  );
};
export default StationScheduleChart;
