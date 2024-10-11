"use client";
import React from "react";
import "./Button.css";

export default function Button({ content, backgroundColor }) {
  function prevent(e) {
    e.preventDefault();
  }
  const style = {
    backgroundColor,
  };
  return (
    <button onClick={prevent} style={style} className={`custom-button`}>
      {content}
    </button>
  );
}
