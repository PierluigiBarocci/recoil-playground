import styled from "styled-components";

export const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  border-width: 2px 2px 2px 0;
  border-style: solid;
  width: max-content;
  & button {
    outline: none;
    background: transparent;
    border: none;
    border-left: 2px solid;
    width: 35px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover,
    &.active {
      background: #fae1da;
    }
  }
`;
