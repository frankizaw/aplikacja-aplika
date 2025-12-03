"use client";

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center">
      {/* BACKGROUND IMAGE */}
      <img
        src="/hero-aplika.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Renowacja zabytków"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-serif font-bold">
          Konserwacja i Renowacja Zabytków
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-200">
          Od lat przywracamy piękno architekturze i dziełom sztuki, dbając o historię przyszłych pokoleń.
        </p>
      </div>
    </section>
  );
}
