"use client";

import { Card } from "@nextui-org/react";

export default function About() {
  return (
    <section id="o-nas" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="order-2 md:order-1 flex justify-center md:justify-end">
          <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
            <img
              src="/about-aplika.jpg"
              alt="Konserwacja zabytków - przykład realizacji"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            O firmie PPHU APLIKA
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Jesteśmy zespołem konserwatorów i rzemieślników z doświadczeniem w pracy
            przy zabytkach architektury oraz dziełach sztuki. Łączymy tradycyjne techniki
            konserwatorskie z najnowszymi metodami dokumentacji i zabezpieczeń,
            aby przywracać oryginalne piękno obiektom historycznym.
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-yellow-700 font-bold">•</span>
              <span className="text-gray-700">Renowacja elewacji i detali architektonicznych</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-700 font-bold">•</span>
              <span className="text-gray-700">Konserwacja polichromii i rzeźb</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-700 font-bold">•</span>
              <span className="text-gray-700">Dokumentacja konserwatorska i doradztwo</span>
            </li>
          </ul>

          <div className="flex gap-4">
            <a
              href="#kontakt"
              className="inline-block bg-yellow-700 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-95"
            >
              Poproś o wycenę
            </a>

            <a
              href="#realizacje"
              className="inline-block border border-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-50"
            >
              Zobacz realizacje
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
