import classes from './PlaceForm.module.scss';

import Input from '../../shared/components/formElement/Input';
import Button from '../../shared/components/formElement/Button';

import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';

import { useForm } from '../../shared/hooks/form-hook';

const NewPlaceScreen = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },

      description: {
        value: '',
        isValid: false,
      },
      address: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form className={classes['place-form']} onSubmit={onSubmitHandler}>
      <Input
        id="title"
        element="input"
        label="Title"
        type="text"
        errorText="please enter a valid title."
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />

      <Input
        id="description"
        element="textarea"
        label="Description"
        errorText="please enter a valid description (at least 5 characters)."
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
      />

      <Input
        id="address"
        element="input"
        label="Address"
        errorText="please enter a valid address."
        validators={[VALIDATOR_REQUIRE(5)]}
        onInput={inputHandler}
      />

      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlaceScreen;
