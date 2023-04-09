import React from 'react'

import Profile from './Profile'
import Filter from './Filter'
import Repositories from './Repositories'

import { Container, Sidebar, Main } from './styles'

function RepositoriesPage() {
  return (
    <Container>
      <Sidebar>
        <Profile />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories></Repositories>
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
