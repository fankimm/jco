import { Input, Checkbox, Space, Button } from "antd";
import { useRouter } from "next/router";
const Login = () => {
  const router = useRouter();
  return (
    <>
      <div
        style={{
          width: "500px",
          display: "flex",
          flexWrap: "wrap",
          marginTop: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Space
          direction="vertical"
          style={{ textAlign: "center", margin: "auto" }}
        >
          <img
            src="./logo.png"
            width="150px"
            style={{ marginBottom: "10px" }}
          />
          <h1 style={{ margin: "20px" }}>JCO 서비스에 로그인 하세요</h1>
          <Input style={{ margin: "5px" }} placeholder="ID" />
          <Input.Password style={{ margin: "5px" }} placeholder="암호" />
          <Space
            direction="horizontal"
            style={{ textAlign: "center", marginBottom: "10px" }}
          >
            <Checkbox />
            <div>아이디 저장</div>
          </Space>

          <Button size="large" style={{ width: "100%" }}>
            로그인
          </Button>
          <a
            onClick={() => {
              router.push("/account");
            }}
          >
            회원가입
          </a>
        </Space>
      </div>
    </>
  );
};

export default Login;
