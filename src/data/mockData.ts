import { Destination, TravelStyle, Preference, Activity, Hotel, Restaurant, Flight, Itinerary } from '../types';

export const destinations: Destination[] = [
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop&auto=format',
    popular: true
  },
  {
    id: 'paris',
    name: 'Paris',
    country: 'France', 
    image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&h=600&fit=crop&auto=format',
    popular: true
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop&auto=format',
    popular: true
  },
  {
    id: 'nyc',
    name: 'New York City',
    country: 'USA',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop&auto=format',
    popular: true
  },
  {
    id: 'london',
    name: 'London',
    country: 'UK',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop&auto=format',
    popular: true
  },
  {
    id: 'rome',
    name: 'Rome',
    country: 'Italy',
    image: 'https://images.unsplash.com/photo-1552832230-c0197040c963?w=800&h=600&fit=crop&auto=format',
    popular: true
  }
];

export const travelStyles: TravelStyle[] = [
  {
    id: 'adventure',
    name: 'Adventure Seeker',
    icon: '🏔️',
    description: 'Thrilling activities and outdoor experiences'
  },
  {
    id: 'culture',
    name: 'Culture Enthusiast',
    icon: '🏛️',
    description: 'Museums, historical sites, and local traditions'
  },
  {
    id: 'foodie',
    name: 'Foodie Explorer',
    icon: '🍜',
    description: 'Culinary experiences and local cuisine'
  },
  {
    id: 'beach',
    name: 'Beach Lover',
    icon: '🏖️',
    description: 'Relaxation by the ocean and water activities'
  },
  {
    id: 'city',
    name: 'City Explorer',
    icon: '🏙️',
    description: 'Urban adventures and metropolitan experiences'
  },
  {
    id: 'nature',
    name: 'Nature Lover',
    icon: '🌲',
    description: 'Natural landscapes and wildlife experiences'
  },
  {
    id: 'history',
    name: 'History Buff',
    icon: '📚',
    description: 'Historical sites and ancient civilizations'
  },
  {
    id: 'nightlife',
    name: 'Nightlife Enthusiast',
    icon: '🌃',
    description: 'Evening entertainment and social scenes'
  }
];

export const experiencePreferences: Preference[] = [
  {
    id: 'live_shows',
    name: 'Live Shows & Entertainment',
    icon: '🎭',
    category: 'experience'
  },
  {
    id: 'markets',
    name: 'Local Markets & Shopping',
    icon: '🛍️',
    category: 'experience'
  },
  {
    id: 'museums',
    name: 'Museums & Galleries',
    icon: '🎨',
    category: 'experience'
  },
  {
    id: 'outdoor',
    name: 'Outdoor Activities',
    icon: '⛰️',
    category: 'experience'
  },
  {
    id: 'peaceful',
    name: 'Quiet/Peaceful Spots',
    icon: '🧘',
    category: 'experience'
  },
  {
    id: 'attractions',
    name: 'Popular Tourist Attractions',
    icon: '📸',
    category: 'experience'
  },
  {
    id: 'hidden_gems',
    name: 'Hidden Gems',
    icon: '💎',
    category: 'experience'
  },
  {
    id: 'photography',
    name: 'Photography Spots',
    icon: '📷',
    category: 'experience'
  }
];

export const tokyoActivities: Activity[] = [
  {
    id: 'tsukiji_market',
    name: 'Tsukiji Outer Market Food Tour',
    description: 'Early morning exploration of Tokyo\'s famous fish market with fresh sushi breakfast',
    image: 'https://images.unsplash.com/photo-1515942661069-5c4e07136408?w=600&h=400&fit=crop&auto=format',
    category: 'foodie',
    tags: ['markets', 'foodie', 'morning'],
    whyRecommended: 'Perfect for your love of local markets and authentic culinary experiences',
    duration: '3 hours',
    cost: '$45-60',
    timeOfDay: 'morning',
    location: 'Tsukiji, Tokyo',
    rating: 4.8
  },
  {
    id: 'senso_ji',
    name: 'Senso-ji Temple & Asakusa District',
    description: 'Visit Tokyo\'s oldest temple and explore traditional shopping streets',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop&auto=format',
    category: 'culture',
    tags: ['culture', 'history', 'peaceful', 'photography'],
    whyRecommended: 'Combines your interest in history with peaceful temple atmosphere',
    duration: '2-3 hours',
    cost: 'Free (optional donations)',
    timeOfDay: 'afternoon',
    location: 'Asakusa, Tokyo',
    rating: 4.7
  },
  {
    id: 'shibuya_crossing',
    name: 'Shibuya Crossing & Sky View',
    description: 'Experience the world\'s busiest crossing and panoramic city views',
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&h=400&fit=crop&auto=format',
    category: 'city',
    tags: ['city', 'attractions', 'photography'],
    whyRecommended: 'Iconic Tokyo experience for city explorers and photography enthusiasts',
    duration: '1-2 hours',
    cost: '$10-15',
    timeOfDay: 'evening',
    location: 'Shibuya, Tokyo',
    rating: 4.6
  },
  {
    id: 'robot_restaurant',
    name: 'Robot Restaurant Show',
    description: 'Spectacular dinner show with robots, lasers, and entertainment',
    image: 'https://images.unsplash.com/photo-1590778578846-64e1c8be6b39?w=600&h=400&fit=crop&auto=format',
    category: 'nightlife',
    tags: ['live_shows', 'entertainment', 'unique'],
    whyRecommended: 'Unique Japanese entertainment experience perfect for show lovers',
    duration: '2 hours',
    cost: '$70-90',
    timeOfDay: 'evening',
    location: 'Shinjuku, Tokyo',
    rating: 4.5
  }
];

