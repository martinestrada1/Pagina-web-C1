import React from 'react';
import database from '../../store/database';


function VideoSection() {
    const videoInfo = database.videoSection;

    return (
      <div style={videoContainerStyle}>
        <video autoPlay loop muted playsInline style={videoStyle}>
          <source src={videoInfo.videoUrl} type={videoInfo.videoType} />

        </video>
        <div style={overlayStyle}></div>
        <h2 style={videoTitleStyle}>{videoInfo.videoTitle}</h2>
      </div>
    );
    
}


const videoContainerStyle = {
  position: 'relative',
  textAlign: 'center',
  overflow: 'hidden',
  height: '50vh', 
};

const videoStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const videoTitleStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '24px',
  color: 'white',
};

export default VideoSection;