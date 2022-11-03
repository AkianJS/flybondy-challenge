import styles from "../styles/Header.module.css";
import logo from "../public/flybondi.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.imageContainer}>
      <Image
        className={styles.image}
        fill  
        src={logo}
        alt={"logo"}
      />
        </div>
    </header>
  );
};

export default Header;
