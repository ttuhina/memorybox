import React, { useState } from 'react';
import './UploadForm.css';

function UploadForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      alert("Message secured for the future ⏳");
    }, 3000);
  };

  return (
    <div className="upload-form">
      <h1>⏳ TimeCapsule</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Your email
            <input type="email" required />
          </label>
          <label>
            Your message
            <textarea required />
          </label>
          <label>
            dd/mm/yyyy, --:-- --
            <input type="datetime-local" required />
          </label>
          <label className="file-label">
            No file chosen
            <input type="file" />
          </label>
          <button type="submit">Send to the Future</button>
        </form>
      ) : (
        <div className="envelope-animation">
          <div className="envelope">
            <div className="top-flap"></div>
            <div className="body"></div>
          </div>
          <p>Sealing your message...</p>
        </div>
      )}
    </div>
  );
}

export default UploadForm;
