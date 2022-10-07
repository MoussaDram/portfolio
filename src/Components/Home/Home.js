import React from 'react';
import videoBg from '../../assets/videoBg.mp4'
import profilepicture from '../../assets/mnpp.jpg'

function Home() {
  return (
    <div className="main ">
      <div className='overlay'></div>
      <video src={videoBg} autoPlay loop muted/>

      <div className='content'>
        <img src={profilepicture}></img>
        <h1>Welcome to portfolio</h1>
        <p>This my best creativity</p>
      </div>
    </div>
  );
}

export default Home;
