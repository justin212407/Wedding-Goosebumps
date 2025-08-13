'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo3() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const setupAnimations = () => {
      const ctx = gsap.context(() => {
        // Pin the container and scrub the video.
        // The animation will occur over a scroll distance equal to the viewport height.
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=100%', // Animation progresses over a scroll distance of 100% of the viewport height.
          pin: videoContainerRef.current,
          scrub: 1,
          animation: gsap.to(video, {
            currentTime: video.duration,
            ease: "none",
          }),
        });

        // Separately, fade out the text over the first 25% of the scroll journey.
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: 'top -25%', // Animation ends when the top of the trigger is 25% of the viewport height above the viewport's top.
          scrub: true,
          animation: gsap.to(textRef.current, {
            opacity: 0,
            ease: "power1.in",
          }),
        });
      }, sectionRef);
      return () => ctx.revert();
    };

    let cleanup: (() => void) | undefined;
    
    // Check if video metadata is already loaded.
    if (video.readyState >= 1) { // HAVE_METADATA or more
      cleanup = setupAnimations();
    } else {
      // If not, wait for the 'loadedmetadata' event.
      video.addEventListener('loadedmetadata', () => {
        cleanup = setupAnimations();
      }, { once: true });
    }

    // Return the cleanup function to be called on component unmount.
    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, []);

  return (
    // Section height is set to provide scrollable space for the pinned animation.
    // 200vh means the pinned animation runs for 100vh of scroll,
    // and there's another 100vh of space before the next section appears.
    <section ref={sectionRef} className="relative h-[200vh] bg-ivory">
      <div ref={videoContainerRef} className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src="https://static.showit.co/file/eRQwBOlXQgWCFHoNv0FdbQ/80549/jf_movie_2.mp4"
          className="h-full w-full object-cover"
          playsInline
          muted
          loop
          preload="metadata"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2
            ref={textRef}
            className="font-playfair text-white text-[18vw] sm:text-[15vw] md:text-[12vw] lg:text-[10rem] font-normal leading-none"
          >
            We Create
          </h2>
        </div>
      </div>
    </section>
  );
}