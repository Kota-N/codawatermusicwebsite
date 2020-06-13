import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="contact">
      <h3>CONTACT</h3>
      <h4>contact@codawatermusic.com</h4>
    </div>
  );
};

export default Contact;
