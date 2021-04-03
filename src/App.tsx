import { useEffect, useState } from 'react';
import { api } from './services/api';

import { RepositoryList } from './components/RepositoryList/index';

import { Header, GlobalStyle, Section } from './styles/global';
import { FiSearch } from 'react-icons/fi';
import { Profile } from './components/Profile';

interface User {
  login: string;
  name: string;
  bio: string;
  blog: string;
  company: string;
  followers: number;
  following: number;
  location: string;
  url: string;
  avatar_url: string;
  html_url: string;
}

export function App() {
  const [user, setUser] = useState<User>({} as User);
  const [value, setValue] = useState('');
  const [onChangeUser, setOnChangeUser] = useState('ewertonbn');
  console.log(user)

  function handleClickButton() {
    setOnChangeUser(value)
    setValue('');
  }

  useEffect(() => {
    api.get(`/${onChangeUser}`)
      .then(response => setUser(response.data))
  }, [onChangeUser]);

  return (
    <>
      <GlobalStyle />
      <Header>
        <div className="header-content">
          <h1>Github Explorer</h1>
          <div className="header-search">
            <input type="text"
              placeholder="Pesquise o nome de um usuário"
              onChange={ event => setValue(event.target.value) }
              value={value}
            />
            <button
              type="button"
              onClick={handleClickButton}
            >
              <FiSearch size={20} color="#FFF" />
            </button>
          </div>
        </div>
      </Header>

      <Section>
        <Profile profile={user} />
        <RepositoryList profile={user} />
      </Section>
    </>
  );
}