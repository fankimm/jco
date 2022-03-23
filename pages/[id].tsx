import styles from "/styles/main.module.css";
import {
  Input,
  Form,
  Select,
  Table,
  Space,
  Divider,
  Button,
  InputNumber,
} from "antd";
import {
  ArrowRightOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { useState, useCallback } from "react";
interface IData {
  name: string;
  code: string;
  type: string;
  size: string;
  description: string;
}
const Id = () => {
  const test = "hello"
  const [requestData, setRequestData] = useState<IData[]>([
    {
      name: "수량",
      code: "quantity",
      type: "number",
      size: "10",
      description: "",
    },
    {
      name: "상품명",
      code: "productCode",
      description: "",
      type: "string",
      size: "10",
    },
    { name: "날짜", code: "date", description: "", type: "string", size: "10" },
    {
      name: "차시",
      code: "onwerSendFlag",
      description: "",
      type: "number",
      size: "10",
    },
  ]);
  const [responseData, setResponseData] = useState<IData[]>([
    {
      name: "수량",
      code: "quantity",
      type: "number",
      size: "10",
      description: "",
    },
    {
      name: "상품명",
      code: "productCode",
      description: "",
      type: "string",
      size: "10",
    },
    { name: "날짜", code: "date", description: "", type: "string", size: "10" },
    {
      name: "차시",
      code: "onwerSendFlag",
      description: "",
      type: "number",
      size: "10",
    },
  ]);
  const [form] = Form.useForm();
  const typeOptions = [
    { label: "STRING", value: "string" },
    { label: "CHAR", value: "char" },
    { label: "NUMBER", value: "number" },
    { label: "BOOLEAN", value: "boolean" },
    { label: "ARRAY", value: "array" },
  ];
  const destination = [
    { label: "WMS", value: "wms" },
    { label: "JCO", value: "jco" },
    { label: "SAP", value: "sap" },
  ];
  const columns = [
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "size",
      dataIndex: "size",
      key: "size",
    },

    {
      title: "description",
      dataIndex: "description",
      key: "description",
    },
  ];
  const handleRequestPlus = () => {
    setRequestData([
      ...requestData,
      { name: "", code: "", description: "", type: "", size: "" },
    ]);
  };
  const handleRequestMinus = () => {
    if (requestData && requestData.length > 1) {
      setRequestData([...requestData.slice(0, -1)]);
    }
  };
  const handleResponsePlus = () => {
    setResponseData([
      ...responseData,
      { name: "", code: "", description: "", type: "", size: "" },
    ]);
  };
  const handleResponseMinus = useCallback(() => {
    console.log(responseData.length);
    if (responseData && responseData.length > 1) {
      setResponseData([...responseData.slice(0, -1)]);
    }
  }, [responseData]);
  return (
    <>
      <div
        style={{
          // display: "flex",
          width: 1440,
          display: "flex",
          justifyContent: "center",
          borderRadius: "10px",
          padding: "10px",
          margin: "auto",
        }}
      >
        <Space direction="vertical" align="center">
          <h1 style={{ marginBottom: "20px" }}>JCO</h1>
          <Form form={form}>
            <Space
              direction="horizontal"
              align="start"
              style={{
                margin: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Space
                direction="vertical"
                style={{
                  width: "500px",
                  paddingRight: "30px",
                }}
              >
                <h5>담당자</h5>
                <Form.Item name="manager">
                  <Input placeholder="담당자" defaultValue="진창수" />
                </Form.Item>
                <h5>연락처</h5>
                <Form.Item name="managerContact">
                  <Input placeholder="연락처" defaultValue="01012341234" />
                </Form.Item>
                <h5>STAGE</h5>
                <Form.Item name="stgUrl">
                  <Input
                    placeholder="STAGE URI"
                    defaultValue="wms00-ui.sta.kolonfnc.com/manage"
                  />
                </Form.Item>
                <h5>운영</h5>
                <Form.Item name="prdUrl">
                  <Input
                    placeholder="PRODUCTION URI"
                    defaultValue="wms.kolonfnc.com/manage"
                  />
                </Form.Item>
              </Space>
              <div style={{ width: "500px", margin: "auto" }}>
                <h5>제목</h5>
                <Form.Item name="title">
                  <Input placeholder="TITLE" defaultValue="JCo Test Title" />
                </Form.Item>
                <h5>설명</h5>
                <Form.Item>
                  <Input.TextArea
                    placeholder="JCO DESCRIPTION"
                    defaultValue="테스트용 게시물 입니다."
                  />
                </Form.Item>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                  }}
                >
                  <Space direction="horizontal" align="center">
                    <div>
                      <h5>CONSUMER</h5>
                      <Form.Item name="from" initialValue="wms">
                        <Select
                          placeholder="CONSUMER"
                          style={{ width: "120px" }}
                          options={destination}
                        />
                      </Form.Item>
                    </div>
                    <Form.Item>
                      <ArrowRightOutlined />
                    </Form.Item>
                    <div>
                      <h5>PROVIDER</h5>
                      <Form.Item name="to" initialValue="jco">
                        <Select
                          placeholder="PROVIDER"
                          style={{ width: "120px" }}
                          options={destination}
                        />
                      </Form.Item>
                    </div>
                  </Space>
                </div>
              </div>
            </Space>
            <Space direction="horizontal" align="start">
              <Space
                direction="vertical"
                style={{
                  borderRight: "1px solid lightGrey",
                  paddingRight: "30px",
                  marginRight: "20px",
                }}
              >
                <Space direction="horizontal" align="start">
                  <h4>CONSUMER</h4>
                  <div>
                    {/* <Button
                      style={{ border: "0px" }}
                      onClick={handleRequestPlus}
                    >
                      <PlusCircleOutlined />
                    </Button>
                    <Button
                      style={{ border: "0px" }}
                      onClick={handleRequestMinus}
                    >
                      <MinusCircleOutlined />
                    </Button> */}
                  </div>
                  <Form.Item name="consumerManager">
                    <Input placeholder="담당자" defaultValue="김지환" />
                  </Form.Item>
                  <Form.Item name="consumerManagerContact">
                    <Input placeholder="연락처" defaultValue="01097312406" />
                  </Form.Item>
                </Space>
                <Table
                  style={{ background: "black" }}
                  columns={columns}
                  dataSource={requestData}
                  pagination={false}
                  size="small"
                />
              </Space>
              {/* <div
                style={{
                  margin: "20px",
                  width: "1px",
                  height: "250px",
                  background: "lightGrey",
                }}
              >
                {` `}
              </div> */}
              <Space direction="vertical">
                <Space direction="horizontal" align="start">
                  <h4>PROVIDER</h4>
                  {/* <div>
                    <Button
                      style={{ border: "0px" }}
                      onClick={handleResponsePlus}
                    >
                      <PlusCircleOutlined />
                    </Button>
                    <Button
                      style={{ border: "0px" }}
                      onClick={handleResponseMinus}
                    >
                      <MinusCircleOutlined />
                    </Button>
                  </div> */}
                  <Form.Item name="providerManager">
                    <Input placeholder="담당자" defaultValue="박진수" />
                  </Form.Item>
                  <Form.Item name="providerManagerContact">
                    <Input placeholder="연락처" defaultValue="01012341234" />
                  </Form.Item>
                </Space>
                <Table
                  columns={columns}
                  dataSource={responseData}
                  pagination={false}
                  size="small"
                />
              </Space>
            </Space>
          </Form>
          <button className={styles.saveButton}>
            <SaveOutlined style={{ marginRight: "10px" }} />
            수정하기
          </button>
        </Space>
      </div>
    </>
  );
};

export default Id;
