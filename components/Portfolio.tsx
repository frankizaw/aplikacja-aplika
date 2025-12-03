"use client";

export default function Portfolio() {
  const items = [
    {
      title: "Renowacja ołtarza w kościele parafialnym",
      img: "/portfolio-1.jpg",
    },
    {
      title: "Konserwacja ambony barokowej",
      img: "/portfolio-2.jpg",
    },
    {
      title: "Rekonstrukcja chrzcielnicy drewnianej",
      img: "/portfolio-3.jpg",
    },
    {
      title: "Renowacja rzeźb kamiennych",
      img: "/portfolio-4.jpg",
    },
    {
      title: "Oczyszczanie i stabilizacja sztukaterii",
      img: "/portfolio-5.jpg",
    },
    {
      title: "Renowacja elewacji neogotyckiego kościoła",
      img: "/portfolio-6.jpg",
    },
  ];

  return (
    <section id="realizacje" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-16">
        Wybrane Realizacje
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {items.map((item, i) => (
          <div key={i} className="group">
            <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 group-hover:text-yellow-700 transition-colors">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
