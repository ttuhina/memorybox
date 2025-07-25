import React, { useState } from 'react';
import axios from 'axios';

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sendDate, setSendDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert('No file selected!');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('sendDate', sendDate);

    try {
      const res = await axios.post('http://localhost:5000/api/timecapsule/upload', formData);
      alert(res.data.message);
    } catch (err) {
      alert('Upload failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} required />
      <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)} required />
      <input type="datetime-local" value={sendDate} onChange={e => setSendDate(e.target.value)} required />
      <input type="file" onChange={e => setFile(e.target.files[0])} required />
      <button type="submit">Send to the Future</button>
    </form>
  );
}

