import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Zap, Coffee, Mountain } from 'lucide-react';
import { useTravelPlanner } from '../context/TravelPlannerContext';
import { travelStyles, experiencePreferences } from '../data/mockData';
import { UserPreferences } from '../types';

const PreferencesForm: React.FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useTravelPlanner();
  
  const [preferences, setPreferences] = useState<UserPreferences>({
    travelStyles: [],
    experiences: [],
    crowdPreference: 50,
    touristyPreference: 30,
    plannedPreference: 70,
    luxuryPreference: 60,
    activityLevel: 'moderate'
  });

  const handleTravelStyleToggle = (styleId: string) => {
    setPreferences(prev => ({
      ...prev,
      travelStyles: prev.travelStyles.includes(styleId)
        ? prev.travelStyles.filter(id => id !== styleId)
        : [...prev.travelStyles, styleId]
    }));
  };

  const handleExperienceToggle = (experienceId: string) => {
    setPreferences(prev => ({
      ...prev,
      experiences: prev.experiences.includes(experienceId)
        ? prev.experiences.filter(id => id !== experienceId)
        : [...prev.experiences, experienceId]
    }));
  };

  const handleSliderChange = (field: keyof UserPreferences, value: number) => {
    setPreferences(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    dispatch({ type: 'SET_PREFERENCES', payload: preferences });
    navigate('/ai-processing');
  };

  const activityLevels = [
    {
      id: 'relaxed',
      label: 'Relaxed Pace',
      icon: <Coffee className="w-6 h-6" />,
      description: '2-3 activities per day, plenty of downtime'
    },
    {
      id: 'moderate',
      label: 'Moderate Activity',
      icon: <Zap className="w-6 h-6" />,
      description: '4-5 activities per day, balanced schedule'
    },
    {
      id: 'action-packed',
      label: 'Action-Packed',
      icon: <Mountain className="w-6 h-6" />,
      description: '6+ activities per day, maximize experiences'
    }
  ];

  const sliders = [
    {
      field: 'crowdPreference' as keyof UserPreferences,
      label: 'Crowd Preference',
      leftLabel: 'Quiet & Peaceful',
      rightLabel: 'Bustling & Lively',
      value: preferences.crowdPreference
    },
    {
      field: 'touristyPreference' as keyof UserPreferences,
      label: 'Experience Type',
      leftLabel: 'Hidden Gems',
      rightLabel: 'Popular Attractions',
      value: preferences.touristyPreference
    },
    {
      field: 'plannedPreference' as keyof UserPreferences,
      label: 'Planning Style',
      leftLabel: 'Spontaneous',
      rightLabel: 'Well-Planned',
      value: preferences.plannedPreference
    },
    {
      field: 'luxuryPreference' as keyof UserPreferences,
      label: 'Comfort Level',
      leftLabel: 'Budget-Conscious',
      rightLabel: 'Luxury Experience',
      value: preferences.luxuryPreference
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-50 via-white to-sunset-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-ocean-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                <Check className="w-4 h-4" />
              </div>
              <span className="ml-2 text-sm font-medium text-ocean-600">Trip Basics</span>
            </div>
            <div className="w-16 h-1 bg-ocean-500 rounded"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-ocean-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="ml-2 text-sm font-medium text-ocean-600">Preferences</span>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tell Us About Your Travel Style
            </h1>
            <p className="text-lg text-gray-600">
              Help us understand what makes the perfect trip for you.
            </p>
          </div>

          <div className="space-y-12">
            {/* Travel Styles */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                What type of traveler are you? (Select all that apply)
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {travelStyles.map((style, index) => (
                  <motion.button
                    key={style.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => handleTravelStyleToggle(style.id)}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      preferences.travelStyles.includes(style.id)
                        ? 'border-ocean-500 bg-ocean-50 text-ocean-700 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <div className="text-3xl mb-2">{style.icon}</div>
                    <div className="font-medium text-sm mb-1">{style.name}</div>
                    <div className="text-xs text-gray-500">{style.description}</div>
                    {preferences.travelStyles.includes(style.id) && (
                      <div className="mt-2">
                        <Check className="w-4 h-4 text-ocean-600 mx-auto" />
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Experience Preferences */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                What experiences interest you most? (Select all that apply)
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {experiencePreferences.map((experience, index) => (
                  <motion.button
                    key={experience.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => handleExperienceToggle(experience.id)}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      preferences.experiences.includes(experience.id)
                        ? 'border-sunset-500 bg-sunset-50 text-sunset-700 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <div className="text-2xl mb-2">{experience.icon}</div>
                    <div className="font-medium text-sm">{experience.name}</div>
                    {preferences.experiences.includes(experience.id) && (
                      <div className="mt-2">
                        <Check className="w-4 h-4 text-sunset-600 mx-auto" />
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Preference Sliders */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Fine-tune your preferences
              </h2>
              <div className="space-y-8">
                {sliders.map((slider) => (
                  <div key={slider.field}>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      {slider.label}
                    </label>
                    <div className="space-y-2">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={slider.value}
                        onChange={(e) => handleSliderChange(slider.field, parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{slider.leftLabel}</span>
                        <span className="font-medium text-ocean-600">
                          {slider.value}%
                        </span>
                        <span>{slider.rightLabel}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Level */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                What's your ideal activity level?
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {activityLevels.map((level) => (
                  <motion.button
                    key={level.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setPreferences(prev => ({ ...prev, activityLevel: level.id as any }))}
                    className={`p-6 rounded-xl border-2 transition-all text-center ${
                      preferences.activityLevel === level.id
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <div className="text-emerald-600 mb-3 flex justify-center">
                      {level.icon}
                    </div>
                    <div className="font-semibold text-lg mb-2">{level.label}</div>
                    <div className="text-sm text-gray-500">{level.description}</div>
                    {preferences.activityLevel === level.id && (
                      <div className="mt-3">
                        <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between pt-8 mt-8 border-t border-gray-200">
            <button
              onClick={() => navigate('/trip-basics')}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            
            <button
              onClick={handleNext}
              disabled={preferences.travelStyles.length === 0 || preferences.experiences.length === 0}
              className="btn-primary inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Create My Itinerary
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PreferencesForm; 