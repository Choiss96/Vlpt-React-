import React from 'react';

import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }, 
    {
      id: 4,
      username: 'tsst',
      email: 'aaa@has.com'
    },
    {
      id: 5,
      username: 'tsst',
      email: 'aaa@has.com',
      test: 'aaa'
    }
  ];
  return <UserList users={users} />;
}

export default App;