// src/components/UploadForm.js
import React, { useState } from 'react';
import './UploadForm.css';

function UploadForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => alert("Sent to the Future! 📦✨"), 1500);
  };

  return (
    <form className={`upload-form ${submitted ? 'animate' : ''}`} onSubmit={handleSubmit}>
      <label>Your Email</label>
      <input type="email" required placeholder="example@domain.com" />

      <label>Your Message</label>
      <textarea required placeholder="Write your message here..." rows={4}></textarea>

      <label>Date & Time</label>
      <input type="datetime-local" required />

      <label>Upload a File</label>
      <input type="file" />

      <button type="submit">Send to the Future 🚀</button>

      <div className="box-animation">
        <div className="lid" />
        <div className="box" />
      </div>
    </form>
  );
}

export default UploadForm;
