import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TravelPlannerProvider } from './context/TravelPlannerContext';
import LandingPage from './components/LandingPage';
import TripBasicsForm from './components/TripBasicsForm';
import PreferencesForm from './components/PreferencesForm';
import AIProcessingScreen from './components/AIProcessingScreen';
import ItineraryScreen from './components/ItineraryScreen';
import BookingConfirmation from './components/BookingConfirmation';

function App() {
  return (
    <TravelPlannerProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/trip-basics" element={<TripBasicsForm />} />
            <Route path="/preferences" element={<PreferencesForm />} />
            <Route path="/ai-processing" element={<AIProcessingScreen />} />
            <Route path="/itinerary" element={<ItineraryScreen />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          </Routes>
        </div>
      </Router>
    </TravelPlannerProvider>
  );
}

export default App; 