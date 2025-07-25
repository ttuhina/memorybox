import scheduleEmail from '../../utils/scheduler.js';

export const handleUpload = async (req, res) => {
  try {
    const { email, message, sendDate } = req.body;
    const file = req.file;

    if (!file || !email || !sendDate) {
      return res.status(400).json({ error: 'Missing file, email or send date.' });
    }

    // Schedule email
    scheduleEmail({
      email,
      message,
      filePath: file.path,
      sendDate
    });

    res.status(200).json({ message: 'Time capsule scheduled!' });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Server error. Try again.' });
  }
};
