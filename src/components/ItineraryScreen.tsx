import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, MapPin, Clock, DollarSign, Star, Heart, Share2, 
  Download, Plane, Hotel, UtensilsCrossed, ExternalLink,
  ChevronDown, ChevronUp, Users
} from 'lucide-react';
import { useTravelPlanner } from '../context/TravelPlannerContext';
import { Activity } from '../types';

const ItineraryScreen: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useTravelPlanner();
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [activeTab, setActiveTab] = useState<'itinerary' | 'hotels' | 'restaurants'>('itinerary');

  const itinerary = state.itinerary;

  if (!itinerary) {
    navigate('/');
    return null;
  }

  const handleBookTrip = () => {
    navigate('/booking-confirmation');
  };

  const ActivityCard: React.FC<{ activity: Activity; timeOfDay: string }> = ({ activity, timeOfDay }) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card p-6 hover:shadow-xl transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/3">
            <div className="relative w-full h-48 md:h-32 rounded-lg overflow-hidden bg-gray-100">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-ocean-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              {!imageError ? (
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoading(false)}
                  onError={() => {
                    setImageError(true);
                    setImageLoading(false);
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-ocean-100 to-sunset-100 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-2xl mb-1">{activity.category === 'foodie' ? '🍜' : activity.category === 'culture' ? '🏛️' : '📍'}</div>
                    <div className="text-xs">Image unavailable</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{activity.name}</h3>
              <span className="text-xs bg-ocean-100 text-ocean-700 px-2 py-1 rounded-full capitalize">
                {timeOfDay}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-3">{activity.description}</p>
            
            <div className="bg-sunset-50 border border-sunset-200 rounded-lg p-3 mb-3">
              <p className="text-sunset-700 text-sm font-medium">
                💡 Why this fits you: {activity.whyRecommended}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {activity.duration}
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                {activity.cost}
              </div>
              {activity.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {activity.location}
                </div>
              )}
              {activity.rating && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {activity.rating}
                </div>
              )}
            </div>

            <div className="flex gap-2 mt-3">
              {activity.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const HotelCard: React.FC<{ hotel: typeof itinerary.hotels[0] }> = ({ hotel }) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card p-6"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/3">
            <div className="relative w-full h-48 md:h-32 rounded-lg overflow-hidden bg-gray-100">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-ocean-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              {!imageError ? (
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoading(false)}
                  onError={() => {
                    setImageError(true);
                    setImageLoading(false);
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-ocean-100 to-sunset-100 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-2xl mb-1">🏨</div>
                    <div className="text-xs">Image unavailable</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{hotel.name}</h3>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-600">{hotel.rating}</span>
              </div>
            </div>
            
            <p className="text-sunset-700 font-medium text-sm mb-2">{hotel.whyRecommended}</p>
            <p className="text-lg font-semibold text-gray-900 mb-3">{hotel.price}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {hotel.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="text-xs bg-ocean-100 text-ocean-700 px-2 py-1 rounded-full"
                >
                  {amenity}
                </span>
              ))}
            </div>
            
            <button className="btn-secondary text-sm">
              Book Now
              <ExternalLink className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  const RestaurantCard: React.FC<{ restaurant: typeof itinerary.restaurants[0] }> = ({ restaurant }) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card p-6"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/3">
            <div className="relative w-full h-48 md:h-32 rounded-lg overflow-hidden bg-gray-100">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-ocean-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              {!imageError ? (
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoading(false)}
                  onError={() => {
                    setImageError(true);
                    setImageLoading(false);
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-ocean-100 to-sunset-100 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-2xl mb-1">🍽️</div>
                    <div className="text-xs">Image unavailable</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{restaurant.name}</h3>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-600">{restaurant.rating}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-600">{restaurant.cuisine}</span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm font-medium text-gray-900">{restaurant.priceRange}</span>
            </div>
            
            <p className="text-sunset-700 text-sm mb-4">{restaurant.whyRecommended}</p>
            
            <button className="btn-secondary text-sm">
              Make Reservation
              <ExternalLink className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-50 via-white to-sunset-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{itinerary.destination}</h1>
              <p className="text-lg text-gray-600 mt-1">
                {itinerary.startDate} - {itinerary.endDate}
              </p>
              <p className="text-sunset-700 font-medium mt-2">
                🎯 {itinerary.personalization}
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <button className="btn-secondary inline-flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Save
              </button>
              <button className="btn-secondary inline-flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button className="btn-secondary inline-flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'itinerary', label: 'Daily Itinerary', icon: Calendar },
              { id: 'hotels', label: 'Hotels', icon: Hotel },
              { id: 'restaurants', label: 'Restaurants', icon: UtensilsCrossed }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-ocean-500 text-ocean-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'itinerary' && (
          <div className="space-y-6">
            {itinerary.days.map((day) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: day.day * 0.1 }}
                className="card overflow-hidden"
              >
                <button
                  onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        Day {day.day} - {day.date}
                      </h2>
                      <p className="text-gray-600 mt-1">
                        {[day.morning, day.afternoon, day.evening].filter(Boolean).length} activities planned
                      </p>
                    </div>
                    {expandedDay === day.day ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {expandedDay === day.day && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-200"
                  >
                    <div className="p-6 space-y-6">
                      {day.morning && (
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                            🌅 Morning
                          </h3>
                          <ActivityCard activity={day.morning} timeOfDay="morning" />
                        </div>
                      )}
                      
                      {day.afternoon && (
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                            ☀️ Afternoon
                          </h3>
                          <ActivityCard activity={day.afternoon} timeOfDay="afternoon" />
                        </div>
                      )}
                      
                      {day.evening && (
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                            🌙 Evening
                          </h3>
                          <ActivityCard activity={day.evening} timeOfDay="evening" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'hotels' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Recommended Hotels</h2>
              <p className="text-gray-600">Carefully selected based on your preferences and budget</p>
            </div>
            {itinerary.hotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        )}

        {activeTab === 'restaurants' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Culinary Experiences</h2>
              <p className="text-gray-600">Handpicked restaurants that match your food preferences</p>
            </div>
            {itinerary.restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </div>

      {/* Booking CTA */}
      <div className="bg-gradient-to-r from-ocean-600 to-sunset-600 py-12">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Book Your Perfect Trip?
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Total estimated cost: <span className="font-bold">{itinerary.totalCost}</span>
            </p>
            <p className="text-white/80 mb-8">
              Includes activities, accommodation suggestions, and dining recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBookTrip}
                className="bg-white text-ocean-700 hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg inline-flex items-center justify-center gap-3"
              >
                <Plane className="w-5 h-5" />
                Book This Trip
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 text-lg inline-flex items-center justify-center gap-3">
                <Users className="w-5 h-5" />
                Customize Further
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryScreen; 