import React from 'react';
import { Col } from 'antd';
import { Card } from 'antd';

const GridCard = (props) => {
  const { Meta } = Card;

  return (
    <Col xs={24} sm={12} md={8} lg={6}>
      <a href={`/item/${props.id}`}>
        <Card
          hoverable
          style={{
            width: '100%',
          }}
          cover={<img alt={props.name} src={props.path} />}
        >
          <Meta title={props.name} description={`${props.price}원`} />
        </Card>
      </a>
    </Col>
  )
}

export default GridCard
