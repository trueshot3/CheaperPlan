import React from 'react';
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Radio,
} from 'antd';
import BackFloatButton from '../BackFloatButton/BackFloatButton';

const options = [
  {
    label: '이메일',
    value: 'email',
  },
  {
    label: '문자',
    value: 'sms',
  },
];

const onCheck = (checkedValue) => {
  console.log(checkedValue);
}

const SignUp = () => {
  return (
    <div style={{ display: 'grid', justifyContent: 'center', margin: '40px 0' }}>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 24,
        }}
        layout="vertical"
        style={{
          maxWidth: 600,
          width: '400px'
        }}
      >
        <Form.Item label="아이디" name='username'>
          <Input />
        </Form.Item>
        <Form.Item label="비밀번호" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item label="이메일" name='usermail'>
          <Input />
        </Form.Item>
        <Form.Item label="휴대전화번호" name='phone'>
          <Input />
        </Form.Item>
        <Form.Item label="생년월일" name='birthdate'>
          <DatePicker />
        </Form.Item>
        <Form.Item label="성별" name='gender'>
          <Radio.Group>
            <Radio value="male"> 남자 </Radio>
            <Radio value="female"> 여자 </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="정보 수신 동의" name="mailcheck" valuePropName="checked">
          <Checkbox.Group options={options} onChange={onCheck} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 10, span: 24 }}>
          <Button type="primary" htmlType="submit">
            완료
          </Button>
        </Form.Item>
      </Form>
      <BackFloatButton />
    </div>
  );
};

export default SignUp
