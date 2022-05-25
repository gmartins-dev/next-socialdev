import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  padding: 15px 20px;
  border-radius: 10px;
  border: 0;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  transition: 0.3s;
  cursor: pointer;

  :hover {
    background-color: ${(props) =>
      props.theme.primaryHover};
  }
`;

export default Button;
