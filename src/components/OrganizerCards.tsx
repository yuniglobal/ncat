import React from 'react';

const OrganizerCards: React.FC = () => {
  const cards = [
    { title: 'Yuni', name: 'Yuni', logo: 'src/assets/logo.png' },
    { title: 'Stellar', name: 'Stellar Events', logo: '/logos/stellar-logo.png' },
  ];

  return (
    <div className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-purple-400 tracking-widest text-sm font-semibold mb-2">
            EVENT PRODUCERS
          </p>
          <h1 className="text-4xl md:text-5xl text-[#f0abfc] font-extrabold tracking-tight">
            Organized by
            <span className="text-[#f0abfc] block md:inline md:ml-3">Premium Partners</span>
          </h1>
          <div className="w-24 h-0.5 bg-purple-400 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {cards.map((card) => (
            <div
              key={card.title}
              className="w-full sm:w-80 md:w-96 h-64 md:h-80 flex-shrink-0 relative"
            >
              <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl shadow-lg hover:border-white/20 transition-colors duration-200 overflow-hidden flex flex-col items-center justify-center p-6">
                {/* Logo */}
                <div className="mb-8 flex items-center justify-center flex-shrink-0 h-60">
                  <img
                    src={card.logo}
                    alt={`${card.title} logo`}
                    className="max-w-full max-h-full object-contain drop-shadow-lg"
                  />
                </div>

                {/* Title */}
                <div className="text-center z-10">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {card.title}
                  </h2>
                  <div className="flex items-center justify-center gap-2 text-gray-300">
                    <span className="text-sm font-medium">{card.name}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizerCards;