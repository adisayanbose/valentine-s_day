const FlyingHearts = () => {
  const emojis = ["❤️"];
  const items = Array.from({ length: 12 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {items.map((_, i) => {
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];

        return (
          <span
            key={i}
            className="absolute animate-float opacity-80"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-${20 + Math.random() * 40}px`, // START BELOW SCREEN
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${20 + Math.random() * 24}px`,
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
};

export default FlyingHearts;