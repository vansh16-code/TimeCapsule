import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export default function CapsuleViewer() {
  const { id } = useParams();
  const [capsule, setCapsule] = useState(null);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(`capsule-${id}`);
    if (stored) {
      const data = JSON.parse(stored);
      setCapsule(data);

      const checkUnlock = () => {
        if (dayjs().isAfter(dayjs(data.unlockTime))) {
          setIsUnlocked(true);
        } else {
          setTimeout(checkUnlock, 1000);
        }
      };
      checkUnlock();
    }
  }, [id]);

  if (!capsule) {
    return <p className="text-muted text-center mt-4">Capsule not found.</p>;
  }

  return (
    <div className="card shadow p-4 mx-auto mt-4" style={{ maxWidth: '500px' }}>
      {isUnlocked ? (
        <>
          <h2 className="text-center text-success mb-3">📬 Your Message</h2>
          <p className="fs-5 text-dark">{capsule.message}</p>
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
