import styled from 'styled-components';

export const FormUserComment = styled
  .section`align-content: center;
  align-items: center;
  display: grid;
  justify-items: center;
  padding: 25px;
`;

export const UsersAvaliations = styled.section`display: grid;
  grid-column: span 2;
`;

export const FormStyle = styled
  .form`display: grid;
  gap: 25px;
`;

export const CommentSection = styled
  .section`background-color: ${({ theme: { colors } }) => colors.text};
  display: grid;
  padding: 50px;
`;

export const Comment = styled
  .article`border-inline: 0.5px double ${({ theme: { colors } }) => colors.primary};
  color: white;
  margin: 25px;
  padding: 25px;
  text-align: justify;
`;
