import { useNavigate } from 'react-router-dom';
import { LeftOutlined, HomeOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import React from 'react'

const BackFloatButton = () => {
  const navigate = useNavigate();

  function handleUseHistory() {
    navigate(-1);
  }

  function handleUseHome() {
    navigate('/');
  }

  return (
    <FloatButton.Group shape="circle" style={{ right: 45 }}>
      <FloatButton onClick={handleUseHistory} icon={<LeftOutlined />} type="primary" />
      <FloatButton onClick={handleUseHome} icon={<HomeOutlined />} type="default" />
    </FloatButton.Group>
  )
}

export default BackFloatButton
