import styled from 'styled-components';
import { BASE_URL } from '../../utils/variables';

interface WrapperProps {
  isMenuOpen: boolean;
}

export const Wrapper = styled.header<WrapperProps>`
  width: 100%;
  background-color: rgb(27, 26, 66);

  .menuProfileSidebar {
    background: rgb(20, 19, 50);
    position: fixed;
    z-index: 100;
    padding: 46px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 48px;
    transition: 0.3s;
    pointer-events: ${({ isMenuOpen }) => (isMenuOpen ? 'all' : 'none')};
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? '1' : '0')};
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'translateY(0)' : 'translateY(calc(-100% - 48px))'};

    @media (min-width: 860px) {
      display: none;
    }

    > div {
      max-width: 400px;
      margin: auto;
    }

    a {
      font-size: 18px;
    }

    .boxLink {
      font-size: 18px;
      color: #ffffff;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 800;
    }

    hr {
      margin-top: 12px;
      margin-bottom: 8px;
      border-color: transparent;
      border-bottom-color: #ecf2fa;
    }
  }

  .container {
    background-color: rgb(27, 26, 66);
    padding: 7px 16px;
    max-width: 1110px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 101;

    @media (min-width: 860px) {
      justify-content: flex-start;
    }

    button {
      border: 0;
      background: transparent;
      align-self: center;
      display: inline-block;

      @media (min-width: 860px) {
        display: none;
      }
    }

    nav {
      display: none;

      @media (min-width: 860px) {
        display: flex;
      }

      a {
        font-size: 12px;
        color: white;
        padding: 10px 16px;
        position: relative;
        text-decoration: none;

        &:after {
          content: ' ';
          background-color: #a70036;
          display: block;
          position: absolute;
          width: 1px;
          height: 12px;
          margin: auto;
          left: 0;
          top: 0;
          bottom: 0;
        }
      }
    }

    input {
      color: #ffffff;
      background: #a70036;
      padding: 10px 42px;
      border: 0;
      background-image: url(${`${BASE_URL}/icons/search.svg`});
      background-position: 15px center;
      background-repeat: no-repeat;
      border-radius: 10px;
      font-size: 12px;

      ::placeholder {
        color: #ffffff;
        opacity: 1;
      }
    }
  }
`;

export const Logo = styled.img`
  width: auto;
  height: 30px;
`;
