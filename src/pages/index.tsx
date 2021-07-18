import { GetServerSideProps } from 'next';
import { FormEvent, useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import nookies from 'nookies';

import Box from '../components/Box';
import Menu from '../components/Menu';
import MainGrid from '../components/MainGrid';
import Dropzone from '../components/Dropzone';
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
  const [selectedFile, setSelectedFile] = useState('');

  const [characters, setCharacters] = useState<CommunityProps[]>([]);
  const [movies, setMovies] = useState<CommunityProps[]>([]);
  const [series, setSeries] = useState<CommunityProps[]>([]);
  const favoriteUsers = [
    'facebook',
    'flutter',
    'angular',
    'nodejs',
    'laravel',
    'php',
  ];

  const handleCreateCommunity = async (event: FormEvent<HTMLFormElement>) => {
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
      setMovies([data.data, ...movies]);
    });
  };

  useEffect(() => {
    fetch(`https://graphql.datocms.com/`, {
      method: 'POST',
      headers: {
        Authorization: '3ad544f54f76c94a2c8e56d1a3a195',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query {
          allSeries {
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
        setSeries(response.data.allSeries);
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
          allMovies {
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
        setMovies(response.data.allMovies);
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
          allCharacters {
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
        setCharacters(response.data.allCharacters);
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
                  value={selectedFile}
                  onChange={e => setSelectedFile(e.target.value)}
                  aria-label="Coloque uma url para usar de capa"
                  placeholder="Coloque uma url para usar de capa"
                />
              </div>

              <Dropzone
                imageUrl={selectedFile}
                onRemove={() => {
                  setSelectedFile('');
                }}
              />

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
          <ProfileRelationsBox title="Filmes" data={movies} />
          <ProfileRelationsBox title="Séries" data={series} />
          <ProfileRelationsBox title="Integrantes" data={characters} />
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
