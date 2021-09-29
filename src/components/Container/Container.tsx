import Buttons from "../Buttons/Buttons";
import NumberOne from "../NumberOne/NumberOne";
import NumberThree from "../NumberThree/NumberThree";
import NumberTwo from "../NumberTwo/NumberTwo";
import styles from "./Container.module.css";

const Container = () => {
  return (
    <div className={styles.mainContainer}>
      <Buttons />
      <div className={styles.numbersContainer}>
        <NumberOne />
        <NumberTwo />
        <NumberThree />
      </div>
    </div>
  );
};

export default Container;
