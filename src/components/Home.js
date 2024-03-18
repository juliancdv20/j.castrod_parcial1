import React, { useState, useEffect } from 'react';
import './Home.css';
import DetallePerfil from './DetallePerfil';
import { useTranslation } from 'react-i18next';


const Home = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false); 
  const [selectedPost, setSelectedPost] = useState(null);


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

  const handleEditClick = () => {
    setShowEditForm(true);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="profile">
      <div className={`profile ${showEditForm ? 'profile-hidden' : ''}`}>
      <div>
        {user[0] && !showEditForm && (
          <div className="profile-header">
            <img
              className="profile-picture"
              src={`https://picsum.photos/150`}
              alt="profile" 
              onClick={handleEditClick}
            />
            <div className="profile-info">
              <p id="usuario">{user[0]?.username}</p>
              <p id="descripcion"><strong>{user[0]?.fullname}</strong> {user[0]?.description}</p>
              <p id="url">{user[0]?.url}</p>
              <div className="profile-stats">
                <div className="stat">
                  <p> <strong>{user[0]?.posts}</strong> {t('posts')}</p>
                </div>
                <div className="stat">
                  <p><strong>{user[0]?.followers}</strong> {t('followers')}</p>
                </div>
                <div className="stat">
                  <p><strong>{user[0]?.following}</strong> {t('following')}</p>
                </div>
              </div>
            </div>
          </div>
        )} 
        <div className="profile-posts">
          {posts.map((post, index) => (
            <img src={post} key={index} alt={`post-${index}`} onClick={() => handlePostClick(post)} />
          ))}
        </div>
      </div>
      </div>
      {selectedPost && (
        <Modal post={selectedPost} onClose={handleCloseModal} />
      )}
      {showEditForm && <DetallePerfil user={user[0]} onClose={() => setShowEditForm(false)} />}
    </div>
  );
};

const Modal = ({ post, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img className="modal-image" src={post} alt="post" />
      </div>
    </div>
  );
};

export default Home;
