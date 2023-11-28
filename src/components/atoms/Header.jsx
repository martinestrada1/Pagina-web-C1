
import React from 'react';
import database from '../../store/database';

function Header() {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
  <img src={database.logo} alt="Logo tipo cenaduria" style={logoImageStyle} />
</div>
<div style={titleStyle}>
  <h1>{database.title}</h1>
</div>

    </header>
  );
}

const headerStyle = {
  backgroundColor: '#D2B48C',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '80px',
  padding: '0 20px',
};

const logoStyle = {};

const logoImageStyle = {
  width: '50px',
  height: 'auto',
};
const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'black',
  marginLeft: 'auto',
  marginRight: 'auto',
};
export default Header;