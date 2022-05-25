import styled from 'styled-components';

const StyledNavbar = styled.div`
  background-color: ${(props) => props.theme.white};
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 100px;
`;

const StyledLogo = styled.span`
  flex: 1;
  font-weight: bold;
  font-size: 20px;
`;

function Navbar() {
  return (
    <StyledNavbar>
      <StyledLogo># Social Dev</StyledLogo>
      <div>
        <a href="#">Desconectar</a>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
