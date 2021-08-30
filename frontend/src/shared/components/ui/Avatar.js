import classes from './Avatar.module.scss';

const Avatar = props => {
  return (
    <div className={`${classes.avatar} ${props.className}`} style={props.style}>
      <img src={props.image} alt={props.alt} style={{ width: props.width, height: props.width }} />
    </div>
  );
};

export default Avatar;
