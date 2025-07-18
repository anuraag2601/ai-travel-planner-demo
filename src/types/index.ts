export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  popular: boolean;
}

export interface TripBasics {
  destination: string;
  startDate: Date | null;
  endDate: Date | null;
  budget: number;
  partyType: 'solo' | 'couple' | 'family' | 'friends';
  duration: number;
}

export interface TravelStyle {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Preference {
  id: string;
  name: string;
  icon: string;
  category: 'experience' | 'crowd' | 'activity';
}

export interface UserPreferences {
  travelStyles: string[];
  experiences: string[];
  crowdPreference: number; // 0-100 scale
  touristyPreference: number; // 0-100 scale
  plannedPreference: number; // 0-100 scale
  luxuryPreference: number; // 0-100 scale
  activityLevel: 'relaxed' | 'moderate' | 'action-packed';
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  whyRecommended: string;
  duration: string;
  cost: string;
  timeOfDay: 'morning' | 'afternoon' | 'evening';
  location?: string;
  rating?: number;
}

export interface DayItinerary {
  day: number;
  date: string;
  morning?: Activity;
  afternoon?: Activity;
  evening?: Activity;
}

export interface Hotel {
  id: string;
  name: string;
  image: string;
  rating: number;
  price: string;
  whyRecommended: string;
  amenities: string[];
}

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  priceRange: string;
  whyRecommended: string;
}

export interface Flight {
  id: string;
  airline: string;
  departure: string;
  arrival: string;
  price: string;
  duration: string;
}

export interface Itinerary {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
  personalization: string;
  days: DayItinerary[];
  hotels: Hotel[];
  restaurants: Restaurant[];
  flights: Flight[];
  totalCost: string;
}

export interface ProcessingStep {
  message: string;
  completed: boolean;
} 