"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewUserPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [creating, setCreating] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setCreating(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong!");
        return;
      }

      setSuccess("User created successfully!");

      setName("");
      setUsername("");
      setEmail("");

      setTimeout(() => {
        router.push("/users");
      }, 1000);
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setCreating(false);
    }
  }

  return (
    <main className="new-user-page">
      <div className="new-user-container">
        <Link href="/users" className="back-link">
          ← Back to Users
        </Link>

        <div className="new-user-header">
          <div>
            <span className="page-badge">USER MANAGEMENT</span>

            <h1>Add New User</h1>

            <p>
              Create a new user account by filling out the
              information below.
            </p>
          </div>

          <div className="new-user-icon">
            +
          </div>
        </div>

        {error && (
          <div className="alert alert-error">
            <span>!</span>
            <p>{error}</p>
          </div>
        )}

        {success && (
          <div className="alert alert-success">
            <span>✓</span>
            <p>{success}</p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="new-user-form"
        >
          <div className="form-section">
            <h2>Personal Information</h2>
            <p className="form-section-description">
              Enter the user's basic information.
            </p>

            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="username">
                  Username
                </label>

                <input
                  id="username"
                  type="text"
                  placeholder="johndoe"
                  value={username}
                  onChange={(event) =>
                    setUsername(event.target.value)
                  }
                  required
                />
              </div>

              <div className="form-field form-field-full">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <Link
              href="/users"
              className="cancel-button"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="user-edit-submit"
              disabled={creating}
            >
              {creating ? (
                <>
                  <span className="button-spinner" />
                  Creating...
                </>
              ) : (
                <>
                  Create User
                  <span>→</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}