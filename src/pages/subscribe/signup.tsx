import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Modal, Space } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

import SVGComponent from "./svg";

const Signup = () => {
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");

  const onFinish = async (values: any) => {
    try {
      // Send a POST request to the API endpoint with the form data
      const response = await fetch(
        "https://datastore-mongo-back.onrender.com/api/app-data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        console.log("Data submitted successfully!");
        form.resetFields();
        setModalText("Successful subscription");
        setModalVisible(true);
      } else {
        console.error("Failed to submit data:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleModalOk = () => {
    form.resetFields();
    setModalVisible(false);
    window.location.reload();
    // window.location.href = "https://www.instagram.com/";
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={8}>
        <Space direction="horizontal" align="center" style={{ width: "100%" }}>
          <SVGComponent></SVGComponent>
        </Space>
        <div style={{ textAlign: "center" }}>
          <Form
            name="signup"
            onFinish={onFinish}
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input your Name!" }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Name" />
            </Form.Item>
            <Form.Item
              name="familyname"
              rules={[
                { required: true, message: "Please input your Family name!" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Family Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>
            {/* <Form.Item
              name="phoneNumber"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
            </Form.Item> */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%", backgroundColor: "rgb(193, 0, 22)" }}
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
      <Modal
        title="Subscription Successful"
        visible={modalVisible}
        confirmLoading={confirmLoading}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </Row>
  );
};

export default Signup;
