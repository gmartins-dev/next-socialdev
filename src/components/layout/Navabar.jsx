import styled from 'styled-components';
import axios from 'axios';
import { useRouter } from 'next/router';

const StyledNavbar = styled.div`
  background-color: ${(props) => props.theme.white};
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 100px;

  @media (max-width: 500px) {
    padding: 0 20px;
  }
`;

const StyledLogo = styled.span`
  flex: 1;
  font-weight: bold;
  font-size: 20px;
`;

const StyledLogout = styled.a`
  cursor: pointer;
`;

function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/logout`,
    );
    router.push('/');
  };

  return (
    <StyledNavbar>
      <StyledLogo>🎶Social Spot</StyledLogo>
      <div>
        <StyledLogout onClick={handleLogout}>
          Desconectar
        </StyledLogout>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
