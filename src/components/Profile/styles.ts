import styled from "styled-components";

export const Sidebar = styled.aside`
  background: var(--secondary-color);
  border-radius: 5px;
  padding: 2rem 2rem;
  height: fit-content;
  color: #c9d1d9;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
    border-radius: 100%;
    margin-bottom: 0.5rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 15px;
    margin: 0.5rem 0;
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }

  div {
    margin: 0.9rem 0;
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
    
    span {
      font-size: 15px;

      & + span {
        margin-left: 1rem;
      }
    }
  }

  a {
    color: inherit;
    margin-top: 1.5rem;
    display: inline-block;
    text-decoration: none;
    font-size: 15px;
    background: #302d33;
    padding: 0.8rem 1rem;
    border-radius: 5px;
  }
`;