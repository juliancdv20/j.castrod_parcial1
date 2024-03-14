import React from 'react';

function Home(){
return (
    <div >
    <img src={'https://picsum.photos/150'}/>
        <h1></h1>
<div onClick={() => handleClick(img)}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
      <img src={'https://picsum.photos/350'}/>
      <img src={'https://picsum.photos/350'}/>
      <img src={'https://picsum.photos/350'}/>
      <img src={'https://picsum.photos/350'}/>
      <img src={'https://picsum.photos/350'}/>
      <img src={'https://picsum.photos/350'}/>
      <img src={'https://picsum.photos/350'}/>
      <img src={'https://picsum.photos/350'}/>
      <img src={'https://picsum.photos/350'}/>
      </div>
      </div>
      </div>
  )
};
export default Home;