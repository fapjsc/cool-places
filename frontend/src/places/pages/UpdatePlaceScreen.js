import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/formElement/Input';
import Button from '../../shared/components/formElement/Button';

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';

import classes from './PlaceForm.module.scss';

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

  const identifiedPlace = DUMMY_PLACES.find(place => place.id === pid);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find Place!</h2>
      </div>
    );
  }

  return (
    <form className={classes['place-form']}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter a valid title."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />

      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="please enter a valid description (min. 5 characters)."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />

      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlaceScreen;
