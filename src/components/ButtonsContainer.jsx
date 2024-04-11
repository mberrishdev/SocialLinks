import styled from "styled-components";

export default function ButtonsContainer({ children }) {
  return <Button>{children} </Button>;
}

const Button = styled.button`
  height: 4rem;
  width: 30rem;
  border-radius: 0.5rem;
  border: none;
  background-color: hsl(0, 0%, 20%);
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: hsl(75, 94%, 57%);
    color: hsl(0, 0%, 12%);
  }

  @media screen and (max-width: 385px) {
    width: 25rem;
  }
`;
