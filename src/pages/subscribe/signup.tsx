import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Modal } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

const Signup = () => {
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");

  const onFinish = async (values: any) => {
    try {
      // Send a POST request to the API endpoint with the form data
      const response = await fetch("http://localhost:3000/api/app-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

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
    setModalVisible(false);
    window.location.href = "https://www.instagram.com/";
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={8}>
        <Form
          name="signup"
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="firstName"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Last Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Sign Up
            </Button>
          </Form.Item>
        </Form>
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
