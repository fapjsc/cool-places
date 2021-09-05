import classes from './NewPlaceScreen.module.scss';
import Input from '../../shared/components/formElement/Input';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';

const NewPlaceScreen = () => {
  return (
    <form className={classes['place-form']}>
      <Input
        element="input"
        label="title"
        type="text"
        errorText="please enter a valid title."
        validators={[VALIDATOR_REQUIRE()]}
      />
    </form>
  );
};

export default NewPlaceScreen;
