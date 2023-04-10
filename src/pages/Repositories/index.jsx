import React, { useState, useEffect } from 'react'

import Profile from './Profile'
import Filter from './Filter'
import Repositories from './Repositories'

import { Loading, Container, Sidebar, Main } from './styles'
import { getUser, getLangsFrom } from '../../services/api'

function RepositoriesPage() {
  const [user, setUser] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse] = await Promise.all([getUser('FelipedaHora')]);
      setUser(userResponse.data);

      setLoading(false);
    }
    loadData();
  }, []);

  /*   const user = {
      login: "FelipedaHora",
      name: "Felipe da Hora",
      avatar_url: "https://avatars.githubusercontent.com/u/97544007?v=4",
      followers: 0,
      following: 0,
      company: null,
      blog: "https://www.instagram.com/felipedahora09/",
      location: "Paranavaí - PR",
    }; */

  const repositories = [
    {
      id: '1',
      name: "Repo 1",
      description: "Descricao",
      html_url: "https://avatars.githubusercontent.com/u/97544007?v=4",
      language: 'JavaScript'
    },
    {
      id: '2',
      name: "Repo 2",
      description: "Descricao",
      html_url: "https://avatars.githubusercontent.com/u/97544007?v=4",
      language: 'C#'
    },
    {
      id: '3',
      name: "Repo 3",
      description: "Descricao",
      html_url: "https://avatars.githubusercontent.com/u/97544007?v=4",
      language: 'PHP'
    },
    {
      id: '4',
      name: "Repo 4",
      description: "Descricao",
      html_url: "https://avatars.githubusercontent.com/u/97544007?v=4",
      language: 'Ruby'
    },
    {
      id: '5',
      name: "Repo 5",
      description: "Descricao",
      html_url: "https://avatars.githubusercontent.com/u/97544007?v=4",
      language: 'Java'
    },
    {
      id: '6',
      name: "Repo 6",
      description: "Descricao",
      html_url: "https://avatars.githubusercontent.com/u/97544007?v=4",
      language: 'TypeScript'
    },
  ];

  const languages = getLangsFrom(repositories);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  }

  if (loading) {
    return <Loading>Carregando...</Loading>
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick} />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} currentLanguage={currentLanguage} />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
