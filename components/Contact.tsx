"use client";

import { Icon } from "@iconify/react";
import { Input, Textarea, Button } from "@nextui-org/react";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Dziękujemy! Twoja wiadomość została wysłana.");
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="kontakt" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-16">
        Kontakt
      </h2>

      <div className="grid md:grid-cols-2 gap-14">
        {/* LEFT SIDE */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Skontaktuj się z nami
          </h3>

          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <Icon icon="mdi:phone" width={28} className="text-yellow-700" />
              <span>+48 500 600 700</span>
            </li>

            <li className="flex items-center gap-3">
              <Icon icon="mdi:email" width={28} className="text-yellow-700" />
              <span>kontakt@aplikakonserwacja.pl</span>
            </li>

            <li className="flex items-center gap-3">
              <Icon icon="mdi:map-marker" width={28} className="text-yellow-700" />
              <span>ul. Zabytkowa 12, 00-001 Warszawa</span>
            </li>
          </ul>

          <p className="text-gray-700 mt-6 leading-relaxed">
            Pracujemy przy obiektach sakralnych, zabytkach architektury oraz dziełach 
            sztuki na terenie całej Polski. Chętnie przygotujemy wycenę i doradzimy 
            w zakresie odpowiedniej technologii renowacji.
          </p>
        </div>

        {/* RIGHT SIDE – CONTACT FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Imię i nazwisko"
            required
            className="w-full"
            size="lg"
          />

          <Input
            label="Email"
            type="email"
            required
            className="w-full"
            size="lg"
          />

          <Input
            label="Telefon"
            type="text"
            className="w-full"
            size="lg"
          />

          <Textarea
            label="Wiadomość"
            required
            className="w-full"
            minRows={4}
          />

          <Button
            type="submit"
            size="lg"
            color="warning"
            className="text-white px-10 py-6 rounded-lg"
            isLoading={loading}
          >
            Wyślij wiadomość
          </Button>
        </form>
      </div>
    </section>
  );
}
