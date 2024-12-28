import React from 'react';

const About = () => {
  const aboutContainerStyle = {
    fontFamily: "'Arial', sans-serif",
    lineHeight: '1.6',
    textAlign: 'center',
    backgroundColor: '#0c0b0b',
    color: 'white',
    padding: '40px 20px',
    width: '100%',
    minHeight: '100vh',
    boxSizing: 'border-box',
  };

  const headerStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '20px 0',
  };

  const subTextStyle = {
    color: 'rgb(241, 161, 21, 0.75)',
    fontSize: '1.2rem',
    margin: '10px 0 40px',
  };

  const imageStyle = {
    width: '90%',
    maxWidth: '1200px',
    borderRadius: '10px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const missionStyle = {
    color: 'rgb(241, 161, 21, 0.75)',
    margin: '30px 0',
    fontWeight: 'bold',
    fontSize: '1.8rem',
  };

  const sectionStyle = {
    backgroundColor: '#2d2929',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    borderRadius: '10px',
    margin: '40px auto',
    padding: '20px 30px',
    maxWidth: '90%',
    textAlign: 'left',
  };

  const listStyle = {
    margin: '10px 0',
    paddingLeft: '20px',
  };

  const listItemStyle = {
    marginBottom: '10px',
  };

  return (
    <div style={aboutContainerStyle}>
      <h1 style={headerStyle}>Welcome to iNotebook</h1>
      <p style={subTextStyle}>
        Your personal digital notebook designed to make note-taking smarter, faster, and more efficient.
      </p>
      <img
        src="https://onezero.blog/wp-content/uploads/2020/08/safar-safarov-MSN8TFhJ0is-unsplash-1200x600.jpg"
        alt="Notebook workspace"
        style={imageStyle}
      />
      <div style={sectionStyle}>
        <h2 style={missionStyle}>Our Mission</h2>
        <p>
          At <b>iNotebook</b>, we aim to empower individuals by providing a seamless and secure platform
          to manage their notes. We believe that a well-organized mind can unlock endless possibilities.
        </p>
      </div>
      <div style={sectionStyle}>
        <h2 style={missionStyle}>Why Choose iNotebook?</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>🔒 Secure and reliable note storage</li>
          <li style={listItemStyle}>📋 Effortless note-taking and organization</li>
          <li style={listItemStyle}>🌍 Access your notes anytime, anywhere</li>
          <li style={listItemStyle}>🎨 Simple and user-friendly design</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
