import Image from 'next/image';

import Box from '../components/Box';
import Menu from '../components/Menu';
import MainGrid from '../components/MainGrid';
import ProfileRelationsBox from '../components/ProfileRelations';
import OrkutNostalgicIconSet from '../components/OrkutNostalgicIconSet';

const Home = () => {
  const githubUser = 'gabriel-nt';
  const favoriteUsers = ['facebook', 'flutter', 'angular', 'nodejs'];

  return (
    <>
      <Menu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea">
          <Box
            style={{
              gridArea: 'profileArea',
            }}
          >
            <Image
              height={300}
              width={300}
              src={`https://github.com/${githubUser}.png`}
            />
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
                <li>
                  <a href={`/users/${item}`} key={item}>
                    <img src={`https://github.com/${item}.png`} alt="Profile" />
                    <span>{githubUser}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBox>

          <Box
            style={{
              gridArea: 'profileRelationsArea',
            }}
          >
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  );
};

export default Home;
