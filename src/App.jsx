// import { useEffect, useState } from "react";

// const COMPANY = {
//   name: "AL LULU",
//   subtitle: "Decoration and Carpentry",
//   location: "Umm Al Quwain, UAE",
//   email: "infolulucarpentry@gmail.com",
//   whatsapp: "971502643065",
//   whatsappMessage: "Hello AL LULU, I would like to know more about your works.",
//   // Map location
//   lat: 25.53973,
//   lng: 55.686016,
//   gisLink: "https://2gis.ae/dubai/firm/70000001103794060?m=55.686016%2C25.53973%2F15.8",
// };

// // Hero images
// import hero1 from './assets/hero-images/al-lulu-hero1.jpg';
// import hero2 from './assets/hero-images/al-lulu-hero2.webp';
// import hero3 from './assets/hero-images/al-lulu-hero3.webp';
// import hero4 from './assets/hero-images/al-lulu-hero-4.avif';
// import hero5 from './assets/hero-images/al-lulu-hero-5.webp';

// const HERO_IMAGES = [
//   hero1,
//   hero2,
//   hero3,
//   hero4,
//   hero5,
// ];

// // Aur works images
// import work1 from './assets/works/Shop-Retail Fit-Out.jpg';
// import work2 from './assets/works/supermarket-display-racks.png';
// import work3 from './assets/works/Custom-Shelving.jpg';
// import work4 from './assets/works/office-interior-designs.webp';
// import work5 from './assets/works/Kitchen_Cabinet_Design.webp';
// import work6 from './assets/works/Curtain & Blinds Works.jpg';
// import work7 from './assets/works/Wooden Carpentry Works.webp';
// import work8 from './assets/works/Interior Decoration .avif';
// import work9 from './assets/works/Metal & Steel Fabrication.webp';
// import work10 from './assets/works/Signboard & Display Fabrication.webp';

// // Replace image + description for each work
// const WORKS = [
//   {
//     title: "Shop / Retail Fit-Out",
//     description: "Complete shop interior design, counters, partitions, ceilings, flooring, etc.",
//     image: work1,
//   },
//   {
//     title: "Supermarket & Grocery Shop Works",
//     description: "Supermarket shelving, display racks, checkout counters, promotional displays, etc.",
//     image: work2,
//   },
//   {
//     title: "Custom Shelving & Racks",
//     description: "Wall shelves, storage racks, product display shelves, wooden/metal racks.",
//     image: work3,
//   },
//   {
//     title: "Office Interior Works",
//     description: "Office partitions, workstations, reception desks, cabinets, meeting-room interiors.",
//     image: work4,
//   },
//   {
//     title: "Kitchen & Cabinet Works",
//     description: "Modular kitchens, wardrobes, cupboards, storage cabinets and custom furniture.",
//     image: work5,
//   },
//   {
//     title: "Curtain & Blinds Works",
//     description: "Curtains, roller blinds, vertical blinds, tracks and complete installation.",
//     image: work6,
//   },
//   {
//     title: "Wooden Carpentry Works",
//     description: "Doors, wooden partitions, decorative panels, counters, furniture and custom woodwork.",
//     image: work7,
//   },
//   {
//     title: "Interior Decoration & False Ceiling",
//     description: "False ceilings, wall panels, decorative features, lighting arrangements and interior finishing.",
//     image: work8,
//   },
//   {
//     title: "Metal & Steel Fabrication",
//     description: "Metal frames, display stands, gates, railings, partitions, stainless-steel works and custom structures.",
//     image: work9,
//   },
//   {
//     title: "Signboard & Display Fabrication",
//     description: "Shop signage, 3D letters, advertising boards, exhibition stands, kiosks and promotional displays.",
//     image: work10,
//   },
// ];

// /* ============================================================ */

// const waLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
//   COMPANY.whatsappMessage
// )}`;

// /* ---- shadcn-style primitives (Button, Card) ---- */
// const GOLD = "#d4af37";

