import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: '번호',
    dataIndex: 'idx',
    key: 'idx',
    width: '10%'
  },
  {
    title: '제목',
    dataIndex: 'title',
    key: 'title',
    width: '70%'
  },
  {
    title: '작성일',
    dataIndex: 'date',
    key: 'date',
    width: '20%'
  },
];

const data = [
  {
    key: '3',
    idx: 3,
    title: '2023/10/31 점검 안내',
    date: '2023/10/30',
    description: '2023/10/31 09:30 ~ 18:30\n점검 시간입니다.'
  },
  {
    key: '2',
    idx: 2,
    title: '2023/10/24 점검 안내',
    date: '2023/10/23',
    description: '2023/10/24 09:30 ~ 18:30\n점검 시간입니다.'
  },
  {
    key: '1',
    idx: 1,
    title: '2023/10/17 점검 안내',
    date: '2023/10/16',
    description: '2023/10/17 09:30 ~ 18:30\n점검 시간입니다.'
  },
];

const Notice = () => {
  return (
    <div style={{ width: '85%', margin: '30px auto' }}>
      <h1>공지사항</h1>
      <Table columns={columns} dataSource={data} style={{ marginTop: '20px' }} expandable={{
        expandedRowRender: (record) => (
          <p
            style={{
              margin: 0,
              textAlign: 'center',
              whiteSpace: 'pre-wrap'
            }}
          >
            {record.description}
          </p>
        ),
        expandRowByClick: true
      }} />
    </div>
  )
}

export default Notice
