import styled, { css } from 'styled-components';

export const Style = css`
  margin: 0;
  color: ${({ theme }) => theme.material.palette.primary.main};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledLink = styled.a`${Style}`;
