"use client";
import React from "react";
import "./Button.css";

export default function Button({ content }) {
  function prevent(e) {
    e.preventDefault();
  }
  return (
    <button onClick={prevent} className="custom-button">
      {content}
    </button>
  );
}
