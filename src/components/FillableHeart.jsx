import { Heart } from "lucide-react";

const FillableHeart = ({ value, max = 10, onClick }) => {
  const isFull = value >= max;
  const fill = Math.min(value / max, 1);

  // 🔴 Once full → show Lucide Heart
  if (isFull) {
    return (
      <Heart
        size={64}
        fill="red"
        color="red"
        className="cursor-pointer transition-transform hover:scale-110"
        onClick={onClick}
      />
    );
  }

  // ❤️ Filling heart (0–9)
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      onClick={onClick}
      className="cursor-pointer select-none"
    >
      <defs>
        <clipPath id="lucide-heart-fill">
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
        </clipPath>
      </defs>

      {/* Fill level */}
      <rect
        x="0"
        y={24 - 24 * fill}
        width="24"
        height={24 * fill}
        fill="red"
        clipPath="url(#lucide-heart-fill)"
        className="transition-all duration-300 ease-out"
      />

      {/* Outline */}
      <path
        d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"
        fill="none"
        stroke="red"
        strokeWidth="2"
      />
    </svg>
  );
};

export default FillableHeart;