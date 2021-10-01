import { useEffect, useRef, useState } from "react";
import Buttons from "../Buttons/Buttons";
import NumberOne from "../NumberOne/NumberOne";
import NumberThree from "../NumberThree/NumberThree";
import NumberTwo from "../NumberTwo/NumberTwo";
import styles from "./Container.module.css";

const Container = () => {
  const [visibleNumbers, setVisibleNumbers] = useState<number[]>([]);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const savedDescendingCallback = useRef<() => void>(setNumbersDescending);
  const savedAscendingCallback = useRef<() => void>(setNumbersAscending);

  useEffect(() => {
    savedDescendingCallback.current = setNumbersDescending;
    savedAscendingCallback.current = setNumbersAscending;
  });

  const leftButtonClickHandler = () => {
    resetInterval();
    setVisibleNumbers([3]);
    const id = setInterval(descendingCallback, 1000);
    setIntervalId(id);
  };

  const rightButtonClickHandler = () => {
    resetInterval();
    setVisibleNumbers([1]);
    const id = setInterval(ascendingCallback, 1000);
    setIntervalId(id);
  };

  const resetButtonClickHandler = () => {
    setVisibleNumbers([]);
    resetInterval();
  };

  function setNumbersDescending() {
    if (visibleNumbers.includes(3)) {
      setVisibleNumbers([2]);
    }
    if (visibleNumbers.includes(2)) {
      setVisibleNumbers([1]);
    }
    if (visibleNumbers.includes(1)) {
      setVisibleNumbers([1, 2, 3]);
      resetInterval();
    }
  }

  function setNumbersAscending() {
    if (visibleNumbers.includes(1)) {
      setVisibleNumbers([2]);
    }
    if (visibleNumbers.includes(2)) {
      setVisibleNumbers([3]);
    }
    if (visibleNumbers.includes(3)) {
      setVisibleNumbers([1, 2, 3]);
      resetInterval();
    }
  }

  function resetInterval() {
    if (intervalId) {
      clearInterval(intervalId);
    }
  }

  const descendingCallback = () => {
    savedDescendingCallback.current();
  };

  const ascendingCallback = () => {
    savedAscendingCallback.current();
  };

  return (
    <div className={styles.mainContainer}>
      <Buttons
        handleLeftButtonClick={leftButtonClickHandler}
        handleRightButtonClick={rightButtonClickHandler}
        handleResetButtonClick={resetButtonClickHandler}
      />
      <div className={styles.numbersContainer}>
        {visibleNumbers.includes(1) ? <NumberOne /> : <div />}
        {visibleNumbers.includes(2) ? <NumberTwo /> : <div />}
        {visibleNumbers.includes(3) ? <NumberThree /> : <div />}
      </div>
    </div>
  );
};

export default Container;
