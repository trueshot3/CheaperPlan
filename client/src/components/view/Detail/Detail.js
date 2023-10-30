import React, { useState } from 'react'
import { Image, Descriptions, Button, Select, InputNumber } from 'antd';
import { useParams } from 'react-router-dom';
import { SHOP_ITEMS } from '../../Items';
import BackFloatButton from '../BackFloatButton/BackFloatButton';

const Detail = () => {
  const { itemId } = useParams();
  const currentItem = SHOP_ITEMS[itemId - 1];
  const [QuantityVisible, setQuantityVisible] = useState(false)
  const [SelectedItem, setSelectedItem] = useState({
    itemId: currentItem.id,
    size: currentItem.size[0],
    quantity: 1,
    price: currentItem.price
  });

  const sizeChange = (value) => {
    let item = SelectedItem;
    item.size = value;
    setSelectedItem(item);
    setQuantityVisible(true);
  };

  const quantityChange = (value) => {
    let item = SelectedItem;
    item.quantity = value;
    setSelectedItem(item);
  };

  const descItems = [
    {
      key: '1',
      label: '상품번호',
      children: `${currentItem.id}`,
      span: 3
    },
    {
      key: '2',
      label: '상품명',
      children: `${currentItem.name}`,
      span: 3
    },
    {
      key: '3',
      label: '가격',
      children: `${currentItem.price}원`,
      span: 3
    },
    {
      key: '4',
      label: '카테고리',
      children: `${currentItem.type}`,
      span: 3
    },
    {
      key: '5',
      label: '사이즈',
      children: `${currentItem.size}`,
      span: 3
    },
  ];

  return (
    <div style={{
      width: '80%',
      margin: '2rem auto',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Image
        width={500}
        src={currentItem.path}
        preview={false}
      />
      <div style={{ width: '500px', margin: '20px 30px' }} >
        <Descriptions title="상품 정보" bordered items={descItems} />
        <Select
          defaultValue="사이즈 선택"
          style={{
            width: '100%',
            marginTop: '20px'
          }}
          onChange={sizeChange}
          options={currentItem.size.map((size) => {
            return {
              value: size,
              label: size,
            };
          })}
        />
        {QuantityVisible &&
          <InputNumber min={1} max={10} defaultValue={1} onChange={quantityChange} style={{ display: 'flex', marginTop: '20px', width: '25%' }} />}
        <Button style={{ width: '50%', height: '40px', margin: '20px 0' }}>장바구니</Button>
        <Button type="primary" style={{ width: '50%', height: '40px' }}>구매하기</Button>
      </div>
      <BackFloatButton />
    </div>
  )
}

export default Detail
