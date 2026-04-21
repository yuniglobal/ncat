import React from 'react';

interface Speaker {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Dr. Emily Chen",
    role: "AI Research Director",
    imageUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=1",
  },
  {
    id: 2,
    name: "Michael Torres",
    role: "Lead Product Designer",
    imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=1",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Head of Marketing",
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=1",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Senior Software Architect",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=1",
  },
];

const SpeakerGrid: React.FC = () => {
  return (
    <div className="w-full py-12">
      <div className="text-center mb-10">
        <h2 className="text-[#f0abfc] text-3xl md:text-4xl font-bold drop-shadow-md">Our Speakers</h2>
        <p className="text-white/80 mt-2 drop-shadow-sm">Learn from industry-leading experts</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto px-4">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="bg-gray-900 rounded-xl overflow-hidden border border-white/20 shadow-lg hover:border-white/30 transition-colors duration-200"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-800">
              <img
                src={speaker.imageUrl}
                alt={speaker.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-white font-semibold text-base sm:text-lg truncate">
                {speaker.name}
              </h3>
              <p className="text-gray-200 text-sm sm:text-base mt-1 line-clamp-2">
                {speaker.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakerGrid;