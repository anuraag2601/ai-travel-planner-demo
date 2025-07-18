import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Users, Calendar, Sparkles } from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleStartPlanning = () => {
    navigate('/trip-basics');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-50 via-white to-sunset-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 hero-pattern opacity-30"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                <span className="gradient-text">AI That Knows</span>
                <br />
                How You Like to Travel
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Experience travel planning reimagined. Our AI creates personalized itineraries that match your unique style, preferences, and interests.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <button
                onClick={handleStartPlanning}
                className="btn-primary text-lg md:text-xl px-12 py-4 inline-flex items-center gap-3"
              >
                <Sparkles className="w-6 h-6" />
                Start Planning Your Perfect Trip
              </button>
            </motion.div>
          </div>

          {/* Hero Image/Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=700&fit=crop&auto=format"
                alt="Beautiful travel destinations collage"
                className="w-full h-96 md:h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=700&fit=crop&auto=format';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm opacity-80">Discover your next adventure</p>
                <p className="text-2xl font-semibold">Personalized just for you</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Travel Planning?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skip the hours of research. Get a complete, personalized itinerary in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Understands Your Style
              </h3>
              <p className="text-gray-600">
                Our AI learns your travel preferences, from adventure-seeking to cultural immersion, creating trips that truly fit you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-sunset-400 to-sunset-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Discovers Hidden Gems
              </h3>
              <p className="text-gray-600">
                Access local insights and off-the-beaten-path experiences that typical guidebooks miss.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Optimizes Your Time
              </h3>
              <p className="text-gray-600">
                Smart scheduling that maximizes your experience while respecting your pace and preferences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ocean-600 to-sunset-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Perfect Trip?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who've discovered the magic of AI-powered trip planning.
            </p>
            <button
              onClick={handleStartPlanning}
              className="bg-white text-ocean-700 hover:bg-gray-50 font-semibold py-4 px-12 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg inline-flex items-center gap-3"
            >
              <Sparkles className="w-6 h-6" />
              Get Started Now - It's Free
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;