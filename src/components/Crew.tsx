import React from 'react';
import { useTranslation } from 'react-i18next';

export function Crew() {
  const { t } = useTranslation();

  const crewMembers = [
    {
      name: "Javd Ramírez",
      role: t('crew.members.director.role'),
      description: t('crew.members.director.description'),
      image: "/Sapo.png"
    },
    {
      name: "Ricardo Soto",
      role: t('crew.members.producer.role'),
      description: t('crew.members.producer.description'),
      image: "/RSoto.jpg"
    },
    {
      name: "Darío Giordano",
      role: t('crew.members.cinematographer.role'),
      description: t('crew.members.cinematographer.description'),
      image: "/Dario.jpg"
    }
  ];

  return (
    <section id="crew" className="py-32 bg-gradient-to-b from-black to-stone-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light tracking-[0.2em] text-center text-white mb-4">
            {t('crew.title')}
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto tracking-wider">
            {t('crew.subtitle')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {crewMembers.map((member) => (
              <div key={member.name} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-red-500 mb-2">{member.role}</p>
                <p className="text-gray-400">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}