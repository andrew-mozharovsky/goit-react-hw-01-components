import React from 'react';

import user from './components/Profile/user.json';

import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <Container>
      <Profile
        src={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
    </Container>
  );
};

export default App;
