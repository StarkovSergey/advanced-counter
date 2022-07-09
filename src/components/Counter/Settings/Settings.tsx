import style from './Settings.module.css';
import { Button, Input, TextField } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';

type PropsType = {
  startValue: number;
  maxValue: number;
  changeMaxValue: (newMaxValue: number) => void;
  changeStartValue: (changeStartValue: number) => void;
  setError: (error: null | string) => void;
  error: null | string;
}

export function Settings(props: PropsType) {
  const [maxValue, setMaxValue] = useState(props.maxValue);
  const [startValue, setStartValue] = useState(props.startValue);

  useEffect(() => {
    if (maxValue <= startValue || startValue < 0) {
      props.setError('Incorrect value!')
    } else {
      props.setError(null);
    }
  }, [maxValue, startValue])

  const maxValueInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(+e.currentTarget.value);
  };

  const startValueInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStartValue(+e.currentTarget.value);
  };

  const setButtonHandler = () => {
    props.changeStartValue(startValue);
    props.changeMaxValue(maxValue);
  };

  const isChanged = () => {
    if (maxValue === props.maxValue && startValue === props.startValue) {
      return true;
    }
  };

  return (
    <div className={style.counter}>
      <div className={style['settings-box']}>
        <TextField variant="outlined" type="number" label={'max-value'} value={maxValue}
                   onChange={maxValueInputChangeHandler}
                   error={!!props.error}
        />
        <TextField variant="outlined" type="number" label={'start-value'} value={startValue}
                   error={!!props.error}
                   onChange={startValueInputChangeHandler}/>
      </div>

      <div className={style['button-box']}>
        <Button variant="contained" onClick={setButtonHandler} disabled={isChanged()}>set</Button>
      </div>
    </div>
  );
}
