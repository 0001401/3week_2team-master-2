import List from "../MainComponent/List";
import styled from "styled-components";
import Header from "../MainComponent/Header";

function Web() {
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

export default Web;
