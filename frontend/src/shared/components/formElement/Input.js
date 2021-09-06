import { useReducer, useEffect } from 'react';
import { validate } from '../../util/validators';

import classes from './Input.module.scss';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };

    case 'TOUCH':
      return {
        ...state,
        isTouch: action.isTouch,
      };

    default:
      return state;
  }
};

const Input = props => {
  const initialInputState = {
    value: props.initialValue || '',
    isValid: props.initialValid || false,
    isTouch: false,
  };

  const [inputState, dispatch] = useReducer(inputReducer, initialInputState);

  const onChangeHandler = e => {
    dispatch({
      type: 'CHANGE',
      val: e.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({ type: 'TOUCH', isTouch: true });
  };

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, onInput, value, isValid]);

  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={onChangeHandler}
        value={inputState.value}
        onBlur={touchHandler}
        autoComplete="off"
      />
    ) : (
      <textarea
        id={props.id}
        row={props.row || 3}
        onChange={onChangeHandler}
        value={inputState.value}
        onBlur={touchHandler}
        autoComplete="off"
      />
    );

  //=== Style ====//
  const inputBoxStyle = `${classes['form-control']} ${
    !inputState.isValid && inputState.isTouch && classes['form-control--invalid']
  }`;

  return (
    <div className={inputBoxStyle}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouch && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
