import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/formElement/Input';
import Button from '../../shared/components/formElement/Button';

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';

import classes from './PlaceForm.module.scss';

import { useForm } from '../../shared/hooks/form-hook';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world',
    imageUrl:
      'https://images.unsplash.com/photo-1528291151377-165f5107c82a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZW1waXJlJTIwc3RhdGUlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    address: '20 W 34th St, New York, NY 10001美國',
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world',
    imageUrl:
      'https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/styles/on_single_feature/public/2019-10/home_banner-min.jpg?itok=OVtUHvyB',
    address: '20 W 34th St, New York, NY 10001美國',
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: 'u2',
  },
];

const UpdatePlaceScreen = () => {
  const { pid } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: { value: '', isValid: false },
      description: { value: '', isValid: false },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find(place => place.id === pid);

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  useEffect(() => {
    setFormData(
      {
        title: { value: identifiedPlace.title, isValid: true },
        description: { value: identifiedPlace.description, isValid: true },
      },
      true
    );

    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find Place!</h2>
      </div>
    );
  }

  return (
    <form className={classes['place-form']} onSubmit={onSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />

      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />

      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlaceScreen;
