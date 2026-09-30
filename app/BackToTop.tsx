"use client";

export default function BackToTop() {
  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      ↑ Back to Top
    </button>
  );
}