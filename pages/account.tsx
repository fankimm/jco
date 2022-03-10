import { Space, Input, Divider, Button, Modal } from "antd";
import { useState } from "react";
const Account = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <div style={{ width: "1172px", margin: "auto", textAlign: "center" }}>
        <Space direction="vertical">
          <h1>JCO ID 생성</h1>
          <Space direction="horizontal">
            <Input placeholder="성" />
            <Input placeholder="이름" />
          </Space>
          <Input placeholder="yyyymmdd" />
          <Divider />
          <Input placeholder="email" />
          <Input.Password placeholder="암호" />
          <Input.Password placeholder="암호 확인" />
          <Divider />
          <h4>휴대전화번호</h4>
          <Input placeholder="010011112222" />
          <Divider />
          <Button
            size="large"
            style={{ width: "100%" }}
            onClick={() => {
              setModalVisible(true);
            }}
          >
            다음
          </Button>
        </Space>
      </div>
      <Modal
        visible={modalVisible}
        onOk={() => {
          setModalVisible(false);
        }}
        onCancel={() => setModalVisible(false)}
      >
        <h4>가입하신 email로 전송된 6자리 숫자를 입력해주세요.</h4>
        <Space direction="horizontal">
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
        </Space>
      </Modal>
    </>
  );
};
export default Account;
