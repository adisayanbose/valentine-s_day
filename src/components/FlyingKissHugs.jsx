import { useMemo } from "react";

const FlyingHugsAndKisses = () => {
  const emojis = ["😘", "🫂"];

  const items = useMemo(() => {
    return Array.from({ length: 12 }).map(() => ({
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: Math.random() * 100,
      bottom: -(20 + Math.random() * 40),
      delay: Math.random() * 3,
      size: 20 + Math.random() * 24,
    }));
  }, []); // 👈 runs only ONCE

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item, i) => (
        <span
          key={i}
          className="absolute animate-float opacity-80"
          style={{
            left: `${item.left}%`,
            bottom: `${item.bottom}px`,
            animationDelay: `${item.delay}s`,
            fontSize: `${item.size}px`,
          }}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
};

export default FlyingHugsAndKisses;