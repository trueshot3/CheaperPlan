import React from 'react';
import { Button, Checkbox, Form, Input, Image } from 'antd';
import { LOGO_SMALL } from '../../Items';
import BackFloatButton from '../BackFloatButton/BackFloatButton';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Login = () => {
  return (
    <div style={{ width: '100%', display: 'grid', justifyContent: 'center', margin: '40px 0' }}>
      <Image
        width='100%'
        src={LOGO_SMALL}
        preview={false}
        style={{ marginBottom: '20px' }}
      />
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="아이디"
          name="username"
          rules={[
            {
              required: true,
              message: '아이디를 입력하세요!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="비밀번호"
          name="password"
          rules={[
            {
              required: true,
              message: '비밀번호를 입력하세요!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>로그인 상태 유지</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" style={{ width: '50%' }}>
            로그인
          </Button>
          <Button type="default" href='/signup' style={{ width: '50%' }}>
            회원가입
          </Button>
        </Form.Item>
      </Form>
      <BackFloatButton />
    </div>
  );
}

export default Login
