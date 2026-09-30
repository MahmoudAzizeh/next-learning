"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewUserPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [username, setUsername] =
    useState("");
  const [email, setEmail] = useState("");

  const [creating, setCreating] =
    useState(false);
  const [success, setSuccess] =
    useState("");
  const [error, setError] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setCreating(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(
        "/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
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
        "User created successfully!"
      );

      setName("");
      setUsername("");
      setEmail("");

      setTimeout(() => {
        router.push("/users");
      }, 1000);
    } catch (error) {
      console.error(error);

      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setCreating(false);
    }
  }

  return (
    <main>
      <Link
        href="/users"
        className="back-link"
      >
        ← Back to Users
      </Link>

      <h1 className="users-title">
        Add New User
      </h1>

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

      <form
        onSubmit={handleSubmit}
        className="user-edit-form"
      >
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
              setUsername(
                event.target.value
              )
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
              setEmail(
                event.target.value
              )
            }
            required
          />
        </div>

        <button
          type="submit"
          className="user-edit-submit"
          disabled={creating}
        >
          {creating
            ? "Creating..."
            : "Create User"}
        </button>
      </form>
    </main>
  );
}