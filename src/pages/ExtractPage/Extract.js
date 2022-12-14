import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import api from "../../services/api";
import { TiDeleteOutline } from "react-icons/ti";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";

export default function Extract({
  date,
  type,
  price,
  event,
  id,
  setUpdate,
  update,
}) {
  const [color, setColor] = useState();
  const [isLoading, setIsloading] = useState(false);
  const { userInfos } = useContext(UserContext);

  const navigate = useNavigate();

  function goToEditScreen(type, id) {
    if (type === "positive") {
      navigate("/edit/inflow", { state: id });
    } else if (type === "negative") {
      navigate("/edit/outflow", { state: id });
    }
  }

  useEffect(() => {
    if (type === "negative") {
      setColor("#C70000");
    } else if (type === "positive") {
      setColor("#03AC00");
    }
  }, []);

  async function removeExtract(id) {
    const continueDeletion = window.confirm("Deseja deletar o extrato?");
    if (continueDeletion) {
      setIsloading(true);
      try {
        await api.deleteExtract(userInfos.token, id);
        setUpdate(!update);
        setIsloading(false);
      } catch (err) {
        setIsloading(false);
      }
    }
  }

  return (
    <Container>
      <Left>
        <Day>{date}</Day>
        <Description onClick={() => goToEditScreen(type, id)}>
          {event}
        </Description>
      </Left>
      <Right>
        <Price color={color}>
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Price>
        {isLoading ? (
          <Loading size={10} color={"gray"} />
        ) : (
          <TiDeleteOutline onClick={() => removeExtract(id)} />
        )}
      </Right>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const Day = styled.div`
  color: #c6c6c6;
  margin-right: 12px;
`;

const Description = styled.div`
  color: #000000;
  height: auto;
  word-break: break-word;
  line-height: 20px;
  letter-spacing: 1px;
`;

const Price = styled.div`
  color: ${(props) => props.color};
  margin: 0 10px;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: #c6c6c6;
  }
`;
