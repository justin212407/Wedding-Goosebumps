// components/VideoFullBleedDailymotion.tsx
"use client";

export default function VideoFullBleedDailymotion() {
  // Dailymotion video ID for https://www.dailymotion.com/video/x7yvpvc is "x7yvpvc"
  // Autoplay on mobile requires muted + playsInline; DM player handles it with params
  const src =
    "https://www.dailymotion.com/embed/video/x7yvpvc?autoplay=1&mute=1&loop=1&controls=0&queue-enable=false&ui-logo=0&ui-start-screen-info=false";

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <iframe
          title="Dailymotion video"
          src={src}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
