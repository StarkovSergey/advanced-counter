import style from './Counter.module.css';
import { Settings } from './Settings/Settings';
import { Display } from './Display/Display';
import { useEffect, useState } from 'react';

export function Counter() {
  const [maxValue, setMaxValue] = useState(Number(localStorage.getItem('maxValue')) || 5);
  const [startValue, setStartValue] = useState(Number(localStorage.getItem('startValue')));
  const [value, setValue] = useState(0);
  const [error, setError] = useState<string | null>(null);


  const changeMaxValue = (newMaxValue: number) => {
    setMaxValue(newMaxValue);
    localStorage.setItem('maxValue', newMaxValue.toString());
  };

  const changeStartValue = (newStartValue: number) => {
    setStartValue(newStartValue);
    localStorage.setItem('startValue', newStartValue.toString());
  };


  useEffect(() => {
    if (startValue > value) {
      setValue(startValue);
    }
  }, [startValue]);

  useEffect(() => {
    if (maxValue < value) {
      setValue(maxValue);
    }
  }, [maxValue]);


  const incrementValue = () => {
    if (value < maxValue) {
      setValue(value + 1);
    }
  };

  const resetValue = () => {
    setValue(startValue);
  };

  return (
    <div className={style.counter}>
      <Settings
        maxValue={maxValue}
        startValue={startValue}
        changeMaxValue={changeMaxValue}
        changeStartValue={changeStartValue}
        error={error}
        setError={setError}
      />
      <Display incrementValue={incrementValue}
               resetValue={resetValue}
               value={value}
               startValue={startValue}
               maxValue={maxValue}
               error={error}
      />
    </div>
  );
}
