import style from './Display.module.css'
import { Button } from '@mui/material';

type PropsType = {
  value: number;
  incrementValue: () => void;
  resetValue: () => void;
  startValue: number;
  maxValue: number;
  error: string | null;
}

export function Display(props: PropsType) {

  return (
    <div>
      <div className={`${style.display} ${props.value >= props.maxValue ? style.max : ''} ${props.error ? style.error : ''}`}>
        {props.error
          ? <span className={style['error-message']}>{props.error}</span>
          : props.value}
      </div>
      <div className={`${style['button-box']}`}>
        <Button variant="contained" onClick={props.incrementValue} disabled={props.value >= props.maxValue || !!props.error}>inc</Button>
        <Button variant="contained" onClick={props.resetValue} disabled={props.startValue === props.value || !!props.error}>reset</Button>
      </div>
    </div>
  )
}
