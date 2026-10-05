import { useEffect, useState } from "react";

/* ============================================================
   EDIT HERE: company info, carousel images and the 10 works
   ============================================================ */
const COMPANY = {
  name: "AL LULU",
  subtitle: "Decoration and Carpentry",
  location: "Umm Al Quwain, UAE",
  email: "infolulucarpentry@gmail.com",
  whatsapp: "971502643065",
  whatsappMessage: "Hello AL LULU, I would like to know more about your works.",
};

// Replace these with your own photos (e.g. "/images/hero1.jpg")
const HERO_IMAGES = [
  "https://picsum.photos/seed/lulu-hero1/1000/800",
  "https://picsum.photos/seed/lulu-hero2/1000/800",
  "https://picsum.photos/seed/lulu-hero3/1000/800",
  "https://picsum.photos/seed/lulu-hero4/1000/800",
];

// Replace image + description for each work
const WORKS = [
  {
    title: "Shop / Retail Fit-Out",
    description: "Complete shop interior design, counters, partitions, ceilings, flooring, etc.",
    image: "https://picsum.photos/seed/lulu-w1/800/600",
  },
  {
    title: "Supermarket & Grocery Shop Works",
    description: "Supermarket shelving, display racks, checkout counters, promotional displays, etc.",
    image: "https://picsum.photos/seed/lulu-w2/800/600",
  },
  {
    title: "Custom Shelving & Racks",
    description: "Wall shelves, storage racks, product display shelves, wooden/metal racks.",
    image: "https://picsum.photos/seed/lulu-w3/800/600",
  },
  {
    title: "Office Interior Works",
    description: "Office partitions, workstations, reception desks, cabinets, meeting-room interiors.",
    image: "https://picsum.photos/seed/lulu-w4/800/600",
  },
  {
    title: "Kitchen & Cabinet Works",
    description: "Modular kitchens, wardrobes, cupboards, storage cabinets and custom furniture.",
    image: "https://picsum.photos/seed/lulu-w5/800/600",
  },
  {
    title: "Curtain & Blinds Works",
    description: "Curtains, roller blinds, vertical blinds, tracks and complete installation.",
    image: "https://picsum.photos/seed/lulu-w6/800/600",
  },
  {
    title: "Wooden Carpentry Works",
    description: "Doors, wooden partitions, decorative panels, counters, furniture and custom woodwork.",
    image: "https://picsum.photos/seed/lulu-w7/800/600",
  },
  {
    title: "Interior Decoration & False Ceiling",
    description: "False ceilings, wall panels, decorative features, lighting arrangements and interior finishing.",
    image: "https://picsum.photos/seed/lulu-w8/800/600",
  },
  {
    title: "Metal & Steel Fabrication",
    description: "Metal frames, display stands, gates, railings, partitions, stainless-steel works and custom structures.",
    image: "https://picsum.photos/seed/lulu-w9/800/600",
  },
  {
    title: "Signboard & Display Fabrication",
    description: "Shop signage, 3D letters, advertising boards, exhibition stands, kiosks and promotional displays.",
    image: "https://picsum.photos/seed/lulu-w10/800/600",
  },
];
/* ============================================================ */

const waLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
  COMPANY.whatsappMessage
)}`;

/* ---- shadcn-style primitives (Button, Card) ---- */
const GOLD = "#d4af37";

function Button({ className = "", ...props }) {
  return (
    <a
      className={`inline-flex h-12 items-center justify-center rounded-md bg-[#d4af37] px-7 text-sm font-semibold text-black shadow-[0_0_30px_-8px_#d4af37] transition hover:bg-[#e6c75a] ${className}`}
      {...props}
    />
  );
}

function Card({ className = "", ...props }) {
  return (
    <div
      className={`group overflow-hidden rounded-xl border border-white/10 bg-neutral-900 text-white transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/60 hover:shadow-[0_10px_40px_-15px_#d4af37] ${className}`}
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

/* ---- Auto-changing carousel ---- */
function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      4000
    );
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-[#d4af37]/40 bg-neutral-900 shadow-[0_0_80px_-30px_#d4af37]">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`AL LULU work ${i + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-7 bg-[#d4af37]" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans text-white antialiased">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.18),transparent_55%)]">
        <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="mb-5 inline-block rounded-full border border-[#d4af37]/40 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-[#d4af37]">
              {COMPANY.location}
            </p>
            <h1 className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-6xl font-bold tracking-tight text-transparent md:text-8xl">
              {COMPANY.name}
            </h1>
            <p className="mt-4 text-xl font-light tracking-wide text-[#d4af37] md:text-2xl">
              {COMPANY.subtitle}
            </p>
            <div className="mt-6 h-px w-24 bg-[#d4af37]" />
            <Button href={waLink} target="_blank" rel="noreferrer" className="mt-8 gap-2">
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </div>
          <Carousel images={HERO_IMAGES} />
        </div>
      </section>

      {/* Works */}
      <section className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#d4af37]">
            What we do
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Our Works</h2>
          <div className="mt-3 h-px w-16 bg-[#d4af37]" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WORKS.map((work) => (
              <Card key={work.title}>
                <div className="relative overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#d4af37]">{work.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {work.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#d4af37]/40 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-white">
              {COMPANY.name} <span className="text-[#d4af37]">{COMPANY.subtitle}</span>
            </p>
            <p className="text-neutral-500">{COMPANY.location}</p>
          </div>
          <div className="text-neutral-400 md:text-right">
            <p>{COMPANY.email}</p>
            <p>WhatsApp: +{COMPANY.whatsapp}</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#d4af37] text-black shadow-[0_0_30px_-4px_#d4af37] transition hover:scale-110"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}