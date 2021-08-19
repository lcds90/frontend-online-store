import styled from 'styled-components';

export const Container = styled
  .main`background-color: ${({ theme: { colors } }) => colors.primary};
  color: white;
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  max-width: 100%;
  overflow: auto;
  width: 100vw;
`;
