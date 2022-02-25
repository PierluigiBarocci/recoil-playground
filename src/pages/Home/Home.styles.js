import styled from "styled-components";

export const StyledHomePage = styled.div`
  max-width: 80%;
  margin: 2rem auto;
  & header {
    margin-bottom: 3rem;
    & > h2 {
      font-weight: 400;
      letter-spacing: 3px;
      text-align: center;
    }
  }
  & .animes {
    margin-top: 4rem;
    & > h3 {
      font-weight: 400;
      font-size: 1.4rem;
      background: #ece4f1;
      width: max-content;
      padding: 0.3rem 1rem;
    }
    & > p {
      margin: 1.2rem 0;
    }
    & > .flex {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      & > .nodata {
        margin: 2rem 0 4rem;
        font-size: 1.3rem;
      }
    }
    & .pagination {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2rem 0 4rem;
    }
  }
`;
