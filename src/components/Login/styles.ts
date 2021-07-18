import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(20, 19, 50);
  display: flex;
  justify-content: center;
  align-items: center;

  .left-login {
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > h1 {
      font-size: 3vw;
      color: #ffffff;
    }

    .left-login-image {
      width: 35vw;
    }
  }

  .right-login {
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-login {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 35px;
    background: rgb(27, 26, 66);
    border-radius: 20px;
    box-shadow: 0px 10px 40px #00000056;

    > h1 {
      color: #ffffff;
      font-weight: 800;
      margin: 0;
    }

    > form {
      width: 100%;
    }
  }

  .text-field {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px 0px;

    > input {
      width: 100%;
      border: none;
      border-radius: 10px;
      padding: 15px;
      background: rgb(20, 19, 50);
      color: #f0ffffde;
      font-size: 12pt;
      outline: none;
      box-sizing: border-box;

      &::placeholder {
        color: #f0ffff94;
      }
    }

    > label {
      color: #f0ffffde;
      margin-bottom: 10px;
    }
  }

  .btn-login {
    width: 100%;
    padding: 16px 0px;
    margin: 20px 0;
    border: none;
    border-radius: 8px;
    outline: none;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 3px;
    color: #ffffff;
    background: #a70036;
    cursor: pointer;
    box-shadow: 0px 10px 28px -12px #a70036;
    transition: 0.3s ease all;

    &:hover {
      opacity: 0.8;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  @media (max-width: 950px) {
    .card-login {
      width: 85%;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;

    .left-login {
      width: 100%;
      height: auto;

      > h1 {
        display: none;
      }

      .left-login-image {
        width: 50vw;
      }
    }

    .right-login {
      width: 100%;
      height: auto;
    }

    .card-login {
      width: 90vw;
    }
  }
`;
