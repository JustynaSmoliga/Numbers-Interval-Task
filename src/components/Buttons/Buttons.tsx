import styles from "./Buttons.module.css";
const Buttons = () => {
  return (
    <div>
      <div className={styles.leftRightContainer}>
        <button>w lewo</button>
        <button>w prawo</button>
      </div>
      <div className={styles.resetContainer}>
        <button>reset</button>
      </div>
    </div>
  );
};

export default Buttons;
