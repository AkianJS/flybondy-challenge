import { useRef, useState } from "react";
import styles from "../styles/Flight.module.css";
import flights from "../utils/dataset.json";
import FlightForm from "./FlightForm";

const Flight = () => {
  const [flightInfo, setFlightInfo] = useState(null);

  const from = useRef();
  const to = useRef();
  const date = useRef();

  const handleFlightInfo = (event) => {
    event.preventDefault();
    if (from.current.value === to.current.value)
      return alert("Origen y destino no pueden ser iguales");

    let data = {
      from: from.current.value,
      to: to.current.value,
      date: date.current.value,
    };
    let flightExist = flights.filter((item) => {
      return (
        data.from === item.origin &&
        data.to === item.destination &&
        data.date === item.data
      );
    });
    flightExist.length ? setFlightInfo(flightExist) : setFlightInfo(null);
  };

  return (
    <>
      <FlightForm
        from={from}
        to={to}
        date={date}
        handleFlightInfo={handleFlightInfo}
      />
      {flightInfo ? (
        <div className={styles.detailsContainer}>
          <p>Asientos disponibles: {flightInfo[0].availability}</p>
          <p>Fecha: {flightInfo[0].data}</p>
          <p>Origen: {flightInfo[0].origin}</p>
          <p>Destino: {flightInfo[0].destination}</p>
        </div>
      ) : (
        <p className={styles.notFlight}>Sin viajes</p>
      )}
    </>
  );
};

export default Flight;
