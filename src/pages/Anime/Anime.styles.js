import styled from "styled-components";

export const StyledAnimePage = styled.div`
  max-width: 80%;
  margin: 2rem auto;
  position: relative;
  & > a {
    position: absolute;
    top: 1rem;
    text-decoration: none;
  }
  & > h2 {
    font-weight: 400;
    letter-spacing: 3px;
    text-align: center;
    margin-bottom: 2rem;
  }
  & > .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: max-content;
    & .anime {
      margin: 1rem;
      height: max-content;
    }
    & > p {
      margin: 2rem 0 4rem;
      font-size: 1.3rem;
      text-align: center;
    }
  }
`;
