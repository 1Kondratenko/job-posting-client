import styles from "./styles.module.scss";
import header from "../assets/images/header.svg";

export const Header = () => {
  return (
    <div className={styles.header}>
      <img src={header} alt="header" />
    </div>
  );
};
