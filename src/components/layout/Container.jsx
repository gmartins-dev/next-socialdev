import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 700px) {
    padding: 10px;
  }
`;

const StyledChildren = styled.div`
  max-width: 700px;
  width: 100%;
`;

function Container({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  );
}

export default Container;
