"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function Error({
  error,
  reset,
}: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <h1>Something went wrong!</h1>

      <p>
        We couldn't load the users.
      </p>

      <button onClick={() => reset()}>
        Try Again
      </button>
    </main>
  );
}