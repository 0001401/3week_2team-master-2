//메뉴바, 리스트가 포함되어 있는 페이지입니다
import styled from "styled-components";
import { FiHome, FiFolder, FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <Box>
        <Icon
          onClick={() => {
            navigate("/");
          }}
        />
        <Icon4
          onClick={() => {
            navigate("/write");
          }}
        />
        <Icon3 />
      </Box>
    </div>
  );
}

const Icon4 = styled(FiEdit)`
  font-size: 30px;
  color: #6a778e;
  margin: 0 auto;
  width: 80px;
  margin-top: 30px;
`;

const Icon3 = styled(FiFolder)`
  font-size: 30px;
  color: #6a778e;
  margin: 0 auto;
  width: 80px;
  margin-top: 30px;
`;

const Icon = styled(FiHome)`
  font-size: 30px;
  color: #6a778e;
  margin: 0 auto;
  width: 80px;
  margin-top: 40px;
`;

const Box = styled.div`
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.03);
  background-color: #fff;
  width: 80px;
  height: 240px;
  position: fixed;
  right: 15px;
  top: 15px;
  margin-top: 20px;
  border-radius: 10px;
`;

export default Header;
