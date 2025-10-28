import React from 'react';
function UserProfile({ user }) {
  return (
    <div>
      <Avatar avatarUrl={user.avatar} />
      <UserInfo info={user.info} />
    </div>
  );
}

const Avatar = React.memo(({ avatarUrl }) => (
  <div>
    <p>这是一个头像组件</p>
  </div>
));
const UserInfo = React.memo(({ info }) => <div>{info.name}</div>);
export default UserProfile;