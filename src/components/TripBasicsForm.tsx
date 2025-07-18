import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, DollarSign, Users, ArrowRight, ArrowLeft } from 'lucide-react';
import { useTravelPlanner } from '../context/TravelPlannerContext';
import { destinations } from '../data/mockData';
import { TripBasics } from '../types';

const TripBasicsForm: React.FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useTravelPlanner();
  
  const [formData, setFormData] = useState<TripBasics>({
    destination: '',
    startDate: null,
    endDate: null,
    budget: 2500,
    partyType: 'couple',
    duration: 0
  });

  const [showDestinations, setShowDestinations] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleDestinationSelect = (destinationName: string) => {
    setFormData(prev => ({ ...prev, destination: destinationName }));
    setShowDestinations(false);
    if (errors.destination) {
      setErrors(prev => ({ ...prev, destination: '' }));
    }
  };

  const handleDateChange = (field: 'startDate' | 'endDate', value: string) => {
    const date = new Date(value);
    setFormData(prev => {
      const updated = { ...prev, [field]: date };
      
      // Calculate duration if both dates are set
      if (updated.startDate && updated.endDate) {
        const timeDiff = updated.endDate.getTime() - updated.startDate.getTime();
        updated.duration = Math.ceil(timeDiff / (1000 * 3600 * 24));
      }
      
      return updated;
    });
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.destination) {
      newErrors.destination = 'Please select a destination';
    }
    if (!formData.startDate) {
      newErrors.startDate = 'Please select a start date';
    }
    if (!formData.endDate) {
      newErrors.endDate = 'Please select an end date';
    }
    if (formData.startDate && formData.endDate && formData.endDate <= formData.startDate) {
      newErrors.endDate = 'End date must be after start date';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      dispatch({ type: 'SET_TRIP_BASICS', payload: formData });
      navigate('/preferences');
    }
  };

  const formatDate = (date: Date | null): string => {
    if (!date) return '';
    return date.toISOString().split('T')[0];
  };

  const partyTypes = [
    { id: 'solo', label: 'Solo Travel', icon: '🧳', description: 'Just me' },
    { id: 'couple', label: 'Couple', icon: '💑', description: 'Two travelers' },
    { id: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦', description: 'Family trip' },
    { id: 'friends', label: 'Friends', icon: '👫', description: 'Group of friends' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-50 via-white to-sunset-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-ocean-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <span className="ml-2 text-sm font-medium text-ocean-600">Trip Basics</span>
            </div>
            <div className="w-16 h-1 bg-gray-200 rounded"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="ml-2 text-sm font-medium text-gray-500">Preferences</span>
            </div>
            <div className="w-16 h-1 bg-gray-200 rounded"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <span className="ml-2 text-sm font-medium text-gray-500">Itinerary</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's Plan Your Perfect Trip
            </h1>
            <p className="text-lg text-gray-600">
              Tell us the basics and we'll create a personalized itinerary just for you.
            </p>
          </div>

          <div className="space-y-8">
            {/* Destination */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Where would you like to go?
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowDestinations(!showDestinations)}
                  className={`w-full p-4 text-left border-2 rounded-xl flex items-center justify-between transition-colors ${
                    errors.destination ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-ocean-300'
                  }`}
                >
                  <span className={formData.destination ? 'text-gray-900' : 'text-gray-500'}>
                    {formData.destination || 'Select a destination'}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </button>
                
                {showDestinations && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-64 overflow-y-auto"
                  >
                    {destinations.map((destination) => (
                      <button
                        key={destination.id}
                        onClick={() => handleDestinationSelect(destination.name)}
                        className="w-full p-4 text-left hover:bg-gray-50 flex items-center space-x-3 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                          <img
                            src={destination.image}
                            alt={destination.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                              (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-ocean-100 to-sunset-100 flex items-center justify-center text-xl">🌍</div>';
                            }}
                          />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{destination.name}</div>
                          <div className="text-sm text-gray-500">{destination.country}</div>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
              {errors.destination && (
                <p className="mt-2 text-sm text-red-600">{errors.destination}</p>
              )}
            </div>

            {/* Dates */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Start Date
                </label>
                <input
                  type="date"
                  value={formatDate(formData.startDate)}
                  onChange={(e) => handleDateChange('startDate', e.target.value)}
                  className={`w-full p-4 border-2 rounded-xl transition-colors ${
                    errors.startDate ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-ocean-300'
                  }`}
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.startDate && (
                  <p className="mt-2 text-sm text-red-600">{errors.startDate}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  End Date
                </label>
                <input
                  type="date"
                  value={formatDate(formData.endDate)}
                  onChange={(e) => handleDateChange('endDate', e.target.value)}
                  className={`w-full p-4 border-2 rounded-xl transition-colors ${
                    errors.endDate ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-ocean-300'
                  }`}
                  min={formData.startDate ? formatDate(formData.startDate) : new Date().toISOString().split('T')[0]}
                />
                {errors.endDate && (
                  <p className="mt-2 text-sm text-red-600">{errors.endDate}</p>
                )}
              </div>
            </div>

            {formData.duration > 0 && (
              <div className="bg-ocean-50 p-4 rounded-xl">
                <p className="text-ocean-700 font-medium">
                  Trip Duration: {formData.duration} {formData.duration === 1 ? 'day' : 'days'}
                </p>
              </div>
            )}

            {/* Budget */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <DollarSign className="w-4 h-4 inline mr-2" />
                Budget Range (USD)
              </label>
              <div className="space-y-4">
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="250"
                  value={formData.budget}
                  onChange={(e) => setFormData(prev => ({ ...prev, budget: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>$500</span>
                  <span className="font-semibold text-ocean-600 text-lg">
                    ${formData.budget.toLocaleString()}
                  </span>
                  <span>$10,000+</span>
                </div>
              </div>
            </div>

            {/* Party Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <Users className="w-4 h-4 inline mr-2" />
                Who's traveling?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {partyTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setFormData(prev => ({ ...prev, partyType: type.id as any }))}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      formData.partyType === type.id
                        ? 'border-ocean-500 bg-ocean-50 text-ocean-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{type.icon}</div>
                    <div className="font-medium text-sm">{type.label}</div>
                    <div className="text-xs text-gray-500 mt-1">{type.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between pt-8 mt-8 border-t border-gray-200">
            <button
              onClick={() => navigate('/')}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            
            <button
              onClick={handleNext}
              className="btn-primary inline-flex items-center gap-2"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TripBasicsForm; 