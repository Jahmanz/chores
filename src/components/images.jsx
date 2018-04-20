import React from 'react';
import scenic from '../assets/images/scenic.jpg';
import scenic1 from '../assets/images/scenic1.jpg';
import scenic2 from '../assets/images/scenic2.jpeg';
import scenic3 from '../assets/images/scenic3.jpeg';


function ImageComponent(){
  return (
    <div>
      <img src={scenic}
        height={400}
        width={400}/>
      <img src={scenic1}
        height={400}
        width={400}/>
      <img src={scenic2}
        height={400}
        width={400}/>
      <img src={scenic3}
        height={400}
        width={400}/>
    </div>
  );
}

export default ImageComponent;
