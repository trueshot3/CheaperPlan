import React from 'react'
import { SHOP_ITEMS } from '../../Items';
import { Row } from 'antd';
import GridCard from '../Commons/GridCard';

function LandingPage() {

  return (
    <div style={{ width: '85%', margin: '20px auto' }}>
      <Row gutter={[10, 10]}>
        {SHOP_ITEMS && SHOP_ITEMS.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <GridCard
                id={item.id}
                name={item.name}
                path={item.path}
                price={item.price}
              />
            </React.Fragment>);
        })}
      </Row>
    </div>
  )
}

export default LandingPage
