import type { NextPage } from "next";
import { Input, Form, Select, Table, Space, Divider, Button } from "antd";
import {
  ArrowRightOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { useState, useCallback } from "react";
const Home: NextPage = () => {
  const [requestData, setRequestData] = useState([
    { name: "", code: "", description: "" },
  ]);
  const [responseData, setResponseData] = useState([
    { name: "", code: "", description: "" },
  ]);
  const [form] = Form.useForm();
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
      render: () => <Input />,
    },
    {
      title: "code",
      dataIndex: "code",
      key: "code",
      render: () => <Input />,
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
      render: () => <Input />,
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
          width: 1080,
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
            <div style={{ width: "300px", margin: "auto" }}>
              <Form.Item name="title">
                <Input placeholder="TITLE" />
              </Form.Item>
              <Form.Item name="url">
                <Input placeholder="URL" />
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
                      placeholder="REQUEST"
                      style={{ width: "120px" }}
                      options={destination}
                    />
                  </Form.Item>
                  <Form.Item>
                    <ArrowRightOutlined />
                  </Form.Item>
                  <Form.Item name="to">
                    <Select
                      placeholder="RESPONSE"
                      style={{ width: "120px" }}
                      options={destination}
                    />
                  </Form.Item>
                </Space>
              </div>
            </div>
            <Divider />
            <Space direction="horizontal" align="start">
              <Space direction="vertical">
                <Space direction="horizontal">
                  <h4>REQUEST</h4>
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
                </Space>
                <Table
                  columns={columns}
                  dataSource={requestData}
                  pagination={false}
                  size="small"
                />
              </Space>
              <Space direction="vertical">
                <Space direction="horizontal">
                  <h4>RESPONSE</h4>
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
        </Space>
      </div>
    </>
  );
};

export default Home;