// function Button({ className = "", ...props }) {
//   return (
//     <a
//       className={`inline-flex h-12 items-center justify-center rounded-md bg-[#d4af37] px-7 text-sm font-semibold text-black shadow-[0_0_30px_-8px_#d4af37] transition hover:bg-[#e6c75a] ${className}`}
//       {...props}
//     />
//   );
// }

// function Card({ className = "", ...props }) {
//   return (
//     <div
//       className={`group overflow-hidden rounded-xl border border-white/10 bg-neutral-900 text-white transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/60 hover:shadow-[0_10px_40px_-15px_#d4af37] ${className}`}
//       {...props}
//     />
//   );
// }

// function WhatsAppIcon({ className = "h-7 w-7" }) {
//   return (
//     <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
//       <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.59 5.93L0 24l6.35-1.66a11.87 11.87 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.42-8.43ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.77.99 1-3.67-.24-.38a9.9 9.9 0 0 1-1.52-5.27c0-5.46 4.45-9.9 9.92-9.9 2.64 0 5.13 1.03 7 2.9a9.84 9.84 0 0 1 2.9 7c0 5.46-4.45 9.92-9.88 9.92Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
//     </svg>
//   );
// }

// /* ---- Auto-changing carousel ---- */
// function Carousel({ images }) {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(
//       () => setIndex((i) => (i + 1) % images.length),
//       4000
//     );
//     return () => clearInterval(timer);
//   }, [images.length]);

//   return (
//     <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-[#d4af37]/40 bg-neutral-900 shadow-[0_0_80px_-30px_#d4af37]">
//       {images.map((src, i) => (
//         <img
//           key={src}
//           src={src}
//           alt={`AL LULU work ${i + 1}`}
//           className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"
//             }`}
//         />
//       ))}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//       <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             aria-label={`Go to image ${i + 1}`}
//             className={`h-2 rounded-full transition-all ${i === index ? "w-7 bg-[#d4af37]" : "w-2 bg-white/50"
//               }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div className="min-h-screen bg-black font-sans text-white antialiased">
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.18),transparent_55%)]">
//         <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
//           <div>
//             <p className="mb-5 inline-block rounded-full border border-[#d4af37]/40 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-[#d4af37]">
//               {COMPANY.location}
//             </p>
//             <h1 className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-6xl font-bold tracking-tight text-transparent md:text-8xl">
//               {COMPANY.name}
//             </h1>
//             <p className="mt-4 text-xl font-light tracking-wide text-[#d4af37] md:text-2xl">
//               {COMPANY.subtitle}
//             </p>
//             <div className="mt-6 h-px w-24 bg-[#d4af37]" />
//             <Button href={waLink} target="_blank" rel="noreferrer" className="mt-8 gap-2">
//               <WhatsAppIcon className="h-4 w-4" />
//               Chat with Us
//             </Button>
//           </div>
//           <Carousel images={HERO_IMAGES} />
//         </div>
//       </section>

//       {/* Works */}
//       <section className="border-t border-white/10 bg-neutral-950">
//         <div className="mx-auto max-w-6xl px-6 py-20">
//           <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#d4af37]">
//             What we do
//           </p>
//           <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Our Works</h2>
//           <div className="mt-3 h-px w-16 bg-[#d4af37]" />
//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {WORKS.map((work) => (
//               <Card key={work.title}>
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={work.image}
//                     alt={work.title}
//                     loading="lazy"
//                     className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
//                 </div>
//                 <div className="p-5">
//                   <h3 className="font-semibold text-[#d4af37]">{work.title}</h3>
//                   <p className="mt-2 text-sm leading-relaxed text-neutral-400">
//                     {work.description}
//                   </p>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-[#d4af37]/40 bg-black">
//         <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2">
//           {/* Contact + directions */}
//           <div className="flex flex-col justify-center">
//             <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#d4af37]">
//               Visit Us
//             </p>
//             <h2 className="mt-3 text-2xl font-bold md:text-3xl">
//               {COMPANY.name} <span className="text-[#d4af37]">{COMPANY.subtitle}</span>
//             </h2>
//             <div className="mt-3 h-px w-16 bg-[#d4af37]" />
//             <div className="mt-6 space-y-1 text-neutral-400">
//               <p>{COMPANY.location}</p>
//               <p>{COMPANY.email}</p>
//               <p>WhatsApp: +{COMPANY.whatsapp}</p>
//             </div>
//             <div className="mt-6 flex flex-wrap gap-3">
//               <Button
//                 href={`https://www.google.com/maps/search/?api=1&query=${COMPANY.lat},${COMPANY.lng}`}
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Get Directions
//               </Button>
//               <a
//                 href={COMPANY.gisLink}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex h-12 items-center justify-center rounded-md border border-[#d4af37]/50 px-7 text-sm font-semibold text-[#d4af37] transition hover:bg-[#d4af37]/10"
//               >
//                 Open in 2GIS
//               </a>
//             </div>
//           </div>

