import styled from 'styled-components';

const WIDTH_BREAK = '700px';

// fundo geral/externo do site
const StyledFlex = styled.div`
  display: flex;
`;

const StyledImage = styled.div`
  background-image: url('${(props) => props.image}');
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 100vh;

  @media (max-width: ${WIDTH_BREAK}) {
    display: none;
  }
`;

//todo conteudo interno da pagina
const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.back};
  padding: 30px 50px;

  @media (min-width: ${WIDTH_BREAK}) {
    min-width: calc(${WIDTH_BREAK} - 100px);
  }

  @media (max-width: ${WIDTH_BREAK}) {
    min-width: 100%;
  }

  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  overflow-y: auto;

  &:before,
  &:after {
    content: '';
    margin: auto;
  }
`;

//Component JSX:

function ImageWithSpace({ children, image }) {
  return (
    <StyledFlex>
      <StyledImage image={image} />
      <StyledContainer>{children}</StyledContainer>
    </StyledFlex>
  );
}

ImageWithSpace.defaultProps = {
  image: '/body-bg-img.png',
};

export default ImageWithSpace;
