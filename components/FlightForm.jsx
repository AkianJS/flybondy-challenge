import styles from "../styles/FlightForm.module.css";

const FlightForm = ({from, to, date, handleFlightInfo}) => {
  return (
    <form onSubmit={e => handleFlightInfo(e)} className={styles.container}>
      <div className={styles.selectsContainer}>
        <p>Desde:</p>
        <select ref={from} className={styles.select} name="From">
          <option value="MDZ">Mendoza</option>
          <option value="COR">Córdoba</option>
          <option value="EPA">Aeroparque, Buenos Aires</option>
          <option value="BRC">San Caralos de Bariloche</option>
        </select>
      </div>

      <div className={styles.selectsContainer}>
        <p>Hasta:</p>
        <select ref={to} className={styles.select} name="To">
          <option value="MDZ">Mendoza</option>
          <option value="COR">Córdoba</option>
          <option value="EPA">Aeroparque, Buenos Aires</option>
          <option value="BRC">San Caralos de Bariloche</option> 
        </select>
      </div>
    <div className={styles.selectsContainer}>
        <p>Elija su fecha: </p>
      <input ref={date} className={styles.select} type="date" name="Fecha" />
    </div>
    <button className={styles.search}>Buscar</button>
    </form>
  );
};

export default FlightForm;
