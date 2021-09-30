import styles from "./Buttons.module.css";

interface ButtonsProps {
  handleLeftButtonClick: () => void;
  handleRightButtonClick: () => void;
  handleResetButtonClick: () => void;
}

const Buttons: React.FC<ButtonsProps> = (props) => {
  return (
    <div>
      <div className={styles.leftRightContainer}>
        <button onClick={props.handleLeftButtonClick}>w lewo</button>
        <button onClick={props.handleRightButtonClick}>w prawo</button>
      </div>
      <div className={styles.resetContainer}>
        <button onClick={props.handleResetButtonClick}>reset</button>
      </div>
    </div>
  );
};

export default Buttons;
