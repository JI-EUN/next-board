"use client";

export default function Error({ props, reset }) {
  return (
    <div>
      <h4>234234</h4>
      <button
        onClick={() => {
          reset();
        }}
      >
        리셋
      </button>
    </div>
  );
}
