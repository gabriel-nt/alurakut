import styled from 'styled-components';

const MainGrid = styled.main`
  width: 100%;
  padding: 16px;
  margin: 0 auto;
  max-width: 500px;

  .profileArea {
    display: none;

    @media (min-width: 860px) {
      display: block;
    }
  }

  @media (min-width: 860px) {
    display: grid;
    grid-gap: 10px;
    max-width: 1110px;
    grid-template-columns: 160px 1fr 312px;
    grid-template-areas: 'profileArea welcomeArea profileRelationsArea';
  }
`;

export default MainGrid;
