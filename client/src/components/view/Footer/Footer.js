import React from 'react';
import { LOGO_LETTER } from '../../Items';

function Footer() {
  return (
    <div style={{
      height: '80px',
      fontSize: '1rem',
      display: 'grid',
      alignContent: 'center',
      justifyItems: 'center',
      backgroundColor: '#001529',
      color: '#FFFFFF',
      marginTop: '20px',
    }}>
      <div><img alt="CHEAPER PLAN" src={LOGO_LETTER} /></div>
    </div>
  )
}

export default Footer
