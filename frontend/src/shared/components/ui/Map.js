import { useRef, useEffect } from 'react';

import classes from './Map.module.scss';
const Map = props => {
  const { center, zoom } = props;

  const mapRef = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div ref={mapRef} className={`${classes['map']} ${props.className}`} style={props.style} />
  );
};

export default Map;
