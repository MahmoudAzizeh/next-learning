"use client";

import { useEffect, useState } from "react";

export default function DeleteSuccessMessage() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <p className="success-message">
      User deleted successfully!
    </p>
  );
}