//           {/* Map */}
//           <div className="min-h-72 overflow-hidden rounded-xl border border-[#d4af37]/40 shadow-[0_0_60px_-30px_#d4af37]">
//             <iframe
//               title="AL LULU location map"
//               src={`https://maps.google.com/maps?q=${COMPANY.lat},${COMPANY.lng}&z=16&output=embed`}
//               className="h-full min-h-72 w-full border-0"
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               allowFullScreen
//             />
//           </div>
//         </div>

//         <div className="border-t border-white/10 py-5 text-center text-xs text-neutral-500">
//           © {new Date().getFullYear()} {COMPANY.name} {COMPANY.subtitle}. All rights reserved.
//         </div>
//       </footer>

//       {/* Floating WhatsApp button */}
//       <a
//         href={waLink}
//         target="_blank"
//         rel="noreferrer"
//         aria-label="Chat on WhatsApp"
//         className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#d4af37] text-black shadow-[0_0_30px_-4px_#d4af37] transition hover:scale-110"
//       >

//         <WhatsAppIcon />
//       </a>
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react";

const COMPANY = {
  name: "AL LULU",
  subtitle: "Decoration and Carpentry",
  location: "Umm Al Quwain, UAE",
  email: "infolulucarpentry@gmail.com",
  whatsapp: "971502643065",
  whatsappMessage: "Hello AL LULU, I would like to know more about your works.",
  // Map location
  lat: 25.53973,
  lng: 55.686016,
  gisLink: "https://2gis.ae/dubai/firm/70000001103794060?m=55.686016%2C25.53973%2F15.8",
};

// Hero images
import hero1 from './assets/hero-images/al-lulu-hero1.jpg';
import hero2 from './assets/hero-images/al-lulu-hero2.webp';
import hero3 from './assets/hero-images/al-lulu-hero3.webp';
import hero4 from './assets/hero-images/al-lulu-hero-4.avif';
import hero5 from './assets/hero-images/al-lulu-hero-5.webp';

const HERO_IMAGES = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
];

// Aur works images
import work1 from './assets/works/Shop-Retail Fit-Out.jpg';
import work2 from './assets/works/supermarket-display-racks.png';
import work3 from './assets/works/Custom-Shelving.jpg';
import work4 from './assets/works/office-interior-designs.webp';
import work5 from './assets/works/Kitchen_Cabinet_Design.webp';
import work6 from './assets/works/Curtain & Blinds Works.jpg';
import work7 from './assets/works/Wooden Carpentry Works.webp';
import work8 from './assets/works/Interior Decoration .avif';
import work9 from './assets/works/Metal & Steel Fabrication.webp';
import work10 from './assets/works/Signboard & Display Fabrication.webp';

