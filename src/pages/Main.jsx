import List from "../components/Main/List";
import styled from "styled-components";
import Header from "../components/Main/Header";

function Main() {
  return (
    <WEB>
      <Header />
      <List />
    </WEB>
  );
}

const WEB = styled.div`
  width: 100%;
  height: 1500px;
  background-color: #eaeef6;
  overflow: auto;
`;

export default Main;
