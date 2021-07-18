import styled from 'styled-components';

const Box = styled.div`
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 10px;
  background: rgb(27, 26, 66);

  .boxLink {
    font-size: 14px;
    color: #ffffff;
    text-decoration: none;
    font-weight: 800;
  }

  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 20px;
  }

  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ecf2fa;
  }

  input {
    width: 100%;
    background-color: rgb(20, 19, 50);
    color: #ffffff;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10px;

    ::placeholder {
      color: #ffffff;
      opacity: 1;
    }
  }

  img {
    border-radius: 10px;
  }

  button {
    border: 0;
    padding: 8px 12px;
    color: #ffffff;
    border-radius: 10000px;
    background-color: #a70036;
  }
`;

export default Box;