// Replace image + description for each work
const WORKS = [
  {
    title: "Shop / Retail Fit-Out",
    description: "Complete shop interior design, counters, partitions, ceilings, flooring, etc.",
    image: work1,
  },
  {
    title: "Supermarket & Grocery Shop Works",
    description: "Supermarket shelving, display racks, checkout counters, promotional displays, etc.",
    image: work2,
  },
  {
    title: "Custom Shelving & Racks",
    description: "Wall shelves, storage racks, product display shelves, wooden/metal racks.",
    image: work3,
  },
  {
    title: "Office Interior Works",
    description: "Office partitions, workstations, reception desks, cabinets, meeting-room interiors.",
    image: work4,
  },
  {
    title: "Kitchen & Cabinet Works",
    description: "Modular kitchens, wardrobes, cupboards, storage cabinets and custom furniture.",
    image: work5,
  },
  {
    title: "Curtain & Blinds Works",
    description: "Curtains, roller blinds, vertical blinds, tracks and complete installation.",
    image: work6,
  },
  {
    title: "Wooden Carpentry Works",
    description: "Doors, wooden partitions, decorative panels, counters, furniture and custom woodwork.",
    image: work7,
  },
  {
    title: "Interior Decoration & False Ceiling",
    description: "False ceilings, wall panels, decorative features, lighting arrangements and interior finishing.",
    image: work8,
  },
  {
    title: "Metal & Steel Fabrication",
    description: "Metal frames, display stands, gates, railings, partitions, stainless-steel works and custom structures.",
    image: work9,
  },
  {
    title: "Signboard & Display Fabrication",
    description: "Shop signage, 3D letters, advertising boards, exhibition stands, kiosks and promotional displays.",
    image: work10,
  },
];

/* ============================================================ */

const waLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
  COMPANY.whatsappMessage
)}`;

/*
  Palette
  white   #ffffff   page
  blush   #fff4f1   soft peach background
  peach   #ffe2d6   borders / chips
  rose    #d6336c   main pink
  rose-dk #b02659   pressed / text accents
  ink     #2e1f25   text
  muted   #7a6a70   secondary text
*/

const FONT_CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Fraunces:opsz,wght@9..144,600;9..144,700&display=swap');
.al-body { font-family: 'DM Sans', system-ui, sans-serif; }
.al-display { font-family: 'Fraunces', Georgia, serif; }
`;

function Button({ className = "", ...props }) {
  return (
    <a
      className={`inline-flex h-12 items-center justify-center rounded-full bg-[#d6336c] px-7 text-[15px] font-semibold text-white transition active:scale-[0.97] active:bg-[#b02659] hover:bg-[#bf2a5f] ${className}`}
      {...props}
    />
  );
}

