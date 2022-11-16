import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

export default function InflowPage() {
  return (
    <Container>
      <Title>
        <h1>Nova entrada</h1>
      </Title>
      <form>
        <Input type="text "placeholder="Valor" required/>
        <Input type="text "placeholder="Descrição" required/>
      </form>
      <Button>Salvar entrada</Button>
    </Container>
  );
}

const Container = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: #8c16be;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 21px;
  form {
    width: 100%;
  }
  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    color: #ffffff;
  }
`;
const Title = styled.h1`
  width:100%;
  margin-bottom: 40px;
`