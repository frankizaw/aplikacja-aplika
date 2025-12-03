"use client";

import { Icon } from "@iconify/react";

export default function Process() {
  const steps = [
    {
      title: "Ocena stanu obiektu",
      desc: "Szczegółowa analiza uszkodzeń, warstw malarskich, materiałów i wcześniejszych ingerencji konserwatorskich.",
      icon: "mdi:magnify-scan",
    },
    {
      title: "Dokumentacja i plan prac",
      desc: "Przygotowanie dokumentacji fotograficznej, opisowej oraz harmonogramu działań zgodnego z wymogami konserwatorskimi.",
      icon: "mdi:file-document-edit",
    },
    {
      title: "Prace konserwatorskie",
      desc: "Wykonanie prac zgodnie ze sztuką konserwatorską — czyszczenie, uzupełnianie, rekonstrukcje, stabilizacja struktur.",
      icon: "mdi:hand-heart",
    },
    {
      title: "Zabezpieczenie i przekazanie",
      desc: "Końcowe zabezpieczenie obiektu oraz przygotowanie zaleceń dotyczących dalszego użytkowania i pielęgnacji.",
      icon: "mdi:shield-check",
    },
  ];

  return (
    <section id="proces" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-16">
        Proces Renowacji
      </h2>

      <div className="grid md:grid-cols-4 gap-10">
        {steps.map((step, i) => (
          <div
            key={i}
            className="text-center p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all bg-white"
          >
            <Icon
              icon={step.icon}
              width={48}
              height={48}
              className="mx-auto mb-4 text-yellow-700"
            />
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-700 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
