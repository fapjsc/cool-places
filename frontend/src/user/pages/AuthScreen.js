import { useState, useContext } from 'react';

import classes from './AuthScreen.module.scss';
import Card from '../../shared/components/ui/Card';
import Input from '../../shared/components/formElement/Input';
import Button from '../../shared/components/formElement/Button';

import { useForm } from '../../shared/hooks/form-hook';

import { AuthContext } from '../../context/auth-context';

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';

const AuthScreen = () => {
  // Init State
  const [isLoginMode, setIsLoginMode] = useState(true);

  const authCtx = useContext(AuthContext);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(formState.inputs);
    authCtx.login();
  };

  const switchModeHandler = () => {
    if (!isLoginMode) {
      alert('test');
      delete formState.inputs.name;
      setFormData(
        { ...formState.inputs },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode(preMode => !preMode);
  };

  return (
    <Card className={classes['authentication']}>
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={onSubmitHandler}>
        {!isLoginMode && (
          <Input
            id="name"
            element="input"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="please enter a name."
            onInput={inputHandler}
          />
        )}

        <Input
          id="email"
          element="input"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="please enter valid email address"
          onInput={inputHandler}
        />

        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="please enter valid password, at least 5 characters."
          onInput={inputHandler}
        />

        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? 'LOGIN' : 'SIGNUP'}
        </Button>

        <Button type="button" onClick={switchModeHandler} inverse>
          SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
        </Button>
      </form>
    </Card>
  );
};

export default AuthScreen;
