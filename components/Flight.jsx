import { useRef, useState } from "react";
import styles from "../styles/Flight.module.css";
import flights from "../utils/dataset.json";
import FlightForm from "./FlightForm";

const Flight = () => {
  const [flightInfo, setFlightInfo] = useState(null);
  const [returnInfo, setReturnInfo] = useState(null);
  const [isSearched, setIsSearched] = useState(false);

  // Viaje de ida
  const from = useRef();
  const to = useRef();
  const date = useRef();

  // Viaje de vuelta
  const returnDate = useRef();

  const handleFlightInfo = (event) => {
    event.preventDefault();
    if (from.current.value === to.current.value)
      return alert("Origen y destino no pueden ser iguales");

    let data = {
      from: from.current.value,
      to: to.current.value,
      date: date.current.value,
      returnDate: returnDate.current?.value,
    };
    let flightExist = flights.filter((item) => {
      return (
        data.from === item.origin &&
        data.to === item.destination &&
        data.date === item.data
      );
    });
    let returnExist = flights.filter((item) => {
      return (
        data.to === item.origin &&
        data.from === item.destination &&
        data.returnDate === item.data
      );
    });
    returnExist.length ? setReturnInfo(returnExist) : setReturnInfo(null);
    flightExist.length
      ? setFlightInfo(flightExist)
      : setFlightInfo(null) & setIsSearched(true);
  };
console.log(returnInfo)
  return (
    <section className={styles.gridContainer}>
      <FlightForm
        from={from}
        to={to}
        date={date}
        returnDate={returnDate}
        handleFlightInfo={handleFlightInfo}
      />
      {flightInfo ? (
        <div className={styles.detailsContainer}>
          <p>
            Su vuelo sale el día {flightInfo[0].data} desde{" "}
            {flightInfo[0].origin} hasta {flightInfo[0].destination}.
            <br />
            {returnInfo
              ? `Con vuelta el día ${returnInfo[0].data} y un precio total
            de ${(returnInfo[0].price + flightInfo[0].price).toFixed(2)} $`
              : `Precio total: ${flightInfo[0].price} $`}
          </p>
        </div>
      ) : isSearched ? (
        <p className={styles.notFlight}>No disponible en esta fecha</p>
      ) : (
        <p className={styles.notFlight}>Busca un viaje...</p>
      )}
    </section>
  );
};

export default Flight;
