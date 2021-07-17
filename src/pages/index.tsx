import { GetServerSideProps } from 'next';
import { FormEvent, useEffect, useState } from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';

import Box from '../components/Box';
import Menu from '../components/Menu';
import MainGrid from '../components/MainGrid';
import ProfileRelationsBox from '../components/ProfileRelations';
import OrkutNostalgicIconSet from '../components/OrkutNostalgicIconSet';
import MenuProfileSidebar from '../components/MenuProfileSidebar';

interface CommunityProps {
  id: string;
  title: string;
  imageUrl: string;
}

interface FollowerProps {
  id: string;
  login: string;
  avatar_url: string;
}

interface HomeProps {
  githubUser: string;
}

const HomePage = ({ githubUser }: HomeProps) => {
  const [followers, setFollowers] = useState<FollowerProps[]>([]);
  const [communities, setCommunities] = useState<CommunityProps[]>([]);
  const favoriteUsers = [
    'facebook',
    'flutter',
    'angular',
    'nodejs',
    'laravel',
    'php',
  ];

  const handleCreateCommunity = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    fetch('/api/communities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: String(formData.get('title')),
        imageUrl: String(formData.get('image')),
        creatorSlug: githubUser,
      }),
    }).then(async response => {
      const data = await response.json();
      setCommunities([data.data, ...communities]);
    });
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUser}/followers`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        setFollowers(response.splice(0, 6));
      });

    fetch(`https://graphql.datocms.com/`, {
      method: 'POST',
      headers: {
        Authorization: '3ad544f54f76c94a2c8e56d1a3a195',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query {
          allCommunities {
            id
            title
            imageUrl
          }
        }`,
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        setCommunities(response.data.allCommunities);
      });
  }, []);

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
            <h2 className="subTitle">O que você deseja fazer?</h2>

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
                    <img src={item.imageUrl} alt="" />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBox>

          <ProfileRelationsBox>
            <h2 className="smallTitle">Seguidores ({followers.length})</h2>

            <ul>
              {followers.map(item => (
                <li key={item.id}>
                  <a href={`/users/${item.login}}`}>
                    <img src={item.avatar_url} alt="" />
                    <span>{item.login}</span>
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

export const getServerSideProps: GetServerSideProps = async ctx => {
  const cookies = nookies.get(ctx);
  const token = cookies.USER_TOKEN;

  const { isAuthenticated } = await fetch(
    'https://alurakut.vercel.app/api/auth',
    {
      headers: {
        Authorization: token,
      },
    },
  ).then(response => response.json());

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const { githubUser } = jwt.decode(token) as HomeProps;

  return {
    props: {
      githubUser,
    },
  };
};

export default HomePage;