export const tokyoHotels: Hotel[] = [
  {
    id: 'park_hyatt_tokyo',
    name: 'Park Hyatt Tokyo',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&auto=format',
    rating: 4.8,
    price: '$450-650/night',
    whyRecommended: 'Luxury location in Shinjuku with stunning city views, perfect for your preference for quality experiences',
    amenities: ['City Views', 'Spa', 'Fine Dining', 'Fitness Center']
  },
  {
    id: 'aman_tokyo',
    name: 'Aman Tokyo',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop&auto=format',
    rating: 4.9,
    price: '$800-1200/night',
    whyRecommended: 'Serene urban oasis combining traditional Japanese aesthetics with modern luxury',
    amenities: ['Traditional Design', 'Spa', 'Peaceful Gardens', 'Premium Service']
  }
];

export const tokyoRestaurants: Restaurant[] = [
  {
    id: 'sukiyabashi_jiro',
    name: 'Sukiyabashi Jiro',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop&auto=format',
    cuisine: 'Sushi',
    rating: 4.9,
    priceRange: '$300-400',
    whyRecommended: 'World-renowned sushi master, perfect for your sophisticated culinary interests'
  },
  {
    id: 'narisawa',
    name: 'Narisawa',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&auto=format',
    cuisine: 'Modern Japanese',
    rating: 4.7,
    priceRange: '$200-300',
    whyRecommended: 'Innovative cuisine blending nature and gastronomy, ideal for adventurous foodies'
  }
];

export const tokyoFlights: Flight[] = [
  {
    id: 'ana_direct',
    airline: 'ANA',
    departure: '6:30 PM LAX',
    arrival: '10:15 AM+1 NRT',
    price: '$1,248',
    duration: '11h 45m'
  },
  {
    id: 'jal_direct',
    airline: 'JAL',
    departure: '11:50 AM LAX',
    arrival: '3:35 PM+1 NRT',
    price: '$1,195',
    duration: '11h 45m'
  }
];

export const sampleItinerary: Itinerary = {
  id: 'tokyo_adventure',
  destination: 'Tokyo, Japan',
  startDate: '2024-03-15',
  endDate: '2024-03-19',
  personalization: 'Based on your love for live shows, local markets, and cultural experiences',
  days: [
    {
      day: 1,
      date: '2024-03-15',
      morning: tokyoActivities[0], // Tsukiji Market
      afternoon: tokyoActivities[1], // Senso-ji Temple
      evening: tokyoActivities[3] // Robot Restaurant
    },
    {
      day: 2, 
      date: '2024-03-16',
      morning: {
        id: 'meiji_shrine',
        name: 'Meiji Shrine & Harajuku',
        description: 'Peaceful shrine visit followed by trendy Harajuku exploration',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop&auto=format',
        category: 'culture',
        tags: ['peaceful', 'culture', 'photography'],
        whyRecommended: 'Perfect blend of tranquility and vibrant culture',
        duration: '3 hours',
        cost: 'Free',
        timeOfDay: 'morning',
        location: 'Shibuya, Tokyo',
        rating: 4.6
      },
      afternoon: {
        id: 'teamlab',
        name: 'teamLab Borderless',
        description: 'Digital art museum with interactive installations',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&auto=format',
        category: 'art',
        tags: ['museums', 'photography', 'unique'],
        whyRecommended: 'Innovative art experience perfect for photography enthusiasts',
        duration: '4 hours',
        cost: '$35',
        timeOfDay: 'afternoon',
        location: 'Odaiba, Tokyo',
        rating: 4.8
      },
      evening: tokyoActivities[2] // Shibuya Crossing
    }
  ],
  hotels: tokyoHotels,
  restaurants: tokyoRestaurants,
  flights: tokyoFlights,
  totalCost: '$2,850 - $3,600'
}; 