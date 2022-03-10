import { Divider } from "antd";
const Footer = () => {
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <Divider />
        <div
          style={{
            width: "1172px",
            margin: "auto",
            marginTop: "50px",
            fontSize: "11px",
            color: "GrayText",
            textAlign: "center",
          }}
        >
          <p>Copyright © 2022 PurpleIO Inc. 모든 권리 보유.</p>
          <p>
            사업자등록번호 : 111-11-11111 | 주소 : 서울특별시 강남구 테헤란로
            501 브이플렉스 17층 퍼플아이오
          </p>
          <img width="105px" src="./original_logo.png" />
        </div>
      </div>
    </>
  );
};
export default Footer;
