import styled from 'styled-components';
import { darken } from 'polished';
export const Container = styled.div`
  height: 100%;

  background: linear-gradient(-90deg, #7159c1, #335bff);
  h2 {
    color: #fff;
    margin-top: 20px;
    margin-left: 60px;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
`;
export const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 10px;
    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }
  }
  button {
    margin: 5px 0 0;
    height: 44px;
    background: #3b9eff;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#3b9eff')};
    }
  }
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  list-style: none;
  width: 50%;
  button {
    background: transparent;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    margin-top: 10px;
    color: #fff;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#335bff')};
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const Template = styled.div`
  display: flex;
  position: absolute;
  top: 1.5em;
  left: 18em;
  h1 {
    color: #fff;
  }
`;

export const Itens = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  list-style: none;
  width: 40%;
  li {
    background: transparent;
    padding: 15px 10px;
    color: #fff;
    border: 1px solid #eee;
    border-radius: 4px;
    margin-top: 10px;
  }
`;
