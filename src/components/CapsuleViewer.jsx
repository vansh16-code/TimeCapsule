import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export default function CapsuleViewer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [capsule, setCapsule] = useState(null);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/capsules/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Capsule not found');
        return res.json();
      })
      .then(data => {
        setCapsule(data);
        const checkUnlock = () => {
          if (dayjs().isAfter(dayjs(data.unlockTime))) {
            setIsUnlocked(true);
          } else {
            setTimeout(checkUnlock, 1000);
          }
        };
        checkUnlock();
      })
      .catch(() => setCapsule(null));
  }, [id]);

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this message?");
    if (confirmDelete) {
      fetch(`http://localhost:3001/capsules/${id}`, {
        method: 'DELETE'
      })
        .then(() => navigate('/'))
        .catch(err => console.error("Delete failed", err));
    }
  };

  if (!capsule) {
    return <p className="text-muted text-center mt-4">Capsule not found.</p>;
  }

  return (
    <div className="card shadow p-4 mx-auto mt-4" style={{ maxWidth: '500px' }}>
      {isUnlocked ? (
        <>
          <h2 className="text-center text-success mb-3">📬 Your Message</h2>
          <p className="fs-5 text-dark">{capsule.message}</p>
          <div className="text-center mt-4">
            <button className="btn btn-danger" onClick={handleDelete}>
              🗑️ Delete Message
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-center text-secondary mb-3">🔒 Locked</h2>
          <p className="text-muted">
            Message will unlock at: <strong>{dayjs(capsule.unlockTime).format('YYYY-MM-DD HH:mm:ss')}</strong>
          </p>
        </>
      )}
    </div>
  );
}
