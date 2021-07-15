import Image from 'next/image';

import Box from '../components/Box';
import Menu from '../components/Menu';
import MainGrid from '../components/MainGrid';
import ProfileRelationsBox from '../components/ProfileRelations';
import OrkutNostalgicIconSet from '../components/OrkutNostalgicIconSet';
import MenuProfileSidebar from '../components/MenuProfileSidebar';
import { FormEvent, useState } from 'react';

interface CommunityProps {
  id: string;
  title: string;
  image: string;
}

const Home = () => {
  const githubUser = 'gabriel-nt';
  const [communities, setCommunities] = useState<CommunityProps[]>([]);
  const favoriteUsers = ['facebook', 'flutter', 'angular', 'nodejs'];

  const handleCreateCommunity = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    console.log(formData.get('title'));

    setCommunities([
      ...communities,
      {
        id: new Date().toISOString(),
        title: String(formData.get('title')),
        image: String(formData.get('image')),
      },
    ]);
  };

  return (
    <>
      <Menu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea">
          <Box
            as="aside"
            style={{
              gridArea: 'profileArea',
            }}
          >
            <MenuProfileSidebar githubUser={githubUser} />
          </Box>
        </div>

        <div className="welcomeArea">
          <Box
            style={{
              gridArea: 'welcomeArea',
            }}
          >
            <h1 className="title">Bem vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer</h2>

            <form onSubmit={handleCreateCommunity}>
              <div>
                <input
                  type="text"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  placeholder="Qual vai ser o nome da sua comunidade?"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="image"
                  aria-label="Coloque uma url para usar de capa"
                  placeholder="Coloque uma url para usar de capa"
                />
              </div>

              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>

        <div
          className="profileRelationsArea"
          style={{
            gridArea: 'profileRelationsArea',
          }}
        >
          <ProfileRelationsBox>
            <h2 className="smallTitle">
              Pessoas da comunidade ({favoriteUsers.length})
            </h2>

            <ul>
              {favoriteUsers.map(item => (
                <li key={item}>
                  <a href={`/users/${item}`}>
                    <img src={`https://github.com/${item}.png`} alt="Profile" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBox>

          <ProfileRelationsBox>
            <h2 className="smallTitle">Comunidades ({communities.length})</h2>

            <ul>
              {communities.map(item => (
                <li key={item.id}>
                  <a href={`/users/${item.title}}`}>
                    <img src={`http://placehold.it/300x300`} alt="" />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBox>
        </div>
      </MainGrid>
    </>
  );
};

export default Home;