function WhatsAppIcon({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.59 5.93L0 24l6.35-1.66a11.87 11.87 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.42-8.43ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.77.99 1-3.67-.24-.38a9.9 9.9 0 0 1-1.52-5.27c0-5.46 4.45-9.9 9.92-9.9 2.64 0 5.13 1.03 7 2.9a9.84 9.84 0 0 1 2.9 7c0 5.46-4.45 9.92-9.88 9.92Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function ArrowIcon({ direction = "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {direction === "right" ? <path d="m9 5 7 7-7 7" /> : <path d="m15 5-7 7 7 7" />}
    </svg>
  );
}

/* ---- Carousel: auto-changes, arrows, swipe ---- */
function Carousel({ images }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const count = images.length;

  const next = () => setIndex((i) => (i + 1) % count);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [paused, count]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      diff < 0 ? next() : prev();
    }
    touchStartX.current = null;
    setPaused(false);
  };

  const arrowClass =
    "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#b02659] shadow-md transition active:scale-90 hover:bg-white";

  return (
    <div
      className="relative aspect-[4/3] w-full select-none overflow-hidden bg-[#ffe2d6] sm:aspect-[5/4] sm:rounded-3xl"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`AL LULU work ${i + 1}`}
          draggable={false}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <button onClick={prev} aria-label="Previous image" className={`${arrowClass} left-3`}>
        <ArrowIcon direction="left" />
      </button>
      <button onClick={next} aria-label="Next image" className={`${arrowClass} right-3`}>
        <ArrowIcon direction="right" />
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/25 px-2.5 py-1.5 backdrop-blur-sm">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-5 bg-white" : "w-1.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function WorkCard({ work }) {
  return (
    <article className="flex gap-4 overflow-hidden rounded-2xl border border-[#ffe2d6] bg-white p-3 sm:flex-col sm:gap-0 sm:p-0">
      <img
        src={work.image}
        alt={work.title}
        loading="lazy"
        className="h-28 w-28 flex-none rounded-xl object-cover sm:aspect-[4/3] sm:h-auto sm:w-full sm:rounded-none"
      />
      <div className="flex min-w-0 flex-col justify-center sm:p-5">
        <h3 className="text-[15px] font-semibold leading-snug text-[#2e1f25] sm:text-base">
          {work.title}
        </h3>
        <p className="mt-1 line-clamp-3 text-[13px] leading-relaxed text-[#7a6a70] sm:line-clamp-none sm:text-sm">
          {work.description}
        </p>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <div className="al-body min-h-screen bg-white text-[#2e1f25] antialiased">
      <style>{FONT_CSS}</style>

      {/* Hero */}
      <section className="bg-[#fff4f1]">
        <div className="mx-auto grid max-w-6xl items-center gap-0 sm:gap-10 sm:px-6 sm:py-14 md:grid-cols-2 md:gap-14">
          {/* Carousel first on mobile */}
          <Carousel images={HERO_IMAGES} />

          <div className="px-5 pb-10 pt-7 sm:px-0 sm:py-0">
            <p className="text-sm font-medium text-[#d6336c]">{COMPANY.location}</p>
            <h1 className="al-display mt-2 text-5xl font-bold leading-none tracking-tight text-[#2e1f25] sm:text-6xl md:text-7xl">
              {COMPANY.name}
            </h1>
            <p className="mt-3 text-lg text-[#7a6a70] sm:text-xl">{COMPANY.subtitle}</p>
            <Button href={waLink} target="_blank" rel="noreferrer" className="mt-7 w-full gap-2 sm:w-auto">
              <WhatsAppIcon className="h-5 w-5" />
              Chat with us
            </Button>
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
          <h2 className="al-display text-3xl font-bold tracking-tight sm:text-4xl">Our works</h2>
          <p className="mt-2 text-[15px] text-[#7a6a70]">
            Interior, carpentry and fabrication for shops, offices and homes.
          </p>
          <div className="mt-7 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {WORKS.map((work) => (
              <WorkCard key={work.title} work={work} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fff4f1]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 md:grid-cols-2">
          {/* Contact + directions */}
          <div className="flex flex-col justify-center">
            <h2 className="al-display text-2xl font-bold sm:text-3xl">
              {COMPANY.name}
            </h2>
            <p className="text-[#d6336c]">{COMPANY.subtitle}</p>
            <div className="mt-5 space-y-1.5 text-[15px] text-[#7a6a70]">
              <p>{COMPANY.location}</p>
              <p className="break-all">{COMPANY.email}</p>
              <p>WhatsApp: +{COMPANY.whatsapp}</p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                href={`https://www.google.com/maps/search/?api=1&query=${COMPANY.lat},${COMPANY.lng}`}
                target="_blank"
                rel="noreferrer"
              >
                Get directions
              </Button>
              <a
                href={COMPANY.gisLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#d6336c] bg-white px-7 text-[15px] font-semibold text-[#d6336c] transition active:scale-[0.97] hover:bg-[#fff0f5]"
              >
                Open in 2GIS
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-64 overflow-hidden rounded-2xl border border-[#ffe2d6] bg-white sm:h-80 md:h-auto md:min-h-72">
            <iframe
              title="AL LULU location map"
              src={`https://maps.google.com/maps?q=${COMPANY.lat},${COMPANY.lng}&z=16&output=embed`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="border-t border-[#ffe2d6] py-5 text-center text-xs text-[#7a6a70]">
          © {new Date().getFullYear()} {COMPANY.name} {COMPANY.subtitle}. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#d6336c] text-white shadow-lg shadow-[#d6336c]/30 transition active:scale-90"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}