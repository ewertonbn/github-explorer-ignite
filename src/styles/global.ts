import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #121212;
    --secondary-color: #1F1B24;
    --green: #1db139;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 16px 'Helvetica Neue', Arial, sans-serif;
    color: white;
    background: var(--primary-color); 
  }

  button {
    cursor: pointer;
  }
`;

export const Header = styled.header`
  max-width: 1150px;
  width: 100%auto;
  margin: 0 auto;
  padding: 3rem 0 0;

  .header-content {
    background: var(--secondary-color);
    padding: 2rem 4rem;
    border-radius: 5px;

    h1 {
      text-align: center;
      font-size: 2.5rem;
    }
  }

  .header-search {
    margin-top: 2rem;
    display: flex;
    justify-content: center;

    input {
      height: 50px;
      width: 400px;
      border-radius: 5px;
      padding: 1rem;
      border: none;
      margin-right: 0.5rem;
    }

    button {
      height: 50px;
      background: var(--green);
      padding: 1rem 1.2rem;
      border: none;
      border-radius: 5px;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const Section = styled.section`
  max-width: 1150px;
  width: 100%auto;
  margin: 0 auto;
  padding: 3rem 0;

  display: grid;
  grid-template-columns: 30% auto;
  gap: 2rem;
`;