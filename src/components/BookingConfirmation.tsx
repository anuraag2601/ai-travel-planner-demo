import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, Calendar, MapPin, Users, Download, 
  Share2, Mail, MessageCircle, Home, Sparkles
} from 'lucide-react';
import { useTravelPlanner } from '../context/TravelPlannerContext';

const BookingConfirmation: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useTravelPlanner();
  const [showSuccess, setShowSuccess] = useState(false);

  const itinerary = state.itinerary;
  const tripBasics = state.tripBasics;

  useEffect(() => {
    // Show success animation after component mounts
    const timer = setTimeout(() => {
      setShowSuccess(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!itinerary || !tripBasics) {
    navigate('/');
    return null;
  }

  const handleStartOver = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-ocean-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: showSuccess ? 1 : 0, opacity: showSuccess ? 1 : 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            delay: 0.2 
          }}
          className="text-center mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-24 h-24 border-4 border-green-200 rounded-full"
            />
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Trip Booked Successfully! 🎉
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Your personalized adventure to {itinerary.destination} is all set. Get ready for an amazing journey!
          </motion.p>
        </motion.div>

        {/* Trip Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="card p-8 mb-8"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Trip Summary</h2>
            <p className="text-gray-600">Your perfect itinerary is saved and ready</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-ocean-600" />
                <div>
                  <p className="font-medium text-gray-900">Destination</p>
                  <p className="text-gray-600">{itinerary.destination}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-ocean-600" />
                <div>
                  <p className="font-medium text-gray-900">Travel Dates</p>
                  <p className="text-gray-600">
                    {itinerary.startDate} - {itinerary.endDate}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-ocean-600" />
                <div>
                  <p className="font-medium text-gray-900">Travel Party</p>
                  <p className="text-gray-600 capitalize">{tripBasics.partyType}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-ocean-600" />
                <div>
                  <p className="font-medium text-gray-900">Total Cost</p>
                  <p className="text-gray-600">{itinerary.totalCost}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-ocean-50 border border-green-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-green-800 mb-2">🎯 Personalization Summary</h3>
            <p className="text-green-700">{itinerary.personalization}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-2xl font-bold text-ocean-600">{itinerary.days.length}</p>
              <p className="text-sm text-gray-600">Days of Adventure</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-2xl font-bold text-sunset-600">
                {itinerary.days.reduce((acc, day) => 
                  acc + [day.morning, day.afternoon, day.evening].filter(Boolean).length, 0
                )}
              </p>
              <p className="text-sm text-gray-600">Activities Planned</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-2xl font-bold text-emerald-600">
                {itinerary.hotels.length + itinerary.restaurants.length}
              </p>
              <p className="text-sm text-gray-600">Recommendations</p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="grid md:grid-cols-2 gap-4 mb-8"
        >
          <button className="btn-primary inline-flex items-center justify-center gap-2 py-4">
            <Download className="w-5 h-5" />
            Download Itinerary PDF
          </button>
          
          <button className="btn-secondary inline-flex items-center justify-center gap-2 py-4">
            <Share2 className="w-5 h-5" />
            Share with Travel Companions
          </button>
        </motion.div>

        {/* Additional Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="card p-6 mb-8"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
              <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-blue-900">Confirmation Email Sent</p>
                <p className="text-sm text-blue-700">
                  Check your inbox for detailed booking confirmations and travel documents.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <MessageCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <p className="font-medium text-green-900">24/7 Travel Support</p>
                <p className="text-sm text-green-700">
                  Our travel experts are available anytime to help with changes or questions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
              <Sparkles className="w-5 h-5 text-purple-600 mt-0.5" />
              <div>
                <p className="font-medium text-purple-900">Pre-Trip Planning</p>
                <p className="text-sm text-purple-700">
                  We'll send you helpful tips and local insights as your travel date approaches.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="text-center space-y-4"
        >
          <button
            onClick={handleStartOver}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Plan Another Trip
          </button>
          
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Thank you for choosing our AI travel planner. We hope you have an incredible journey!
          </p>
        </motion.div>

        {/* Floating Celebration Elements */}
        {showSuccess && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="fixed pointer-events-none text-2xl"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight + 50,
                  opacity: 0,
                  rotate: 0 
                }}
                animate={{ 
                  y: -50,
                  opacity: [0, 1, 1, 0],
                  rotate: 360
                }}
                transition={{ 
                  duration: 3,
                  delay: Math.random() * 2,
                  ease: "easeOut"
                }}
              >
                {['🎉', '✨', '🎊', '🌟'][Math.floor(Math.random() * 4)]}
              </motion.div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default BookingConfirmation; 