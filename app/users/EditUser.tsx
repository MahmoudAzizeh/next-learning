"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type EditUserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export default function EditUser({
  id,
  name: initialName,
  username: initialUsername,
  email: initialEmail,
}: EditUserProps) {
  const router = useRouter();

  const [name, setName] = useState(initialName);
  const [username, setUsername] =
    useState(initialUsername);
  const [email, setEmail] =
    useState(initialEmail);

  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSaving(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(
        `/api/users/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            username,
            email,
          }),
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

      setSuccess(
        "User updated successfully!"
      );

      setTimeout(() => {
        router.push(`/users/${id}`);
      }, 1000);
    } catch (error) {
      console.error(error);

      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="user-edit-form"
    >
      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      {success && (
        <p className="success-message">
          {success}
        </p>
      )}

      <div className="user-edit-field">
        <label htmlFor="name">
          Name
        </label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          required
        />
      </div>

      <div className="user-edit-field">
        <label htmlFor="username">
          Username
        </label>

        <input
          id="username"
          type="text"
          value={username}
          onChange={(event) =>
            setUsername(event.target.value)
          }
          required
        />
      </div>

      <div className="user-edit-field">
        <label htmlFor="email">
          Email
        </label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
          required
        />
      </div>

      <button
        type="submit"
        className="user-edit-submit"
        disabled={saving}
      >
        {saving
          ? "Saving..."
          : "Save Changes"}
      </button>
    </form>
  );
}