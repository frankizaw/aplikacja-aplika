"use client";

import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-24 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        
        {/* Firma */}
        <div>
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
            PPHU APLIKA
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Konserwacja zabytków architektury i dzieł sztuki.  
            Renowacje, rekonstrukcje, dokumentacja konserwatorska.
          </p>
        </div>

        {/* Linki */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Nawigacja</h4>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#o-nas" className="hover:text-yellow-700">O firmie</a></li>
            <li><a href="#uslugi" className="hover:text-yellow-700">Usługi</a></li>
            <li><a href="#realizacje" className="hover:text-yellow-700">Realizacje</a></li>
            <li><a href="#proces" className="hover:text-yellow-700">Proces</a></li>
            <li><a href="#kontakt" className="hover:text-yellow-700">Kontakt</a></li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Kontakt</h4>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <Icon icon="mdi:phone" width={22} className="text-yellow-700" />
              +48 500 600 700
            </li>

            <li className="flex items-center gap-3">
              <Icon icon="mdi:email" width={22} className="text-yellow-700" />
              kontakt@aplikakonserwacja.pl
            </li>

            <li className="flex items-center gap-3">
              <Icon icon="mdi:map-marker" width={22} className="text-yellow-700" />
              ul. Zabytkowa 12, 00-001 Warszawa
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} PPHU APLIKA. Wszystkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
