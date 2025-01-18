import React from 'react';
import { useTranslation } from 'react-i18next';

export function Cast() {
  const { t } = useTranslation();

  const castMembers = [
    {
      name: "Víctor Oliveira",
      role: t('cast.characters.priest.role'),
      description: t('cast.characters.priest.description'),
      image: "/VicOli.JPG"
    },
    {
      name: "Antonio Monroi",
      role: t('cast.characters.oldMan.role'),
      description: t('cast.characters.oldMan.description'),
      image: "https://www.cfrepresentaciones.com/page/images/2019/06/17/antonio1.jpg"
    }
  ];

  return (
    <section id="cast" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light tracking-[0.2em] text-center text-white mb-4">
            {t('cast.title')}
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto tracking-wider">
            {t('cast.subtitle')}
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {castMembers.map((member) => (
              <div key={member.name} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-red-500 mb-2">{member.role}</p>
                <p className="text-gray-400 whitespace-pre-line">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}