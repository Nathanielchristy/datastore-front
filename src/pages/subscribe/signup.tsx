import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Space } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

import SVGComponent from "./svg";

const Signup = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    try {
      setLoading(true); // Set loading to true while waiting for response
      // Send a POST request to the API endpoint with the form data
      const response = await fetch(
        "https://service.datesgcc.com/api/app-data",
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
        // You can handle success here if needed
      } else {
        console.error("Failed to submit data:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      setLoading(false); // Reset loading state regardless of success or failure
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={8}>
        <Space direction="vertical" align="center" style={{ width: "100%" }}>
          <SVGComponent></SVGComponent>

          <Form
            name="signup"
            form={form}
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
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%", backgroundColor: "rgb(193, 0, 22)" }}
                loading={loading} // Set loading state for the button
              >
                Receive Your Picture
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </Col>
    </Row>
  );
};

export default Signup;
