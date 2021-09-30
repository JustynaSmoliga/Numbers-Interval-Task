import { useEffect, useRef, useState } from "react";
import Buttons from "../Buttons/Buttons";
import NumberOne from "../NumberOne/NumberOne";
import NumberThree from "../NumberThree/NumberThree";
import NumberTwo from "../NumberTwo/NumberTwo";
import EmptyDiv from "../EmptyDiv/EmptyDiv";
import styles from "./Container.module.css";

const Container = () => {
  const [visibleNumbers, setVisibleNumbers] = useState<never | number[]>([]);
  const [intervalId, setIntervalId] = useState<any>();
  const savedCallback: any = useRef();

  useEffect(() => {
    savedCallback.current = setNumbers;
  });

  const setNumbers = () => {
    if (visibleNumbers.includes(3)) {
      setVisibleNumbers([2]);
    }
    if (visibleNumbers.includes(2)) {
      setVisibleNumbers([1]);
    }
    if (visibleNumbers.includes(1)) {
      setVisibleNumbers([1, 2, 3]);
    }
  };

  const callback = () => {
    savedCallback.current();
  };

  const leftButtonClickHandler = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setVisibleNumbers([3]);
    let id = setInterval(callback, 1000);
    setIntervalId(id);
  };

  const rightButtonClickHandler = () => {};
  const resetButtonClickHandler = () => {};

  return (
    <div className={styles.mainContainer}>
      <Buttons
        handleLeftButtonClick={leftButtonClickHandler}
        handleRightButtonClick={rightButtonClickHandler}
        handleResetButtonClick={resetButtonClickHandler}
      />
      <div className={styles.numbersContainer}>
        {visibleNumbers.includes(1) ? <NumberOne /> : <EmptyDiv />}
        {visibleNumbers.includes(2) ? <NumberTwo /> : <EmptyDiv />}
        {visibleNumbers.includes(3) ? <NumberThree /> : <EmptyDiv />}
      </div>
    </div>
  );
};

export default Container;
