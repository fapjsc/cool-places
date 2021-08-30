import UserList from '../components/UserList';

const DUMMY_DATA = [
  {
    id: 'ui',
    name: 'Mike',
    image: 'https://picsum.photos/200/300/?blur',
    places: 3,
  },
];

const UserScreen = () => {
  return (
    <div>
      <UserList userList={DUMMY_DATA} />
    </div>
  );
};

export default UserScreen;
