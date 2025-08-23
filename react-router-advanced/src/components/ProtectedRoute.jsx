// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const isAuthenticated = false; // 🔑 Replace with real auth logic

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
