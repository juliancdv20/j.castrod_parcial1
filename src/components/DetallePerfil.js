import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const DetallePerfil = ({ user, onClose }) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
      username: user.username,
      fullname: user.fullname,
      description: user.description,
      url: user.url
    });
  
    const handleChange = e => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = () => {
      fetch(`https://65f2fc7d105614e6549f7b15.mockapi.io/login/login/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Correcto', data);
          onClose(); 
        })
        .catch(error => {
          console.error('Error', error);
        });
    };
  
    return (
      <div className="edit-profile-form">
        <div className="edit-form-overlay"></div>
        <div className="edit-form-content"></div>
        <img 
          className="profile-picture"
          src={`https://picsum.photos/150`}
          alt="profile"
        />
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} />
        <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        <input type="text" name="url" value={formData.url} onChange={handleChange} />
        <button onClick={handleSubmit}>{t('Save changes')}</button>
      </div>
    );
  };
  
export default DetallePerfil;