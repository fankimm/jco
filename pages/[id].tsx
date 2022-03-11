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
const Id = () => {
  const [requestData, setRequestData] = useState([
    { name: "", code: "", description: "" },
  ]);
  const [responseData, setResponseData] = useState([
    { name: "", code: "", description: "" },
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
    setRequestData([...requestData, { name: "", code: "", description: "" }]);
  };
  const handleRequestMinus = () => {
    if (requestData && requestData.length > 1) {
      setRequestData([...requestData.slice(0, -1)]);
    }
  };
  const handleResponsePlus = () => {
    setResponseData([...responseData, { name: "", code: "", description: "" }]);
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
              <Space direction="vertical">
                <Form.Item name="manager">
                  <Input placeholder="담당자" />
                </Form.Item>
                <Form.Item name="managerContact">
                  <Input placeholder="연락처" />
                </Form.Item>
                <Form.Item name="stgUrl">
                  <Input placeholder="STAGE URI" />
                </Form.Item>
                <Form.Item name="prdUrl">
                  <Input placeholder="PRODUCTION URI" />
                </Form.Item>
              </Space>
              <div style={{ width: "300px", margin: "auto" }}>
                <Form.Item name="title">
                  <Input placeholder="TITLE" />
                </Form.Item>
                <Form.Item>
                  <Input.TextArea placeholder="JCO DESCRIPTION" />
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
                    <Form.Item name="from">
                      <Select
                        placeholder="CONSUMER"
                        style={{ width: "120px" }}
                        options={destination}
                      />
                    </Form.Item>
                    <Form.Item>
                      <ArrowRightOutlined />
                    </Form.Item>
                    <Form.Item name="to">
                      <Select
                        placeholder="PROVIDER"
                        style={{ width: "120px" }}
                        options={destination}
                      />
                    </Form.Item>
                  </Space>
                </div>
              </div>
            </Space>
            <Divider />
            <Space direction="horizontal" align="start">
              <Space direction="vertical">
                <Space direction="horizontal" align="start">
                  <h4>CONSUMER</h4>
                  <div>
                    <Button
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
                    </Button>
                  </div>
                  <Form.Item name="consumerManager">
                    <Input placeholder="담당자" />
                  </Form.Item>
                  <Form.Item name="consumerManagerContact">
                    <Input placeholder="연락처" />
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
              <Space direction="vertical">
                <Space direction="horizontal" align="start">
                  <h4>PROVIDER</h4>
                  <div>
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
                  </div>
                  <Form.Item name="providerManager">
                    <Input placeholder="담당자" />
                  </Form.Item>
                  <Form.Item name="providerManagerContact">
                    <Input placeholder="연락처" />
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
            저장하기
          </button>
        </Space>
      </div>
    </>
  );
};

export default Id;
