import React from 'react'

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md'

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles'

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/97544007?v=4" />
        <Login>@FelipedaHora</Login>
        <Name>Felipe da Hora</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} color='white' />
          30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i>
        </Data>
        <Data>
          <MdWork size={20} color='white' /> Dev Samurai
        </Data>
        <Data>
          <MdLocationCity size={20} color='white' /> Paranavai
        </Data>
        <Data>
          <MdLink size={20} color='white' /> <a href='https://www.instagram.com/felipedahora09/'>instagram</a>
        </Data>
      </Inner>
    </Container>
  )
}

export default Profile;
