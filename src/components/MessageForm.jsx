import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MessageForm() {
  const [message, setMessage] = useState('');
  const [unlockDate, setUnlockDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now().toString();
    const capsule = {
      message,
      unlockTime: unlockDate,
    };
    localStorage.setItem(`capsule-${id}`, JSON.stringify(capsule));
    navigate(`/view/${id}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card shadow p-4 mx-auto"
      style={{ maxWidth: '500px' }}
    >
      <h2 className="text-center mb-4 text-primary">✍️ Create Your Time Capsule</h2>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          id="message"
          className="form-control"
          placeholder="Write your message for the future..."
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="unlockDate" className="form-label">Unlock Date & Time</label>
        <input
          type="datetime-local"
          id="unlockDate"
          className="form-control"
          value={unlockDate}
          onChange={(e) => setUnlockDate(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        🔐 Lock Message
      </button>
    </form>
  );
}
