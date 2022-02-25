import styled from "styled-components";

export const StyledPill = styled.div`
  border-radius: 10px;
  background: ${props => props.color};
  & a {
    display: block;
    text-decoration: none;
    color: #333;
    padding: 1rem 2rem;
  }
`;
