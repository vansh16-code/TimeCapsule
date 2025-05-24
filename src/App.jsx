
import { Routes, Route, Link } from 'react-router-dom';
import MessageForm from './components/MessageForm';
import CapsuleViewer from './components/CapsuleViewer';


export default function App() {
  return (
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-start p-4 bg-light">
      <h1 className="display-4 mb-4">
        <Link to="/" className="text-decoration-none text-primary">⏳ TimeCapsule</Link>
      </h1>

      <Routes>
        <Route path="/" element={<MessageForm />} />
        <Route path="/view/:id" element={<CapsuleViewer />} />
      </Routes>
    </div>
  );
}
