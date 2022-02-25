import styled from "styled-components";

export const StyledQuote = styled.div`
  background: #dbece5;
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p {
    font-size: 2rem;
    letter-spacing: 2px;
    text-align: center;
    font-style: italic;
    margin-bottom: 3rem;
    background: #fff;
    border-radius: 0.5rem;
    padding: 3rem;
  }
  & > h4 {
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 2px;
    span {
      padding: 5px 10px;
    }
    em {
      font-size: 1.2rem;
    }
    & > .character {
      background: #b8dace;
    }
    & > .anime {
      background: #f5e7e4;
    }
  }
`;
