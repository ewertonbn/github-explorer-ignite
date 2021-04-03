import styled from 'styled-components';

export const Container = styled.div`
  max-width: 950px;
  width: 100%;

  background: var(--secondary-color);
  border-radius: 5px;
  padding: 2rem 2rem;

  h3 {
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    li {
      background: #18151b;
      border-radius: 5px;
      padding: 1rem 2rem;

      p {
        font-size: 13px;
        color: #444;
        margin-top: 8px;
      }

      a {
        display: inline-block;
        margin-top: 16px;
        text-decoration: none;
        color: #8257e6;
        font-size: 13px;
      }
    }
  }
`;