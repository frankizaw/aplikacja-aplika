"use client";

import { Card } from "@nextui-org/react";
import { Icon } from "@iconify/react"; // jeśli nie masz, zainstalujemy

export default function Services() {
  const items = [
    {
      title: "Renowacja elewacji zabytkowych",
      desc: "Konserwacja detali architektonicznych, czyszczenie, uzupełnianie ubytków oraz zabezpieczenie powierzchni.",
      icon: "mdi:home-city-outline"
    },
    {
      title: "Konserwacja polichromii",
      desc: "Oczyszczanie, utrwalanie, rekonstrukcja historycznych malowideł oraz warstw dekoracyjnych.",
      icon: "mdi:palette"
    },
    {
      title: "Złocenia i pozłotnictwo",
      desc: "Renowacja złoceń na elementach sakralnych i świeckich, rekonstrukcja złoceń płatkowych.",
      icon: "mdi:star-four-points"
    },
    {
      title: "Renowacja rzeźb i detali",
      desc: "Odnowa rzeźb w kamieniu, drewnie i metalu. Stabilizacja struktury oraz rekonstrukcje brakujących części.",
      icon: "mdi:human-handsup"
    },
    {
      title: "Konserwacja wnętrz",
      desc: "Prace konserwatorskie w obiektach sakralnych i historycznych — ściany, sklepienia, sztukaterie.",
      icon: "mdi:bank"
    },
    {
      title: "Dokumentacja konserwatorska",
      desc: "Sporządzanie dokumentacji fotograficznej, opisowej oraz ekspertyz konserwatorskich.",
      icon: "mdi:file-document-edit-outline"
    }
  ];

  return (
    <section id="uslugi" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-16">
        Nasze Usługi
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {items.map((item) => (
          <Card
            key={item.title}
            className="p-8 shadow-md hover:shadow-xl transition-all border border-gray-200 bg-white"
          >
            <div className="flex items-center gap-4 mb-6">
              <Icon icon={item.icon} width={40} height={40} className="text-yellow-700" />
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {item.desc}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
