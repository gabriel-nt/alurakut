import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  height: 300px;
  background: rgb(20, 19, 50);
  border-radius: 10px;
  margin-bottom: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Box = styled.div`
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  border-radius: 10px;
  border: 1px dashed #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  svg {
    color: #a70036;
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }
`;

export const DeleteIcon = styled.a`
  position: absolute;
  background: rgba(0, 0, 0, 0.68);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -8px;
  right: -8px;

  svg {
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
  }
`;
