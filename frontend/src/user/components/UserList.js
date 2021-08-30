import classes from './UserList.module.scss';
import UserItem from './UserItem';

const UserList = ({ userList }) => {
  if (userList.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  return (
    <ul className={classes.userList}>
      {userList.map(user => (
        <UserItem key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default UserList;
