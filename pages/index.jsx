import styled from 'styled-components';
import Navbar from '../src/components/layout/Navabar';
import Container from '../src/components/layout/Container';
import CreatePost from './../src/components/cards/CreatePost';

const Content = styled.div`
  margin: 50px 0;
`;

function HomePage() {
  return (
    <>
      <Navbar />
      <Content>
        <Container>
          <CreatePost />
        </Container>
      </Content>
    </>
  );
}

export default HomePage;
