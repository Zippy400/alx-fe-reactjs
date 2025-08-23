// src/hooks/useAuth.js
import { useState, useEffect } from "react";

export function useAuth() {
  // for now just mock authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // In real apps, check token or session storage here
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return { isAuthenticated };
}
