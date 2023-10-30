import React from 'react'
import { SHOP_ITEMS } from '../../Items';
import { Row } from 'antd';
import GridCard from '../Commons/GridCard';
import { useParams } from 'react-router';
import BackFloatButton from '../BackFloatButton/BackFloatButton';

const ListType = () => {
  const { itemType } = useParams();

  return (
    <div style={{ width: '85%', margin: '20px auto' }}>
      <Row gutter={[10, 10]}>
        {SHOP_ITEMS && SHOP_ITEMS.map((item, index) => {
          if (itemType === item.type) {
            return (
              <React.Fragment key={index}>
                <GridCard
                  id={item.id}
                  name={item.name}
                  path={item.path}
                  price={item.price}
                />
              </React.Fragment>
            );
          }
          return null;
        })}
      </Row>
      <BackFloatButton />
    </div>
  )
}

export default ListType
