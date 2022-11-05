import { useState } from "react";
import styles from "../styles/FlightForm.module.css";

const FlightForm = ({ from, to, date, handleFlightInfo, returnDate }) => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);
  return (
    <form onSubmit={(e) => handleFlightInfo(e)} className={styles.container}>
      <div className={styles.selectsContainer}>
        <p>Origen:</p>
        <select ref={from} className={styles.select} name="From">
          <option value="MDZ">Mendoza</option>
          <option value="COR">Córdoba</option>
          <option value="EPA">Aeroparque, Buenos Aires</option>
          <option value="BRC">San Caralos de Bariloche</option>
        </select>
      </div>

      <div className={styles.selectsContainer}>
        <p>Destino:</p>
        <select ref={to} className={styles.select} name="To">
          <option value="MDZ">Mendoza</option>
          <option value="COR">Córdoba</option>
          <option value="EPA">Aeroparque, Buenos Aires</option>
          <option value="BRC">San Caralos de Bariloche</option>
        </select>
      </div>
      <div className={styles.selectsContainer}>
        <div>

        <label htmlFor="ida">Ida</label>
        <input
          onChange={() => setIsChecked(!isChecked)}
          checked={!isChecked ? true : false}
          type="radio"
          name="ida"
          id="ida"
        />
        <label htmlFor="vuelta">Ida y vuelta</label>
        <input
          checked={isChecked ? true : false}
          onChange={() => setIsChecked(!isChecked)}
          type="radio"
          name="vuelta"
          id="vuelta"
          />
        </div>
        <p>Fecha de ida: </p>
        <input ref={date} className={styles.select} type="date" name="Fecha" />
        {isChecked ? (
          <>
            <p>Fecha de vuelta: </p>
            <input
              ref={returnDate}
              className={styles.select}
              type="date"
              name="FechaVuelta"
            />
          </>
        ) : undefined}
      </div>
      <button className={styles.search}>Buscar</button>
    </form>
  );
};

export default FlightForm;
