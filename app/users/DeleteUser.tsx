"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type DeleteUserProps = {
  id: number;
};

export default function DeleteUser({
  id,
}: DeleteUserProps) {
  const router = useRouter();

  const [deleting, setDeleting] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmed) {
      return;
    }

    setDeleting(true);
    setError("");

    try {
      const response = await fetch(
        `/api/users/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.message ||
            "Something went wrong!"
        );
        return;
      }

      router.push("/users?deleted=true");
    } catch (error) {
      console.error(error);

      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div>
      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={handleDelete}
        disabled={deleting}
      >
        {deleting
          ? "Deleting..."
          : "Delete"}
      </button>
    </div>
  );
}