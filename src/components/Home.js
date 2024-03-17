import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  user[0].username=user[0].username.toLowerCase();
  useEffect(() => {
    fetch('https://65f2fc7d105614e6549f7b15.mockapi.io/login/login')
      .then(response => response.json())
      .then(data => {
        setUser(data);
        fetchPosts();
      });
  }, []);


  const fetchPosts = () => {
    const promises = [];
    for (let i = 0; i < 12; i++) {
      promises.push(fetch('https://picsum.photos/350'));
    }
    Promise.all(promises).then(responses => {
      const posts = responses.map(response => response.url);
      setPosts(posts);
    });
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <img          className="profile-picture"
          src={`https://picsum.photos/150`}
          alt="profile"
        />
        <div className="profile-info">
          <p id="usuario">{user[0].username}</p>
          <p id="descripcion"><strong>{user[0].firstname} {user[0].lastname}</strong> {user[0].description}</p>
          <p id="url">{user[0].url}</p>
          <div className="profile-stats">
            <div className="stat">
              <p> <strong>{user[0].posts}</strong> Posts</p>
            </div>
            <div className="stat">
              <p><strong>{user[0].followers}</strong> Followers</p>
            </div>
            <div className="stat">
              <p><strong>{user[0].following}</strong> Following</p>
            </div>
         </div>
        </div>
      </div>
      <div className="profile-posts">
        <img src={'https://picsum.photos/350'}/>
        <img src={'https://picsum.photos/350'}/>
        <img src={'https://picsum.photos/350'}/>
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
  );
};

export default Home;