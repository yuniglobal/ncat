import React from 'react';

interface Guest {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

const guests: Guest[] = [
  {
    id: 1,
    name: "Alexandra Smith",
    role: "Founder and Chief Operations Officer",
    imageUrl: "https://images.pexels.com/photos/2811089/pexels-photo-2811089.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=1",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Founder and Chief Executive Officer",
    imageUrl: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=1",
  },
  {
    id: 3,
    name: "Erik Longman",
    role: "Chief Process and Innovation Officer",
    imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=1",
  },
  {
    id: 4,
    name: "Matthew Foster",
    role: "Chief Sales Officer",
    imageUrl: "https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=1",
  },
];

const GuestGrid: React.FC = () => {
  return (
    <div className="w-full py-12">
      <div className="text-center mb-10">
        <h2 className="text-[#f0abfc] text-3xl md:text-4xl font-bold drop-shadow-md">Our Guests</h2>
        <p className="text-white/80 mt-2 drop-shadow-sm">Meet the inspiring guests joining our event</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto px-4">
        {guests.map((guest) => (
          <div
            key={guest.id}
            className="bg-gray-900 rounded-xl overflow-hidden border border-white/20 shadow-lg hover:border-white/30 transition-colors duration-200"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-800">
              <img
                src={guest.imageUrl}
                alt={guest.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-white font-semibold text-base sm:text-lg truncate">
                {guest.name}
              </h3>
              <p className="text-gray-200 text-sm sm:text-base mt-1 line-clamp-2">
                {guest.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestGrid;