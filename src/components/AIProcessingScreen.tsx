import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Sparkles, MapPin, Calendar, Check } from 'lucide-react';
import { useTravelPlanner } from '../context/TravelPlannerContext';
import { sampleItinerary } from '../data/mockData';

const AIProcessingScreen: React.FC = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useTravelPlanner();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const processingSteps = useMemo(() => [
    {
      message: "Analyzing your travel preferences...",
      icon: <Brain className="w-6 h-6" />,
      duration: 1000
    },
    {
      message: `Finding hidden gems in ${state.tripBasics?.destination || 'your destination'}...`,
      icon: <MapPin className="w-6 h-6" />,
      duration: 1200
    },
    {
      message: "Matching activities to your travel style...",
      icon: <Sparkles className="w-6 h-6" />,
      duration: 1000
    },
    {
      message: "Optimizing daily schedules...",
      icon: <Calendar className="w-6 h-6" />,
      duration: 800
    },
    {
      message: "Adding personalized recommendations...",
      icon: <Check className="w-6 h-6" />,
      duration: 800
    }
  ], [state.tripBasics?.destination]);

  useEffect(() => {
    const processSteps = async () => {
      let totalProgress = 0;
      const progressIncrement = 100 / processingSteps.length;

      for (let i = 0; i < processingSteps.length; i++) {
        setCurrentStep(i);
        
        // Animate progress
        const stepDuration = processingSteps[i].duration;
        const progressSteps = 20;
        const progressStepDuration = stepDuration / progressSteps;
        
        for (let j = 0; j <= progressSteps; j++) {
          const stepProgress = (j / progressSteps) * progressIncrement;
          setProgress(totalProgress + stepProgress);
          await new Promise(resolve => setTimeout(resolve, progressStepDuration));
        }
        
        totalProgress += progressIncrement;
        
        // Pause between steps
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      // Complete processing
      setProgress(100);
      
      // Set the sample itinerary in context
      dispatch({ type: 'SET_ITINERARY', payload: sampleItinerary });
      
      // Wait a moment before navigating
      setTimeout(() => {
        navigate('/itinerary');
      }, 1000);
    };

    processSteps();
  }, [dispatch, navigate, processingSteps, state.tripBasics?.destination]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-50 via-white to-sunset-50 flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card p-8 md:p-12"
        >
          {/* AI Brain Animation */}
          <div className="relative mb-8">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-ocean-400 to-sunset-500 rounded-full flex items-center justify-center"
            >
              <Brain className="w-12 h-12 text-white" />
            </motion.div>
            
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-ocean-400 rounded-full"
                animate={{
                  x: [0, Math.cos(i * 60 * Math.PI / 180) * 50, 0],
                  y: [0, Math.sin(i * 60 * Math.PI / 180) * 50, 0],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Creating Your Perfect Trip
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Our AI is analyzing your preferences and crafting a personalized itinerary just for you.
          </p>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="bg-gray-200 rounded-full h-3 mb-4">
              <motion.div
                className="bg-gradient-to-r from-ocean-500 to-sunset-500 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-sm text-gray-500">
              {Math.round(progress)}% complete
            </p>
          </div>

          {/* Processing Steps */}
          <div className="space-y-4">
            {processingSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: index <= currentStep ? 1 : 0.3,
                  x: 0 
                }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex items-center justify-start space-x-4 p-4 rounded-xl transition-all ${
                  index === currentStep 
                    ? 'bg-ocean-50 border border-ocean-200' 
                    : index < currentStep 
                    ? 'bg-green-50 border border-green-200'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <div className={`flex-shrink-0 ${
                  index === currentStep 
                    ? 'text-ocean-600' 
                    : index < currentStep 
                    ? 'text-green-600'
                    : 'text-gray-400'
                }`}>
                  {index < currentStep ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <motion.div
                      animate={index === currentStep ? { rotate: 360 } : {}}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      {step.icon}
                    </motion.div>
                  )}
                </div>
                <span className={`text-left font-medium ${
                  index === currentStep 
                    ? 'text-ocean-700' 
                    : index < currentStep 
                    ? 'text-green-700'
                    : 'text-gray-500'
                }`}>
                  {step.message}
                </span>
                {index === currentStep && (
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex-shrink-0 w-2 h-2 bg-ocean-500 rounded-full"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Fun facts while processing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-8 p-4 bg-gradient-to-r from-sunset-50 to-ocean-50 rounded-xl border border-sunset-200"
          >
            <p className="text-sm text-gray-600">
              <span className="font-medium text-sunset-700">Did you know?</span> Our AI considers over 500 factors including weather, local events, opening hours, and user reviews to create your perfect itinerary.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIProcessingScreen; 