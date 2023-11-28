import React from 'react';
import database from '../../store/database';

function InfoWithImage() {
    const info = database.infoWithImage;
  
    return (
      <div style={containerStyle}>
        <div style={contentContainerStyle}>
          <div style={textContainerStyle}>
            <h2 style={h2}>{info.title}</h2>
            {info.text.map((paragraph, index) => (
              <p key={index} style={textStyle}>
                {paragraph}
              </p>
            ))}
          </div>
          <div style={imageContainerStyle}>
            <img src={info.imageUrl} alt={info.altText} style={imageContentStyle} />
          </div>
        </div>
      </div>
    );
  }
  
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
  height: '100vh', 
};

const contentContainerStyle = {
  display: 'flex',
  maxWidth: '1200px', 
  width: '100%', 
  padding: '20px',
  backgroundColor: '#F6DDCC',
  textAlign: 'center',
};

const textContainerStyle = {
  flex: 1,
  padding: '20px',
  textAlign: 'center',
};

const imageContainerStyle = {
  flex: 1,
  padding: '20px',
  textAlign: 'center',
};

const imageContentStyle = {
  maxWidth: '100%', 
  height: 'auto',
};

const textStyle = {
  textAlign: 'justify',
  fontSize: '18px',
};

const h2 = {
  fontSize: '24px',
};

export default InfoWithImage;